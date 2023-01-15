import {Link} from "react-router-dom"
import * as React from 'react';
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { Delete } from "@mui/icons-material";
import { Context } from "../../context/Context";
import { GET_USERS, FILTER_BY_WORD, DELETE_USER} from "../../context/actions";
import { DialogContent,DialogContentText, DialogTitle,Dialog ,DialogActions, Button, Slide} from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';


function DeleteUser({userId}) {
const url =` https://gorest.co.in/public/v2/users/${userId}?access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`
const [isDeleteUser, setIsDeleteUser] = useState(false)

    const {dispatch}  = useContext(Context)

    const handleDeleteUser = async (e)=>{
        try {
            await axios.delete(url)
            dispatch({type : DELETE_USER, payload: userId })
        } catch (error) {
            console.log(error);
        }
    }
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />
      })
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false)
      setIsDeleteUser(!isDeleteUser)
    };
  
return(
    <>{
        (isDeleteUser)
        ?<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        >
        <DialogTitle>{"DELETE USER"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Are you sure you want to delete this user?
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleDeleteUser}>Delete</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
        :<Delete onClick ={(e) => 
           { handleClickOpen()
            setIsDeleteUser(true)
         }} ></Delete>
        
    }
    
    </>
)
    
}
export default DeleteUser