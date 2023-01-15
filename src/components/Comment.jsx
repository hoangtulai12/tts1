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
export default function Comment({post}) {
const url = `https://gorest.co.in/public/v2/posts/${post.id}/comments?access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`


const [comments, setComments] = useState([])

useEffect(()=>{
    const fetchComment = async (e) =>{
            try {
                const res = await axios.get(url)
                setComments(res.data)
                // navigate("/")
            } catch (err) {
                console.log(err);
            } 
    
    }
    fetchComment()
},[])

  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">PostID</TableCell>
            <TableCell align="center">CommnetID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments?.map((comment) => (
            <TableRow
              key={comment.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="center">{comment?.post_id}</TableCell>
              <TableCell align="center">{comment?.id}</TableCell>
              <TableCell align="center">{comment?.name}</TableCell>
              <TableCell align="center">{comment?.email}</TableCell>
              <TableCell align="center">{comment?.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
