//user
const SORT_BY_ID = "sortbyid"
const SORT_BY_NAME = "sortbyname"
const SORT_BY_EMAIL = "sortbyemail"
const SORT_BY_GENDER = "sortbygender"
const SORT_BY_STATUS = "sortbystatus"
const GET_USERS = "getusers"
const FILTER_USERS = "filterusers"
const DELETE_USER = "deleteuser"
const ADD_USER  = 'adduser'
const SET_IS_ADD_USER = 'setisadduser'
const EDIT_USER = "edituser"
const SET_IS_EDIT_USER = "setisedituser"
const IS_ALERT = "isalert"
const SET_IS_ADD_POST = 'setisaddpost'
const DELETE_POST = "deletepost"


///post
const GET_POSTS = "getposts"
const ADD_POST = "addpost"
const EDIT_POST= "editpost"
const SET_IS_EDIT_POST = "setiseditpost"
const SET_IS_UPDATE_POST = "setisupdatepost"
const UPDATE_POST = "updatepost"
const SORT_BY_POSTS_ID = "sortbypostsid"
const SORT_BY_POSTS_CONTENT = "sortbypostscontent"
const SORT_BY_POSTS_TITLE = "sortbypoststitle"
const FILTER_POSTS = "filterposts"
//page
const SET_USER_PAGE = "setpage"
const SET_USERS_PER_PAGE = "setusersperpage"
const SET_POSTS_PER_PAGE = "setpostsperpage"
const SET_POST_PAGE = "setpostpage"

const getUsers = (users)=>(
    {
        type : GET_USERS,
        payload : users
    }
)
const getPosts = (posts)=>(
    {
        type : GET_POSTS,
        payload : posts
    }
)
const sortById = (users)=>(
    {
        type : SORT_BY_STATUS,
        payload : users
    }
)

const sortByName = (users)=>(
    {
        type : SORT_BY_NAME,
        payload : users
    }
)
const sortByEmail = (users)=>(
    {
        type : SORT_BY_EMAIL,
        payload : users
    }
)
const sortByGender = (users)=>(
    {
        type : SORT_BY_GENDER,
        payload : users
    }
)
const sortByStatus = (users)=>(
    {
        type : SORT_BY_STATUS,
        payload : users
    }
)
const filterUsers = (usersFilter)=>(
    {
        type : FILTER_USERS,
        payload :{
            isFetchApi : true,
            usersFilter : usersFilter,
        }   
    }
)
const deleteUser = (userId)=>(
        {
            type : DELETE_USER,
            payload : userId
        }
)
const setIsAddUser = (isAddUser)=>(
    {
        type : SET_IS_ADD_USER,
        payload : isAddUser 
        }
    
)
const addUser = (user)=>(
    {
        type : ADD_USER,
        payload : user
    }
)
const editdUser = (user)=>(
    {
        type : EDIT_USER,
        payload : user
    }
)
const setIsEditUser = (isEditUser)=>(
    {
        type : SET_IS_ADD_USER,
        payload : isEditUser 
        }
    
)
const addPost = (post)=>(
    {
        type : ADD_POST,
        payload : post
    }
)
const setIsAddPost = (isAddPost)=>(
    {
        type : SET_IS_ADD_POST,
        payload : isAddPost
        }
    
)
const deletePost = (postId)=>(
    {
        type : DELETE_POST,
        payload : postId
    }
)

const editdPost = (post)=>(
    {
        type : EDIT_POST,
        payload : post
    }
)
const setIsEditPost = (isEditPost)=>(
    {
        type : SET_IS_EDIT_POST,
        payload : isEditPost 
        }
    
)
const alert = (isAlert)=>(
    {
        type : IS_ALERT,
        payload : isAlert 
        }
)

const UpdatePost = (post)=>(
    {
        type : UPDATE_POST,
        payload : post
    }
)
const setIsUpdatePost = (isUpdatePost)=>(
    {
        type : SET_IS_UPDATE_POST,
        payload : isUpdatePost 
        }
    
)
//// action page
const setUserPage = (userPage)=>(
    {
        type : SET_USER_PAGE,
        payload : userPage 
        }
        
)
const setUsersPerPage = (usersPerPage)=>{
    return{
        type : SET_USERS_PER_PAGE,
        payload : usersPerPage 
        }

}
const setPostPage = (postPage)=>(
    {
        type : SET_POST_PAGE,
        payload : postPage 
        }
        
)
const setPostsPerPage = (postsPerPage)=>{
    return{
        type : SET_POSTS_PER_PAGE,
        payload : postsPerPage 
        }

}
///sortposts
const sortByPostsId = (posts)=>(
    {
        type : SORT_BY_POSTS_ID,
        payload : posts
    }
)

const sortByPostsTitle = (posts)=>(
    {
        type : SORT_BY_POSTS_TITLE,
        payload : posts
    }
)
const sortByPostsContent = (posts)=>(
    {
        type : SORT_BY_POSTS_CONTENT,
        payload : posts
    }
)
const filterPosts = (postsFilter)=>(
    
    {
        type : FILTER_POSTS,
        payload :{
            isFetchApi : true,
            postsFilter : postsFilter
        }   
    }
)    

export {sortByName, sortByEmail,sortByGender,sortByStatus,getUsers, sortById,filterUsers,deleteUser,
    addUser,setIsAddUser,editdUser, setIsEditUser, alert, getPosts, setIsAddPost, addPost,deletePost,
    editdPost, setIsEditPost, UpdatePost,setIsUpdatePost,setUserPage,setUsersPerPage,sortByPostsId,sortByPostsTitle,
    sortByPostsContent,filterPosts,setPostPage,setPostsPerPage
} 
export { GET_USERS ,SORT_BY_NAME, SORT_BY_EMAIL, SORT_BY_GENDER, SORT_BY_STATUS, SORT_BY_ID ,
    FILTER_USERS,DELETE_USER,ADD_USER,SET_IS_ADD_USER,EDIT_USER, SET_IS_EDIT_USER, IS_ALERT,
     GET_POSTS, SET_IS_ADD_POST, ADD_POST, DELETE_POST,SET_IS_EDIT_POST,EDIT_POST,SET_IS_UPDATE_POST,
     UPDATE_POST,SET_USER_PAGE,SET_USERS_PER_PAGE,SORT_BY_POSTS_ID,SORT_BY_POSTS_TITLE,SORT_BY_POSTS_CONTENT,FILTER_POSTS,
     SET_POSTS_PER_PAGE, SET_POST_PAGE}