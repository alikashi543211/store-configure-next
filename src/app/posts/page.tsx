"use client"
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "@/redux/slices/postsSlice";
import styles from "./page.module.css";
import { useState } from "react";

import React from "react";

const Posts = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const posts = useSelector((state:any) => state.posts)

    console.log(posts)

    const handleRemovePost =  (postId:any) => {
        dispatch(deletePost(postId));
    }

    return (
        <div>
            <h1 className={styles.heading}>Posts</h1>
            {posts ? (
                posts.map((post: any) => (
                    <div key={post.id} className={styles.post}>
                        <h3 className={styles.title}>{post.title}</h3>
                        <p className={styles.description}>{post.description}</p>
                        <button className={styles.deleteButton} onClick={() => handleRemovePost(post.id)}>
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    )
}

export default Posts;