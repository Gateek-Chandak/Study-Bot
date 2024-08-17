'use client'

import { useYoutubeDataContext } from "../contexts/YoutubeDataContext"
import { v4 as uuidv4 } from 'uuid'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

interface YoutubeData {
    id: string,
    thumbnail: string,
    videoTitle: string,
    channelTitle: string
}

const YoutubeDisplay = () => {

    const { youtubeDataItems } = useYoutubeDataContext()

    return ( 
        <div className={`pb-10 px-10 pt-8 w-full bg-zinc-600 flex flex-col gap-7 ${youtubeDataItems? "" : "hidden"}`}>
            <h1 className="text-danger-500 text-center text-lg rounded-xl bg-zinc-800 p-1 w-2/12">Top YouTube Results...</h1>
            <div className={`flex flex-row w-full gap-5 ${youtubeDataItems? "" : "hidden"}`}>
                {youtubeDataItems && youtubeDataItems.map((item: YoutubeData) => (
                    <Card key={uuidv4()} shadow="md" className="bg-zinc-800">
                        <CardHeader>
                            <Image src={item.thumbnail} radius="md" className="" alt="youtube thumbnail" width={1000} shadow="md"/>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <Link href={"https://www.youtube.com/watch?v=" + item.id} underline="hover" className="block text-center text-gray-200" target="_blank">{item.videoTitle}</Link>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <p className="text-center block text-zinc-500">{item.channelTitle}</p>
                        </CardFooter>
                    </Card> 
                ))}
            </div>
        </div>
     );
}
 
export default YoutubeDisplay;

