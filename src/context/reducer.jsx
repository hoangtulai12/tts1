import { getUsers,SET_IS_EDIT_POST,SET_USERS_PER_PAGE,sortByName, SORT_BY_POSTS_CONTENT, SORT_BY_POSTS_ID, SORT_BY_POSTS_TITLE } from "./actions";
import { SORT_BY_NAME, GET_USERS , SORT_BY_EMAIL, SORT_BY_GENDER, SORT_BY_STATUS, EDIT_USER, SET_IS_EDIT_USER,
     SORT_BY_ID,FILTER_USERS,DELETE_USER,ADD_USER, SET_IS_ADD_USER,IS_ALERT, GET_POSTS, ADD_POST ,SET_IS_ADD_POST,
      DELETE_POST,EDIT_POST,SET_IS_UPDATE_POST, UPDATE_POST,SET_USER_PAGE,FILTER_POSTS,SET_POSTS_PER_PAGE,SET_POST_PAGE} from "./actions";
function reducer(state, actions) {
    switch (actions.type) {
        case GET_USERS:
            return{
                ...state,
                users : actions.payload
            }
        case GET_POSTS:
                return{
                    ...state,
                    posts : actions.payload
                }    
        case SORT_BY_NAME:
            return{
                ...state,
                users : actions.payload
            }
        case SORT_BY_EMAIL:
            return{
                ...state,
                users : actions.payload
            }    
        case SORT_BY_GENDER:
             return{
                ...state,
                users : actions.payload
            }
        case SORT_BY_STATUS:
           return{
            ...state,
                   users : actions.payload
           }
        case SORT_BY_ID:
           return{
            ...state,
               users : actions.payload
           }
        case FILTER_USERS:
           return{
            ...state,
            users : state.users,
            usersFilter : actions.payload
           }

        case DELETE_USER:
            const users = [...state.users]
            const newUsers =  users.filter(u =>{ 
            return u.id !== actions.payload
            })
            return{
             ...state,
             users : newUsers
            }
       case ADD_USER:
            const arr = [...state.users]
            arr[0] = actions.payload
            return{
             ...state,
             users : arr
            }
       case SET_IS_ADD_USER:
            return{
             ...state,
             isAddUser : actions.payload
            }
       case EDIT_USER:
            const userss = [...state.users]
            const arrr = userss.filter(u =>{ 
                return u.id !== actions.payload.id
                })
            arrr.push(actions.payload)
            return{
             ...state,
             users : arrr
            }
       case SET_IS_EDIT_USER:
            return{
             ...state,
             isEditUser : actions.payload
            }
            case IS_ALERT:
                return{
                 ...state,
                 isAlert : actions.payload
                }
  ///////////// post
        case ADD_POST:
            const arrrr = [...state.posts]
            arrrr[0] = actions.payload
            return{
             ...state,
             posts : arrrr
            }   
            case SET_IS_ADD_POST:
            return{
             ...state,
             isAddPost : actions.payload
            }
            case DELETE_POST:
                const posts = [...state.posts]
                const newPosts =  posts.filter(p =>{ 
                return p.id !== actions.payload
                })
                return{
                 posts : newPosts
                }
                case EDIT_POST:
                    const postss = [...state.users]
                    const arrrrrr = postss.filter(u =>{ 
                        return u.id !== actions.payload.id
                        })
                        arrrrrr.push(actions.payload)
                    return{
                     ...state,
                     posts : arrrrrr
                    }
               case SET_IS_EDIT_POST:
                    return{
                     ...state,
                     isEditPost : actions.payload
                    }
            case UPDATE_POST:
            const postsssss = [...state.posts]
            const br = postsssss.filter(p =>{ 
                return p.id !== actions.payload.id
                })
                br.push(actions.payload)
            return{
             ...state,
             posts : br
            }
            case SET_IS_UPDATE_POST:
            return{
             ...state,
             isUpdatePost : actions.payload
            }
            case SORT_BY_POSTS_ID:
                return{
                    ...state,
                    posts : actions.payload
                }
            case SORT_BY_POSTS_TITLE:
                return{
                    ...state,
                    posts : actions.payload
                }    
            case SORT_BY_POSTS_CONTENT:
                 return{
                    ...state,
                    posts : actions.payload
                }                       
                case FILTER_POSTS:
                    return{
                     ...state,
                     postsFilter : actions.payload
                    }                            
 ///page
        case SET_USER_PAGE :
            return{
                ...state,
                userPage : actions.payload
            }
            case SET_USERS_PER_PAGE :
                return{
                    ...state,
                    usersPerPage : actions.payload
                }
            case SET_POST_PAGE :
            return{
                ...state,
                postPage : actions.payload
            }
            case SET_POSTS_PER_PAGE :
                return{
                    ...state,
                    postsPerPage : actions.payload
                }  
        default:
            break;
    }
}
export default reducer