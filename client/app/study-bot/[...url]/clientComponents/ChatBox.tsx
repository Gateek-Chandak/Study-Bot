'use client'

import { useChat, Message } from "ai/react";
import { Input } from "@nextui-org/react";
import BotMessages from "./BotMessages";

const ChatBox = ( {sessionID, initialMessages}: {sessionID: string, initialMessages: Message[]}) => {

    const { messages, handleInputChange, input, handleSubmit } = useChat({
        api: "/api/chat-stream",
        body: { sessionID },
        initialMessages,
    })

    return (
        <div className="w-1/2 relative min-h-full flex flex-col justify-between">
            <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col overflow-auto">
                 <BotMessages messages={messages} />
            </div>
            <form onSubmit={handleSubmit} className="w-full flex bg-zinc-800 justify-center pb-6 ">
                <Input onChange={handleInputChange} value={input} className="w-3/5 h-10 rounded-full" type="text" classNames={{inputWrapper: "h-12 p-4 rounded-full"}}/>
            </form>
            
        </div>
     );
}
 
export default ChatBox;