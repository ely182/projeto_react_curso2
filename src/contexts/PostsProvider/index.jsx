import P from 'prop_types';
import { useReducer } from 'react';
import { PostsContext} from './context';
import{data} from '/data';
import {reducer} from './reducer';

export const PostsProvider = ({children}) => {
 const[postsState, postDispath] = useReducer(reducer,data);

    return <PostsContext.Provider value={{ postsState, postDispath}}>{children}</PostsContext.Provider>
};

PostsProvider.propTypes ={
    children: P.node.isRequired,
}