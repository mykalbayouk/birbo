"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface RouteParams {
    params: { id: string };
  }

export default function Edit({ params }: RouteParams) {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [image, setImgLink] = useState("");
    const [description, setCaption] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/items/${params.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const data = await response.json();
                setTitle(data.item.title);
                setImgLink(data.item.image);
                setCaption(data.item.description);
            } else {
                console.error("Failed to fetch the post");
            }
            setLoading(false);
        };
        fetchPost();
    }, []);

  

    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch(`/api/items/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, image, description }),
        });
        if (response.ok) {
            router.push("/");
        } else {
            console.error("Failed to update the post");
        }
    };

    const handleHome = () => {
        router.push("/");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f4d9a0] flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-[#f4d9a0] flex flex-col items-center justify-center">
            <div className="bg-[#fdf7e1] p-12 rounded shadow-md max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-900">Edit Post</h2>
                <form onSubmit={handleEdit} className="flex flex-col space-y-4">
                    <label htmlFor="title" className="block mb-2 text-gray-800 text-center">
                        Edit Title:
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className="w-full mt-1 p-2 rounded bg-gray-200"
                        />
                    </label>
                    <label htmlFor="image" className="block mb-2 text-gray-800 text-center">
                        Edit Image Link:
                        <input
                            value={image}
                            onChange={(e) => setImgLink(e.target.value)}
                            type="url"
                            className="w-full mt-1 p-2 rounded bg-gray-200"
                        />
                    </label>
                    <label htmlFor="description" className="block mb-4 text-gray-800 text-center">
                        Edit Caption:
                        <textarea
                            value={description}
                            onChange={(e) => setCaption(e.target.value)}
                            className="w-full mt-1 p-2 rounded bg-gray-200 h-24"
                        />
                    </label>
                    <button type="submit" className="w-full bg-[#fdd28e] py-2 rounded mt-4 text-gray-900">
                        Save Changes
                    </button>
                </form>
                <button onClick={handleHome} className="w-full bg-[#D6D6D6FF] py-2 rounded mt-4 text-gray-900">
                    Back to Home
                </button>
            </div>
        </div>
    );
}