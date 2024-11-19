"use client";

import { useRouter } from "next/navigation"; // Import from next/navigation
import { useState } from "react";

export default function Create() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [caption, setCaption] = useState("");

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { title, imgLink, caption };
        if (title === "" || imgLink === "" || caption === "") {
            alert("Please fill out all fields");
            return;
        }
        console.log(formData);
        router.push("/");
    }

    const handleHome = () => {
        router.push("/");
    }

    return (
        <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center justify-center">
            <div className="bg-[#fdf7e1] p-12 rounded shadow-md max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">Create Post</h2>
                <form onSubmit={handleCreate} className="flex flex-col space-y-4">
                    <label htmlFor="title" className="block mb-2 text-gray-800 text-center">
                        Insert Title:
                        <input onChange={(e) => setTitle(e.target.value)}
                            type="text" className="w-full mt-1 p-2 rounded bg-gray-200" />
                    </label>
                    <label htmlFor="imgLink" className="block mb-2 text-gray-800 text-center">
                        Insert Link to Image:
                        <input onChange={(e) => setImgLink(e.target.value)}
                            type="url" className="w-full mt-1 p-2 rounded bg-gray-200" />
                    </label>
                    <label htmlFor="caption" className="block mb-4 text-gray-800 text-center">
                        Insert Caption:
                        <textarea onChange={(e) => setCaption(e.target.value)}
                            className="w-full mt-1 p-2 rounded bg-gray-200 h-24" />
                    </label>
                    <button type="submit" className="w-full bg-[#fdd28e] py-2 rounded mt-4 text-gray-900">Create Post</button>
                </form>
                <button onClick={handleHome} className="w-full bg-[#D6D6D6FF] py-2 rounded mt-4 text-gray-900">Back to Home</button>
            </div>
        </div>
    );
}


