import { PostProps } from "../../types/types";

const PostCard = ({title, body}: PostProps) => {
    return (
        <div>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostCard;