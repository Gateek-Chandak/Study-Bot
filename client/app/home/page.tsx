'use client'

import { useState } from "react";

const HomePage = () => {
    const [value, setValue] = useState<string>("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log(value)
    }

    return (
        <div className="m-5">
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setValue(e.target.value)} className="text-black"/>
            </form>
        </div>
    );
}
 
export default HomePage;