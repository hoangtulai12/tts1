import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useRef } from 'react';
import axios from 'axios';
import { Context } from "../context/Context"
import { SET_IS_EDIT_USER, EDIT_USER, IS_ALERT } from "../context/actions"
import { useContext } from "react"


export default function UserSetting({user}) {

const usernameElement = useRef()
const emailElement = useRef()
const statusElement = useRef()
const{isEditUser, isAlert, dispatch} = useContext(Context)
const url = `https://gorest.co.in/public/v2/users/${user.id}?access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`



const handleSubmit = async (e) =>{
    e.preventDefault()
        const user = {
            name : usernameElement.current.value,
            email : emailElement.current.value,
            status : statusElement.current.value
       }
        
        try {
            const res = await axios.patch(url,user)
            dispatch({type :SET_IS_EDIT_USER, payload : !isEditUser})
            dispatch({type :EDIT_USER, payload : res.data})
            dispatch({type :IS_ALERT, payload : !isAlert})
            // navigate("/")
        } catch (err) {
            console.log(err);
        } 

}
  return (
    <Box style = {{display :"flex", alignItems : "center" , justifyContent : "center", flexDirection : "column"}}
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
    >
      <div>
      <TextField id="standard-basic" defaultValue={user.name} label="Name"  inputRef={usernameElement} variant="standard" component = "span" style={{width:"300px"}}/>
      </div>
      <div>
      <TextField id="standard-basic" defaultValue={user.email} label="Email"  inputRef={emailElement} variant="standard" component = "span" style={{width:"300px"}}/>

      </div>     
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Status"
          defaultValue={user.status}
          inputRef={statusElement}
          variant="standard"
        >
            <MenuItem  value={"active"}>
             Active
            </MenuItem>
            <MenuItem  value={"inactive"}>
             Inactive
            </MenuItem>
        </TextField>
        </div>
      <div style={{textAlign  : 'center', paddingLeft : "50px"}}>
      <Button 
      type="submit">UpDate 
       </Button>
       </div>
    </Box>
  );
}
