
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
import * as React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios'
import test from "./test";
export default function FilterComponent() {
 
const usersPerPage  = 100
const [users, setUsers] = useState([])
const [usersFilter, setUsersFilter] = useState([])

const [page, setPage] = useState(0)
console.log(usersFilter);


// useEffect(()=>{
//     const url = `https://gorest.co.in/public/v2/users/?page=${page+1}&per_page=${usersPerPage}&access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`
//     const fetchUsers = async (e) =>{
//             try {
//                 const res = await axios.get(url)
//                 setUsersFilter((users) =>{
//                     return [...users,...res.data]
//                 })
//                 if (page<=30) {
//                     handleChangePageUp()
                    
//                 }
//                 // navigate("/")
//             } catch (err) {
//                 console.log(err);
//             } 
    
//     }
//     fetchUsers()
// },[page, usersPerPage])
const handleChangePageUp = ()=>{
    test()
    setPage(page+1)
}
const handleChangePageDown = ()=>{

    setPage( page- 1)
}
  return (
    <TableContainer >
        <Button onClick={handleChangePageUp}>next</Button>
        <Button onClick={handleChangePageDown}>back</Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
                    <TableCell align = "center">#</TableCell>
                    <TableCell align = "center">
                    <Button >
                    ID
                    {/* {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>} */}
                    </Button>
                    </TableCell>
                    <TableCell align = "center">
                    <Button >
                    Name
                    {/* {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>} */}
                    </Button>                   
                    </TableCell>
                    <TableCell align = "center">
                    <Button >Email                    
                    {/* {sort?<ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowUpward>
                    :<ArrowDownward sx = {{fontSize : '14px', marginLeft :"2px"}}></ArrowDownward>} */}
                    </Button></TableCell>
                    <TableCell align = "center">
                    <Button >Gender
                    <ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}>
                    </ArrowUpward>
                    </Button></TableCell>
                    <TableCell align = "center">
                    <Button >Status
                    <ArrowUpward sx = {{fontSize : '14px', marginLeft :"2px"}}>
                    </ArrowUpward>
                    </Button></TableCell>
                    <TableCell>
                        ACTIONS
                    </TableCell>
                    </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user,index)=>{
                return(
                <TableRow key={user.id}>
                    <TableCell align = "center">{index+1}</TableCell>
                    <TableCell align = "center">{user?.id || "Empty"} </TableCell>
                    <TableCell align = "center">{user?.name || "Empty"}</TableCell>
                    <TableCell align = "center">{user?.email || "Empty"}</TableCell>
                    <TableCell align = "center">{user?.gender || "Empty"}</TableCell>
                    <TableCell align = "center">{user?.status || "Empty"}</TableCell>
                    <TableCell align = "center">
                    {/* <EditUser user={user} /> */}
                    <span style={{width : "6px", marginLeft : "6px"}}> </span>
                    {/* <DeleteUser userId = {user?.id} /> */}
                    </TableCell>
                </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
