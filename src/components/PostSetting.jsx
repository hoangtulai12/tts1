import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
import axios from 'axios'
export default function PostSetting({user}) {

const url = `https://gorest.co.in/public/v2/users/${user.id}/posts?access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`


const [posts, setPosts] = useState([])

useEffect(()=>{
    const fetchPost = async (e) =>{
            try {
                const res = await axios.get(url)
                setPosts(res.data)
                // navigate("/")
            } catch (err) {
                console.log(err);
            } 
    
    }
    fetchPost()
},[])

  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">PostID</TableCell>
            <TableCell align="center">title</TableCell>
            <TableCell align="center">Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts?.map((post) => (
            <TableRow
              key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{post?.id}</TableCell>
              <TableCell align="center">{post?.title}</TableCell>
              <TableCell align="center">{post?.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
