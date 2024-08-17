import { ragChat } from "./serverComponents/ragChat";
import { redis } from "./serverComponents/redis";

import ChatBox from "./clientComponents/ChatBox";

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

    const isAlreadyLoaded = await redis.sismember("loaded-urls", formatedUrl)

    const sessionID = "mock-session"

    if (!isAlreadyLoaded) {
        await ragChat.context.add({
            type: "html",
            source: formatedUrl,
            config: {chunkOverlap: 50, chunkSize: 200}
        })

        await redis.sadd("loaded-urls", formatedUrl)
    }

    return ( 
        <div className="w-full h-screen flex flex-row">
            <iframe 
                src={formatedUrl} 
                width="50%" 
                height="100%" 
                style={{ border: "2px blue solid" }}
            ></iframe>
            <ChatBox sessionID={sessionID}/>
        </div> 
    );
}

export default WebpagePage