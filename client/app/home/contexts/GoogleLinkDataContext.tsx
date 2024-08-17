'use client'

import { createContext, useState, useContext } from 'react';

interface GoogleLink {
    link: string
    title: string,
    description: string
}

// Create the context
const GoogleLinkContext = createContext<any>(undefined);

// Create a provider component
export const GoogleLinkProvider = ({ children }: { children: React.ReactNode}) => {
    const [googleLinkItems, setGoogleLinkItems] = useState<GoogleLink[] | null>(null);

    return (
        <GoogleLinkContext.Provider value={{ googleLinkItems, setGoogleLinkItems }}>
            {children}
        </GoogleLinkContext.Provider>
    );
};

// Custom hook to use the array context
export const useGoogleLinkContext = () => {
    const context = useContext(GoogleLinkContext);
    if (!context) {
        throw new Error('useArrayContext must be used within an ArrayProvider');
    }
    return context;
};
