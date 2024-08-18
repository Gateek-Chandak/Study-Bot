import { ragChat } from "@/app/study-bot/[...url]/serverComponents/ragChat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const { messages, sessionID } = await req.json()

    const lastMessage = messages[messages.length - 1].content

    const response = await ragChat.chat(lastMessage, { streaming: true, sessionID })

    return aiUseChatAdapter(response)
    
}   