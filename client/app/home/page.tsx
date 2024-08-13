'use client'

// IMPORTS
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

// HOMEPAGE
const HomePage = () => {

    // CONSTANTS
    const GOOGLE_CLOUD_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY
    const GOOGLE_CUSTOM_SEARCH_ID = process.env.NEXT_PUBLIC_GOOGLE_CUSTOM_SEARCH_ID

    // STATES
    const [value, setValue] = useState<string>("")
    const [gpt, setGPT] = useState<string>("")
    const [youtubeLinks, setYoutubeLinks] = useState<string[] | null>(null)
    const [googleLinks, setGoogleLinks] = useState<string[] | null>(null)

    // SUBMIT QUERY 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        queryOptimize()
    }

    // OPENAI QUERY OPTIMZER
    const queryOptimize = async () =>{
        setValue("")

        const query = await fetch('http://localhost:4000/api/openai/query-optimizer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {prompt: value} )
        })

        const data = await query.json()
        setGPT(data.response)
    }

    // YOUTUBE SEARCH AND RETURN VIDEOS
    const handleYTSearch = async () => {

        const youtubeEndpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(gpt)}&type=video&key=${GOOGLE_CLOUD_API_KEY}`
        const googleEndpoint = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(gpt)}&key=${GOOGLE_CLOUD_API_KEY}&cx=${GOOGLE_CUSTOM_SEARCH_ID}`

        const youtubeSearch = await fetch(youtubeEndpoint)
        const googleSearch = await fetch(googleEndpoint)

        const youtubeData = await youtubeSearch.json()
        const googleData = await googleSearch.json()

        console.log(youtubeData.items)
        console.log(googleData)
        setYoutubeLinks(youtubeData.items.map((item: any) => ("https://www.youtube.com/watch?v=" + item.id.videoId)))
        setGoogleLinks(googleData.items.map((item: any) => item.link))
    }

    return (
        <div className="m-5">
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="text-black"/>
            </form>
            <p className="text-white">{gpt}</p>
            <button className="text-white" onClick={handleYTSearch}>search</button>
            <div>
                {youtubeLinks && youtubeLinks.map((link) => (
                    <a href={link} key={uuidv4()} className="block" target="_blank">{link}</a>
                ))}
            </div>
            <div>
                {googleLinks && googleLinks.map((link) => (
                    <a href={link} key={uuidv4()} className="block" target="_blank">{link}</a>
                ))}
            </div>
        </div>
    );
}
 
export default HomePage;