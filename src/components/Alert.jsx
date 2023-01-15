import * as React from "react"
import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import { ADD_USER, SET_IS_ADD_USER,IS_ALERT } from "./../context/actions"
import { useRef, useState, useContext } from "react"
import axios from "axios"
import { Context } from "./../context/Context"


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
export default function AlertMesage() {
    
const { users,isAddUser, isAlert, dispatch} = useContext(Context)
  setTimeout(() => {
    dispatch({type :IS_ALERT, payload : !isAlert})

  }, 2000);
  const [state, setState] = React.useState({
    open: true,
    vertical: "top",
    horizontal: "center"
  })
  const { vertical, horizontal, open } = state

  const handleClose = () => {
    if(isAlert){
        dispatch({type :IS_ALERT, payload : !isAlert})
    }
    setState({ ...state, open: false })
  }
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={isAlert}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >successful</Alert>
      </Snackbar>
    </div>
  )
}
