import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
export default function PostDetail({post}) {
    console.log(post);
    const rows = [
        post.id,
        post.user_id,
        post.title,
        post.body
    ]

  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Post ID</TableCell>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">title</TableCell>
            <TableCell align="center">Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow 
            
            >
          {rows.map((row,index) => (
              <TableCell 
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              align="center">{row}</TableCell>

              ))}
              </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
