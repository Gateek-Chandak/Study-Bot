import he from 'he';

// CONSTANTS
const GOOGLE_CLOUD_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY

// YOUTUBE SEARCH AND RETURN VIDEOS
export const handleYTSearch = async ( query: string, setItems: (items: any[]) => void ) => {

    const youtubeEndpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${GOOGLE_CLOUD_API_KEY}`

    const youtubeSearch = await fetch(youtubeEndpoint)

    const youtubeData = await youtubeSearch.json()

    const items = await youtubeData.items

    setItems(items.map((item: any) => ({ id: item.id.videoId,
                                         thumbnail: item.snippet.thumbnails.high.url,
                                         videoTitle: he.decode(item.snippet.title),
                                         channelTitle: he.decode(item.snippet.channelTitle)
                                    })))
}

export default handleYTSearch