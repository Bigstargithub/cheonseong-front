"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(async (data) => {
        const jsonData = await data.json();
        if (jsonData.status === 200 && jsonData.message === "ok")
          return redirect("/admin");
      });
    }
  }, []);

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (id === "") return alert("아이디를 입력하세요.");
      if (password === "") return alert("비밀번호를 입력하세요.");

      if (Cookies.get("accessToken")) {
        alert("이미 로그인 상태입니다. 메인 페이지로 이동합니다.");
        router.push("/admin");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, password }),
        }
      );

      const data = await response.json();
      if (data.status === 401)
        return alert("아이디 또는 비밀번호를 확인하세요.");

      Cookies.set("accessToken", data.accessToken, {
        expires: 30,
        sameSite: "Lax",
      });

      alert("로그인 성공하였습니다.");
      router.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-wrap flex-col justify-center content-center mt-10">
      <Image
        src="/logo_pc.jpeg"
        width={300}
        height={0}
        alt="주복교회"
        className="w-1/4"
      />
      <form
        onSubmit={formSubmit}
        className="flex flex-col flex-wrap content-center justify-center"
      >
        <div className="flex justify-end content-center">
          <h3 className="mr-3">아이디</h3>
          <input
            type="text"
            name="admin_id"
            id="admin_id"
            className="border-1 border-black rounded-sm p-1 box-border"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="flex justify-end content-center mt-4">
          <h3 className="mr-3">비밀번호</h3>
          <input
            type="password"
            name="admin_password"
            id="admin_password"
            className="border-1 border-black rounded-sm p-1 box-border"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="p-2 border-1 border-black rounded-sm mt-4 cursor-pointer hover:bg-black hover:text-white"
        >
          로그인
        </button>
      </form>
    </section>
  );
}
