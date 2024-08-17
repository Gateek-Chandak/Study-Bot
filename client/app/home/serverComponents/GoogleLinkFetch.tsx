// CONSTANTS
const GOOGLE_CLOUD_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY
const GOOGLE_CUSTOM_SEARCH_ID = process.env.NEXT_PUBLIC_GOOGLE_CUSTOM_SEARCH_ID

// YOUTUBE SEARCH AND RETURN VIDEOS
export const handleGoogleLinkSearch = async ( query: string, setItems: (items: any[]) => void ) => {
    const googleEndpoint = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_CLOUD_API_KEY}&cx=${GOOGLE_CUSTOM_SEARCH_ID}`

    const googleSearch = await fetch(googleEndpoint)

    const googleData = await googleSearch.json()

    console.log(googleData)
    setItems(googleData.items.map((item: any) => ({ link: item.link, title: item.title, description:item.snippet })))
}

export default handleGoogleLinkSearch