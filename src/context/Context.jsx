import { createContext, useReducer } from "react";
import reducer from "./reducer";

////



const INIT_STATE ={
    //user
    users : null,
    usersFilter : null,
    isFetchApi : false,
    isAddUser : false,
    isEditUser : false,
    isAlert : false,
    
    ///post
    posts : null,
    postsFilter : null,
    isAddPost : false,
    isEditPost : false,
    isEditPost : false,
    ///page
    userPage : 0,
    usersPerPage : 5,
    postPage : 0,
    postsPerPage : 5
}
const Context  = createContext(INIT_STATE)

function ContextProvider({children}) {
    
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    return(
        <Context.Provider value= {{users: state.users,  usersFilter : state.usersFilter, isFetchApi : state.isFetchApi,
         isAddUser : state.isAddUser,isEditUser:state.isEditUser,isAlert : state.isAlert , token :state.token,
         posts: state.posts, isAddPost : state.isAddPost, isEditPost: state.isEditPost, isEditPost : state.isEditPost,
         userPage: state.userPage, usersPerPage :state.usersPerPage,postsFilter : state.postsFilter, postPage : state.postPage , postsPerPage : state.postsPerPage,
          dispatch}}>
        {children}
        </Context.Provider>
    )
    
    
}
export { ContextProvider , Context}