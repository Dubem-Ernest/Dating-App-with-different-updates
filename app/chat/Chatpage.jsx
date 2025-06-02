// app/chat/ChatPageContent.jsx
"use client";

import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import AiChat from "../components/AiChat";

export default function Chatpage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Friend";
  const id = searchParams.get("id") || "Friend";
  const description = searchParams.get("description");

  const users = useSelector((state) => state.users.users);
  const activeUser = users.find((user) => user.id == id);

  if (!description) return <p className="p-4">Loading...</p>;
  if (!activeUser?.roundedImage) return <p className="p-4">No user</p>;

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center my-4 flex gap-3 items-center justify-center">
        Chatting with{" "}
        <span>
          <img
            src={activeUser.roundedImage}
            alt={activeUser.name}
            className="w-16 h-16 object-cover rounded-full"
          />
        </span>
      </h1>
      <div>
        <AiChat description={description} activeUser={activeUser} />
      </div>
    </div>
  );
}
