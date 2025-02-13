"use client";
import Image from "next/image";
import { useChat } from "ai/react";
import { Message } from "ai";
import Chat from "./components/Chat";

export default function Home() {
    const sendMessage = async () => {
        console.log("sending message");
        const response = await fetch("http://localhost:3000/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: [
                    {
                        role: "user",
                        content: "who is the newest ferrari driver ?",
                    },
                ],
            }),
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Chat />
        </div>
    );
}
