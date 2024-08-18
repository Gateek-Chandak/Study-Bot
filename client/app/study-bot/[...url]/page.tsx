import { ragChat } from "./serverComponents/ragChat";
import { redis } from "./serverComponents/redis";
import { cookies } from "next/headers";

import ChatBox from "./clientComponents/ChatBox";
import PageHeader from "../serverComponents/Header";

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

const formatUrl = ( url: string[] ) => {
    const formatedUrl = url.map((component) => decodeURIComponent(component))

    return formatedUrl.join("/")
}

export const WebpagePage = async ( { params }: PageProps ) => {

    const formatedUrl = formatUrl(params.url as string[])
    const sessionCookie = cookies().get("sessionID")?.value

    const isAlreadyLoaded = await redis.sismember("loaded-urls", formatedUrl)

    const sessionId = (formatedUrl + "--" + sessionCookie).replace(/\//g, "")

    const initialMessages = await ragChat.history.getMessages({amount: 10, sessionId})

    if (!isAlreadyLoaded) {
        console.log(2)
        await ragChat.context.add({
            type: "html",
            source: formatedUrl,
            config: {chunkOverlap: 50, chunkSize: 200}
        })

        await redis.sadd("loaded-urls", formatedUrl)
    } else {
        console.log(1)
    }

    return ( 
        <div className="w-full h-screen flex flex-col overflow-auto">
            <PageHeader />
            <div className="flex flex-row flex-1 overflow-auto">
                <iframe 
                    src={formatedUrl} 
                    width="50%" 
                    height="100%" 
                    style={{ border: "" }}
                ></iframe>
                <ChatBox sessionID={sessionId} initialMessages={initialMessages}/>
            </div> 
        </div>
    );
}

export default WebpagePage