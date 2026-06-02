"use client";

import { useEffect, useState, useRef } from "react";
import MessageItemComponent from "../../components/messages/message_item";

type MessageType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  video_link: string;
};

const getVideoId = (url: string) => {
  try {
    const urlObj = new URL(url);
    // youtube.com/watch?v=ID
    const v = urlObj.searchParams.get("v");
    if (v) return v;
    // youtu.be/ID
    if (urlObj.hostname === "youtu.be") return urlObj.pathname.slice(1);
    // youtube.com/live/ID, /shorts/ID, /embed/ID
    const match = urlObj.pathname.match(/\/(live|shorts|embed)\/([^/?&]+)/);
    if (match) return match[2];
    return null;
  } catch {
    return null;
  }
};

export default function MessageVideoPage() {
  const [messageList, setMessageList] = useState<MessageType[]>([]);
  const [selected, setSelected] = useState<MessageType | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/sermon`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (data) => {
      const jsonData = await data.json();
      if (jsonData.status === 200) {
        setMessageList(jsonData.sermonList);
        setSelected(jsonData.sermonList[0] ?? null);
      }
    });
  }, []);

  const handleSelect = (message: MessageType) => {
    setSelected(message);
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="px-4 py-10">
      <h3 className="text-center lg:text-4xl text-3xl font-semibold">
        설교 영상
      </h3>

      {selected && (
        <div ref={playerRef} className="mt-8 max-w-3xl mx-auto">
          <div className="relative h-0 pb-[56.25%]">
            <iframe
              src={`https://www.youtube.com/embed/${getVideoId(selected.video_link)}`}
              title={selected.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-slate-800">
              {selected.title}
            </h4>
            <p className="mt-1 text-sm text-slate-500">{selected.description}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {messageList.map((message) => (
          <MessageItemComponent
            key={`message_${message.id}`}
            image={message.thumbnail}
            title={message.title}
            desc={message.description}
            isSelected={selected?.id === message.id}
            onClick={() => handleSelect(message)}
          />
        ))}
      </div>
    </main>
  );
}
