'use client'

import { createContext, useState, useContext } from 'react';

interface YoutubeData {
    id: string,
    thumbnail: string,
    videoTitle: string,
    channelTitle: string
}

// Create the context
const YoutubeDataContext = createContext<any>(undefined);

// Create a provider component
export const YoutubeDataProvider = ({ children }: { children: React.ReactNode}) => {
    const [youtubeDataItems, setYoutubeDataItems] = useState<YoutubeData[] | null>(null);

    return (
        <YoutubeDataContext.Provider value={{ youtubeDataItems, setYoutubeDataItems }}>
            {children}
        </YoutubeDataContext.Provider>
    );
};

// Custom hook to use the array context
export const useYoutubeDataContext = () => {
    const context = useContext(YoutubeDataContext);
    if (!context) {
        throw new Error('useArrayContext must be used within an ArrayProvider');
    }
    return context;
};
