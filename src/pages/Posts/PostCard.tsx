
import { PostProps } from "../../types/types";

const PostCard = ({title, body, id}: PostProps) => {

    const handleDelete = (id: number) => {
        console.log(`Post ${id} has been deleted`)
    }
    
    return (
        <div className="space-y-2">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p>{body}</p>
            <button onClick={() => handleDelete(id)} className="btn
            btn-error btn-sm">Delete</button>
        </div>
    );
};

export default PostCard;