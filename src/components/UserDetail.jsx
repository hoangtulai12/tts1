import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
export default function UserDetail({user}) {
    const rows = [
        user.id,
        user.name,
        user.email,
        user.gender,
        user.status
    ]

  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Status</TableCell>
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
