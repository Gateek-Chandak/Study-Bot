'use client'

import { useChat } from "ai/react";

const ChatBox = ( {sessionID}: {sessionID: string}) => {

    const { messages, handleInputChange, input } = useChat({
        api: "/api/chat-stream",
        body: { sessionID }
    })

    return ( 
        <div className="w-1/2 relative min-h-full flex flex-col justify-between 
                        divide-y divide-zinc-700 gap-2">
            <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
                 {JSON.stringify(messages)}
            </div>
            <input onChange={handleInputChange} value={input} type="text" />
        </div>
     );
}
 
export default ChatBox;