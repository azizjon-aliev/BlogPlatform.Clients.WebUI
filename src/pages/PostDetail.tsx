import {FC} from "react";
import {useParams} from "react-router";

const PostDetail: FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Post Page</h1>
            <p>ID: {id}</p>
            <a href={"/"}>Back to Home</a>
        </div>
    );
};

export default PostDetail;