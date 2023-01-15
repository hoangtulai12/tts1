import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {InputLabel} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Button, TextareaAutosize } from '@mui/material';
import { useRef } from 'react';
import axios from 'axios';
import { Context } from "../context/Context"
import { SET_IS_UPDATE_POST, UPDATE_POST, IS_ALERT } from "../context/actions"
import { useContext } from "react"

export default function UpdatePost({post}) {

const titleElement = useRef()
const bodyElement = useRef()
const{isUpdatePost, isAlert, dispatch} = useContext(Context)
const url = `https://gorest.co.in/public/v2/posts/${post.id}?access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`

const handleSubmit = async (e) =>{
    e.preventDefault()
        const post = {
            title : titleElement.current.value,
            body : bodyElement.current.value,
       }
        try {
            const res = await axios.patch(url,post)
            dispatch({type :SET_IS_UPDATE_POST, payload : !isUpdatePost})
            dispatch({type :UPDATE_POST, payload : res.data})
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
      <TextField id="standard-basic" defaultValue={post.title} label="Title"  inputRef={titleElement} variant="standard" component = "span"  style={{width:"300px"}}/>
      </div>
      <div>
      <InputLabel shrink htmlFor="bootstrap-input">
      Content
        </InputLabel>
      <TextareaAutosize id="standard-basic"    placeholder="Edit Content here" defaultValue={post.body}  ref={bodyElement} style={{width:"300px"}}    aria-label="Content"minRows={10}/>

      </div>     
      <div style={{textAlign  : 'center', paddingLeft : "50px"}}>
      <Button   
      type="submit">UpDate 
       </Button>
       </div>
    </Box>
  );
}
