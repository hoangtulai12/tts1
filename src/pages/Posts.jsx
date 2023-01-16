import {
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Paper,
    Stack,
    Container,
    TableFooter,
    TablePagination,
    FormControl,
    InputLabel,
    Input,
    InputAdornment, 
    Box,
    TextField,
    MenuItem,
    Backdrop
    
} from "@mui/material"
import { FilterList,ArrowUpward,ArrowDownward, Settings, Delete ,Add} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useEffect,useState,useContext, useRef } from "react";
import { useNavigate,useParams ,Link } from "react-router-dom";
import axios from "axios";
import sortPosts from "../common/sortPosts";
import { Context } from "../context/Context";
import { GET_USERS, SORT_BY_EMAIL, SORT_BY_GENDER, SORT_BY_NAME,
     SORT_BY_STATUS,SORT_BY_ID, FILTER_POSTS,ADD_USER,
    GET_POSTS, 
    SET_IS_ADD_POST,
    SORT_BY_POSTS_ID,
    SORT_BY_POSTS_TITLE,
    SORT_BY_POSTS_CONTENT,setPostPage,setPostsPerPage} from "../context/actions";
import sortUser from "../common/sortUsers";
import filter from "../common/filter"
import DeleteUser from "../components/deleteuser/DeleteUser";
import AddPost from "../components/AddPost/AddPost";
import EditUser from "../components/EditUser";
import DeletePost from "../components/deletepost/DeletePost";
import AlertMesage from "../components/Alert";
import EditPost from "../components/EditPost";
function Posts() {
    // const [users,setUsers] = useState([])
    const [sort, setSort] = useState(true)
    const {users,postsFilter,isAlert, isAddPost, posts,postPage,postsPerPage, dispatch} = useContext(Context)
    const [dense, setDense] = useState(false);
    ///input, reset

    const titleElement = useRef()
    const contentElement = useRef()
    const [reset, setReset] = useState(true)
    const [inputTitle, setInputTitle] = useState("")
    const [inputContent, setInputContent] = useState("")
    const [isFilter, setIsFilter] = useState(false)
    const [params,setParams] = useState(null)
    const navigate = useNavigate();
    const {pageParams,perPageParams} = useParams()
   
    useEffect(()=>{
            const url = `https://gorest.co.in/public/v2/posts?page=${postPage}&per_page=${postsPerPage}&access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`
        // const url = `https://gorest.co.in/public/v2/users?page=${pageApi}&per_page=${usersPerPageApi}&access-token=${token}`
        const fetchPost = async ()=>{
            try {
                const res = await axios.get(url)
                dispatch({type : GET_POSTS,  payload: res.data })
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost()
    },[postPage,postsPerPage])
///check params
useEffect(()=>{
    if (pageParams) {
        dispatch(setPostPage(parseInt(pageParams, 10)))
        dispatch(setPostsPerPage(parseInt(perPageParams, 10)))
    }
    
},[])

const handleSortByPostId= ()=>{
       const   postsSort =  [...posts]
       sortUser(postsSort,sort,"id")
       dispatch({type : SORT_BY_POSTS_ID, payload: postsSort })
       setSort(!sort)
        }
const handleSortByTitle = ()=>{
    const   postsSort =  [...posts]
    sortUser(postsSort,sort,"title")
            dispatch({type : SORT_BY_POSTS_TITLE, payload: postsSort })
            setSort(!sort)
             }
const handleSortByContent = ()=>{
    const   postsSort =  [...posts]
    sortUser(postsSort,sort,"body")
            dispatch({type : SORT_BY_POSTS_CONTENT, payload: postsSort })
            setSort(!sort)
             }
             
///Xu ly phan trang

const handleChangePage = (e , newPage) => {
        dispatch(setPostPage(newPage))
        navigate(`/posts/${newPage}/${postsPerPage}`)
  };
const handleChangePostsPerPage = (e) => {
    dispatch(setPostsPerPage(e.target.value))
    dispatch(setPostPage(0))
    navigate(`/posts/${parseInt(pageParams,10)}/${e.target.value}`)
  };

// const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * usersPerPage - users.length) : 0;


/// xu ly loc


const handleFilter =(e)=>{
    
    if (titleElement.current.value||contentElement.current.value) {
        setReset(false)
        setIsFilter(true)

    }else{
        setReset(true)
        setIsFilter(false)
    }
    const query = [titleElement.current.value,contentElement.current.value]
    const postsFilter = filter(posts, query,"posts")
    dispatch( {type : FILTER_POSTS, payload: postsFilter })
    }

const handleReset = (e)=>{
    setReset(true)
    setInputTitle("")
    setInputContent("")
    dispatch( {type : FILTER_POSTS, payload: null})
    setIsFilter(false)



}
// add user
const [open, setOpen] = useState(false);
const handleClose = () => {
  setOpen(false);
};
const handleToggle = () => {
  dispatch({type : SET_IS_ADD_POST , payload : ! isAddPost })
};
    return (

        <Container style={{ marginTop :"50px"}} >
           {
          (isAlert)?<AlertMesage />:<div></div>
          }
            <Button onClick={handleToggle}><Add />ADD Post</Button>
           { 
           (isAddPost)
            ?<Backdrop
             sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
             open={isAddPost}
            //  onClick={handleClose}
            >
            <AddPost style={{}}></AddPost>
            
            </Backdrop>
            :<div></div>
          }
        <TableContainer sx = {{marginTop: "20px", backgroundColor: "#fafbfc"}} component={Paper}>
            <div style={{
                display :"flex",
                justifyContent : "flex-end",
                width : "100%",
                marginBottom : "16px",
                
            }}
            onChange={handleFilter} >

           
            <div style={{
                width : "200px",
                margin : " 0 30px 0 30px"

            }}> 
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <FilterList sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
             <TextField id="input-with-sx" label="Filter by title" variant="standard"
              value = {inputTitle}
              onChange={(e)=> {
                  setInputTitle(e.target.value)
                }}
                inputRef={titleElement}
                />
              </Box> 
            </div>
            <div style={{
                width : "200px",
                marginRight : "30px"

            }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <FilterList sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
             <TextField id="input-with-sx" label="Filter by content" variant="standard"
             inputRef={contentElement}
             value = {inputContent}
             onChange={(e)=> {
                setInputContent(e.target.value)
                }}/>
              </Box> 
            
            
            </div>
            <div style={{ 
                 margin :" 16px 20px 0 0 ",
                }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button 
            onClick={handleReset} 
            disabled ={reset}>
            reset
            </Button>
            </Box> 
            </div>
            </div>
            <Table sx = {{minWidth : "650"}} >
                <TableHead>
                    <TableRow>
                    <TableCell align = "center">#</TableCell>
                    <TableCell align = "center">
                    <Button onClick={handleSortByPostId}>
                    Post ID
                    {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>}
                    </Button>
                    </TableCell>
                    <TableCell align = "center">
                    <Button onClick={handleSortByPostId}>
                    User ID
                    {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>}
                    </Button>
                    </TableCell>
                    <TableCell align = "center">
                    <Button onClick={handleSortByTitle}>
                    Title
                    {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>}
                    </Button>                   
                    </TableCell>
                    <TableCell align = "center">
                    <Button onClick={handleSortByContent}>Content                   
                    {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>}
                    </Button></TableCell>
                    {/* <TableCell align = "center">
                    <Button onClick={handleSortByGender}>Gender
                    <ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}>
                    </ArrowUpward>
                    </Button></TableCell> */}

                    <TableCell align="center">
                        ACTIONS
                    </TableCell>
                    </TableRow>
                   
                </TableHead>
                
            <TableBody>
            {
            // (usersPerPage > 0
            // ? users?.slice(page * usersPerPage, page * usersPerPage + usersPerPage)
            // : users
            // )?
            (
            
                (isFilter)
                ? postsFilter
                : posts
            )?.map((post,index)=>{
                return(
                <TableRow key={post.id}>
                    <TableCell align = "center">{(index+1)+(postPage* postsPerPage)}</TableCell>
                    <TableCell align = "center">{post?.id || "Empty"} </TableCell>
                    <TableCell align = "center">{post?.user_id || "Empty"} </TableCell>
                    <TableCell align = "center" sx ={{textOverflow: "ellipsis" ,   overflow: "hidden" ,whiteSpace: "nowrap",maxWidth : "300px" }}>{post?.title || "Empty" }</TableCell>
                    <TableCell align = "center" sx ={{textOverflow: "ellipsis" ,   overflow: "hidden" ,whiteSpace: "nowrap",maxWidth : "300px"}}>{post?.body || "Empty"} </TableCell>
                    <TableCell align = "center">
                    <EditPost post={post} />
                    <span style={{width : "6px", marginLeft : "6px"}}> </span>
                    <DeletePost postId = {post?.id} />
                    </TableCell>
                </TableRow>
                )
            })
            }
            {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
            )} */}
            </TableBody>
            <TableFooter>
                <TableRow>
                {
                    (!isFilter )&&<TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                   //  component="div"
                    count={3399}
                    rowsPerPage={postsPerPage}
                    page={postPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangePostsPerPage}
               />
                }
                
                </TableRow>
            </TableFooter>
            </Table>
        </TableContainer>
        </Container>
    );
}

export default Posts;


