'use client';
import React, { useState } from 'react';
import PostCard from './PostCard'; 
import { useRouter } from "next/navigation";

export interface Post {
    _id: number;
    title: string;
    user: string;
    image: string;
    description: string;
}

interface EditPostProps {
    post: Post;
}

const EditPost: React.FC<EditPostProps> = ({ post }) => {
    const router = useRouter();
    const handleUpdate = () => {
        router.push(`/edit/${post._id}`);
    };

    const handleDelete = () => {
        fetch(`/api/items/${post._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                router.refresh();
            } else {
                console.error("Failed to delete the post");
            }
        });
        
    };
    
    return (
        <div className="relative flex flex-col items-center">
            <PostCard post={post} />
            <div className="mt-4 flex gap-4">
            <button
                onClick={handleUpdate}
                className="bg-[#fdd28e] text-white px-4 py-2 rounded hover:bg-yellow-700"
            >
                Update
            </button>
            <button
                onClick={handleDelete}
                className="bg-[#D6D6D6FF] text-black px-4 py-2 rounded hover:bg-red-600 "
            >
                Delete
            </button>
            </div>
        </div>
    );
};

export default EditPost;