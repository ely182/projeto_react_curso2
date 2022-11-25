import * as types from './types';

export const loadPosts = async () => {
    const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsRaw.json();
    dispatchEvent({type: types.POSTS_SUCCESS, payload: posts})
}