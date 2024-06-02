import {Post} from "../../../models/Post.ts";
import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons/faClock";

interface PopularPostItemProps {
    post: Post;
}

export const RandomPostItem: FC<PopularPostItemProps> = (props) => {
    return (
        <a href="#" className="flex group">
            <div className="flex-shrink-0">
                <img src={props.post.image} alt="post"
                     className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"/>
            </div>
            <div className="flex-grow pl-3">
                <h5
                    className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                    {props.post.title}
                </h5>
                <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-1 text-xs">
                        <FontAwesomeIcon icon={faClock}/>
                    </span>
                    {props.post.createdAt}
                </div>
            </div>
        </a>
    )
}