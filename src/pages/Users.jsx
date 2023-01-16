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


import { Context } from "../context/Context";
import { GET_USERS, SORT_BY_EMAIL, SORT_BY_GENDER, SORT_BY_NAME, SORT_BY_STATUS,SORT_BY_ID, FILTER_USERS,ADD_USER, SET_IS_ADD_USER,setUserPage,setUsersPerPage } from "../context/actions";
import sortUser from "../common/sortUsers";
import filter from "../common/filter"
import DeleteUser from "../components/deleteuser/DeleteUser";
import AddUser from "../components/AddUser/AddUser";
import EditUser from "../components/EditUser";
import AlertMesage from "../components/Alert";
function Users() {
    
    const [items, setItems] = useState([]);

     useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
     }, [items]);
    // const [users,setUsers] = useState([])
    const [sort, setSort] = useState(true)
    const {users,usersFilter,isAlert, isAddUser, userPage,usersPerPage, dispatch} = useContext(Context)
    const [dense, setDense] = useState(false);
    ///input, reset

    const nameElement = useRef()
    const emailElement = useRef()
    const genderElement = useRef()
    const [reset, setReset] = useState(true)
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [isFilter, setIsFilter] = useState(false)
    /// navigate
    const navigate = useNavigate();
    const {pageParams,perPageParams} = useParams()
    useEffect(()=>{
    const url = `https://gorest.co.in/public/v2/users?page=${userPage+1}&per_page=${usersPerPage}&access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`
        // const url = `https://gorest.co.in/public/v2/users?page=${pageApi}&per_page=${usersPerPageApi}&access-token=${token}`
        const fetchUser = async ()=>{
            try {
                const res = await axios.get(url)
                dispatch({type : GET_USERS, payload: res.data })
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser()
    },[userPage,usersPerPage])
    
///check params
useEffect(()=>{
    if (pageParams) {
        dispatch(setUserPage(parseInt(pageParams, 10)))
        dispatch(setUsersPerPage(parseInt(perPageParams, 10)))
    }
    
},[])


const handleSortByName = ()=>{
       const   usersSort =  [...users]
       sortUser(usersSort,sort,"name")
       dispatch({type : SORT_BY_NAME, payload: usersSort })
       setSort(!sort)
        }
const handleSortByEmail = ()=>{
            const   usersSort =  [...users]
            sortUser(usersSort,sort,"email")
            dispatch({type : SORT_BY_EMAIL, payload: usersSort })
            setSort(!sort)
             }
const handleSortByGender = ()=>{
            const   usersSort =  [...users]
            sortUser(usersSort,sort,"gender")
            dispatch({type : SORT_BY_GENDER, payload: usersSort })
            setSort(!sort)
             }
const handleSortByStatus = ()=>{
            const   usersSort =  [...users]
            sortUser(usersSort,sort,"status")
            dispatch({type : SORT_BY_STATUS, payload: usersSort })
            setSort(!sort)
             }
const handleSortById = ()=>{
            const   usersSort =  [...users]
            sortUser(usersSort,sort,"id")
            dispatch({type : SORT_BY_ID, payload: usersSort })
            setSort(!sort)
             }
             
///Xu ly phan trang


const handleChangePage = (e , newPage) => {
            dispatch(setUserPage(newPage))
            navigate(`/users/${newPage}/${usersPerPage}`)

  };

const handleChangeUsersPerPage = (e) => {
    dispatch(setUsersPerPage(parseInt(e.target.value, 10)))
    dispatch(setUserPage(0))
    navigate(`/users/${parseInt(pageParams,10)}/${e.target.value}`)
  };

/// xu ly loc


const handleFilter =(e)=>{
    
    if (nameElement.current.value||emailElement.current.value||genderElement.current.value!=="default") {
        setReset(false)
        setIsFilter(true)
    }else{

        setReset(true)
        setIsFilter(false)

    }
    const query = [nameElement.current.value,emailElement.current.value,genderElement.current.value]
    const usersFilter = filter(users, query,"users")
    dispatch( {type : FILTER_USERS, payload:usersFilter })
    }

const handleReset = (e)=>{
    setReset(true)
    setInputName("")
    setInputEmail("")
    genderElement.current.value = "default"
    dispatch( {type : FILTER_USERS, payload: null})
    setIsFilter(false)


}
// add user
const [open, setOpen] = useState(false);
const handleClose = () => {
  setOpen(false);
};
const handleToggle = () => {
  dispatch({type : SET_IS_ADD_USER , payload : !isAddUser })
};
    return (

        <Container style={{ marginTop :"50px"}} >
           {
          (isAlert)?<AlertMesage />:<div></div>
          }
            <Button onClick={handleToggle}><Add />ADD User</Button>
           { 
           (isAddUser)
            ?<Backdrop
             sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
             open={isAddUser}
            //  onClick={handleClose}
            >
            <AddUser style={{}}></AddUser>
            
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
             <TextField id="input-with-sx" label="Filter by name" variant="standard"
              value = {inputName}
              onChange={(e)=> {
                  setInputName(e.target.value)
                }}
                inputRef={nameElement}
                />
              </Box> 
            </div>
            <div style={{
                width : "200px",
                marginRight : "30px"

            }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <FilterList sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
             <TextField id="input-with-sx" label="Filter by email" variant="standard"
             inputRef={emailElement}
             value = {inputEmail}
             onChange={(e)=> {
                setInputEmail(e.target.value)
                }}/>
              </Box> 
            </div>
            <div style={{
                width : "200px",
                height : "50px"
            }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <FilterList  sx={{ color: 'action.active', mr: 1, my: 0.5, mt : 2.5 }} />
            <TextField
             id="outlined-select-currency"
             select
             defaultValue="default"
             variant="standard"
             inputRef={genderElement}
             onChange = {(e=> {
                setTimeout(() => {
                        handleFilter()       
                }, 100);
            })}
            >
            <MenuItem  value="default">
             Gender
            </MenuItem>
            <MenuItem  value={"male"}>
              Male
            </MenuItem>
            <MenuItem  value={"female"}>
              Fenmale
            </MenuItem>
            </TextField>
              </Box>
            
            </div>
            <div style={{ 
                 margin :" 16px 40px 0 0 ",
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
                    <Button onClick={handleSortById}>
                    ID
                    {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>}
                    </Button>
                    </TableCell>
                    <TableCell align = "center">
                    <Button onClick={handleSortByName}>
                    Name
                    {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>}
                    </Button>                   
                    </TableCell>
                    <TableCell align = "center">
                    <Button onClick={handleSortByEmail}>Email                    
                    {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>}
                    </Button></TableCell>
                    <TableCell align = "center">
                    <Button onClick={handleSortByGender}>Gender
                    <ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}>
                    </ArrowUpward>
                    </Button></TableCell>
                    <TableCell align = "center">
                    <Button onClick={handleSortByStatus}>Status
                    <ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}>
                    </ArrowUpward>
                    </Button></TableCell>
                    <TableCell align  ="center">
                        ACTIONS
                    </TableCell>
                    </TableRow>
                    {/* <TableRow>
                    <TableCell align = "center">
                    </TableCell>
                    <TableCell align = "center">
                        <Stack>
                            <FilterList>
                            </FilterList>
                            </Stack>
                    </TableCell>
                    <TableCell align = "center">#</TableCell>
                    <TableCell align = "center"> <Stack>
                            <FilterList>
                            </FilterList>
                            </Stack></TableCell>
                    <TableCell align = "center">
                    <Stack>
                            <FilterList>
                            </FilterList>
                            </Stack>
                    </TableCell>
                    <TableCell align = "center">#</TableCell></TableRow> */}
                </TableHead>
                
            <TableBody>
            {
            // (usersPerPage > 0
            // ? users?.slice(page * usersPerPage, page * usersPerPage + usersPerPage)
            // : users
            // )?
            (
            
                (isFilter)
                ? usersFilter
                : users
            )?.map((user,index)=>{
                return(
                <TableRow key={user.id}>
                    <TableCell align = "center">{(index+1)+(userPage* usersPerPage)}</TableCell>
                    <TableCell align = "center">{user?.id || "Empty"} </TableCell>
                    <TableCell align = "center">{user?.name || "Empty"}</TableCell>
                    <TableCell align = "center">{user?.email || "Empty"}</TableCell>
                    <TableCell align = "center">{user?.gender || "Empty"}</TableCell>
                    <TableCell align = "center">{user?.status || "Empty"}</TableCell>
                    <TableCell align = "center">
                    <EditUser user={user} />
                    <span style={{width : "6px", marginLeft : "6px"}}> </span>
                    <DeleteUser userId = {user?.id} />
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
                    (!isFilter)&& <TablePagination
                         rowsPerPageOptions={[5, 10, 25]}
                        //  component="div"
                         count={3399}
                         rowsPerPage={usersPerPage}
                         page={userPage}
                         onPageChange={handleChangePage}
                         onRowsPerPageChange={handleChangeUsersPerPage}
                    />
                }
                   
            
                </TableRow>
            </TableFooter>
            </Table>
        </TableContainer>
        </Container>
    );
}

export default Users;
