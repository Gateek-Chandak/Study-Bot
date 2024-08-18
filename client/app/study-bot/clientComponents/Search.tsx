'use client'

import { useState } from "react";

import { Input, Button } from "@nextui-org/react";

import queryOptimize from "../serverComponents/QueryOptimizer";
import handleGoogleLinkSearch from "../serverComponents/GoogleLinkFetch";
import handleYTSearch from "../serverComponents/YoutubeFetch";

import { useYoutubeDataContext } from "../contexts/YoutubeDataContext";
import { useGoogleLinkContext } from "../contexts/GoogleLinkDataContext";


const SearchSection = () => {
 
    const { setYoutubeDataItems } = useYoutubeDataContext()
    const { setGoogleLinkItems } = useGoogleLinkContext()

     // STATES
     const [value, setValue] = useState<string>("")
 
     // SUBMIT QUERY 
     const handleSubmit = async (e: React.FormEvent) => {
         e.preventDefault()
 
        const optimizedQuery = await queryOptimize(value)

         await handleGoogleLinkSearch(optimizedQuery, setGoogleLinkItems)
         //await handleYTSearch(optimizedQuery, setYoutubeDataItems)

         setValue("")
     }
 
     return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-center bottom-0 absolute w-full h-20 backdrop-blur-sm">
            <Input type="text" value={value} 
                placeholder="Search for something to learn..."
                onChange={(e) => setValue(e.target.value)} 
                className="w-1/3 text-lg"
                classNames={{inputWrapper: "h-12 p-4 bg-zinc-300 rounded-full"}}/>
        </form>
     );
}
 
export default SearchSection;