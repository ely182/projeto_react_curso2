import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsProvider/context"

export const Posts = () => {
    const PostsContext = useContext(PostsContext);
    const { postsState, postsDispatch} = PostsContext();

    return(
        <di>
         <h1>oi</h1>
        </di>
    )
}