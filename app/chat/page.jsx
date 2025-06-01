"use client";
import { useSearchParams } from "next/navigation";
import AiChat from "../components/AiChat";
import { useDispatch, useSelector } from "react-redux";

export default function ChatPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Friend";
  const id = searchParams.get("id") || "Friend";
  const description = searchParams.get("description");

  const users = useSelector((state) => state.users.users);

  const activeUser = users.filter((user) => user.id == id);

  console.log(activeUser);

  if (!description) return <p className="p-4">Loading...</p>;

  if (!activeUser[0].roundedImage) return <p className="p-4">No user</p>;

  

  console.log(activeUser[0].roundedImage);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center my-4 flex gap-3 items-center justify-center">
        Chatting with{" "}
        <span>
          <img
            src={activeUser[0].roundedImage}
            alt={activeUser[0].name}
            className="w-16 h-16  object-cover rounded-full"
          />
        </span>
      </h1>
      <div>
        <AiChat description={description} activeUser={activeUser} />
      </div>
    </div>
  );
}
