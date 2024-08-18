'use client'

import { useGoogleLinkContext } from '../contexts/GoogleLinkDataContext'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import { Link, Divider } from '@nextui-org/react'

import BotIcon from '../../Images/bot.png'

interface GoogleLink {
    link: string,
    title: string,
    description: string
}

const YoutubeDisplay = () => {

    const { googleLinkItems } = useGoogleLinkContext()

    return ( 
        <div className={`w-full flex flex-col overflow-scroll items-center p-20 ${googleLinkItems? "" : "hidden"}`}>
            <div className={`w-3/5 flex flex-col gap-3 justify-center`}>
                {googleLinkItems && googleLinkItems.map((item: GoogleLink) => (
                    <div className='h-20' key={uuidv4()}>
                        <h1 className='text-zinc-200'>{item.title}</h1>  
                        <Link href={`/study-bot/${item.link}`} className='text-primary-400'>{item.link}</Link>
                        <Divider />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default YoutubeDisplay;