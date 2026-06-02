"use client";

import SquareItemComponent from "@/app/components/joobok-square/square_item";
import { useEffect, useState } from "react";

type SquareDataType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  link: string;
};

export default function UserJoobokSquarePage() {
  const [squareList, setSquareList] = useState<SquareDataType[]>([]);

  useEffect(() => {
    const getSquareList = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/square`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonData = await res.json();
      if (jsonData.status === 200) {
        setSquareList(jsonData.squareList);
      }
    };

    getSquareList();
  }, []);

  return (
    <main>
      <h3 className="text-center text-4xl font-semibold">주복광장</h3>
      <div id="message-list" className="mt-10">
        {squareList.length > 0 &&
          squareList.map((square) => (
            <SquareItemComponent
              key={`square_${square.id}`}
              thumbnail={square.thumbnail}
              title={square.title}
              description={square.description}
              link={square.link}
            />
          ))}
      </div>
    </main>
  );
}
