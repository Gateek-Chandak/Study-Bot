import { type Message as TMessage } from "ai/react"
import clsx, {type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

interface MessagesProps {
    messages: TMessage[]
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const BotMessages = ( { messages }: MessagesProps) => {

    console.log(messages)

    return ( 
        <div className="flex max-h-[calc(100vh)-3.5rem-7rem] flex-1 flex-col overflow-auto">
            {(messages.length > 0) ?  (messages.map((message, i) => (
                <div key={i} className={cn({
                    "bg-zinc-800": message.role === "user",
                    "bg-zinc-900/25": message.role !== "user"
                    })}>
                    <div className="p-6">
                        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
                            <div className={(cn("size-10 shrink-0 aspect-square rounded-full border border-purple-500 bg-zinc-900 flex justify-center items-center", {
                                "bg-blue-950 border-blue-700 text-zinc-200":  message.role === "user",
                            }))}>

                            </div>

                            <div className="flex flex-col ml-6 w-full">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-semibold, text-zinc-400">{ message.role === "user" ? "You" : "Study-Bot"}</span>
                                </div>

                                <p className="text-sm py-2.5 text-zinc-200">{message.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))) : ( <div className="flex justify-center p-32">
                        <h1 className="text-lg text-zinc-200">Ask Study-Bot A Question!</h1>
                    </div>
            )}
        </div>
     );
}
 
export default BotMessages;