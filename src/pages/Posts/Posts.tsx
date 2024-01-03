import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostProps } from "../../types/types";

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                posts.map((post: PostProps) => <PostCard
                    key={post.id}
                    {...post}
                    />)
            }
        </div>
    );
};

export default Posts;