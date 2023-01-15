import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import { TextField, Tabs, Box,Tab   } from "@mui/material"
import UserStetting from "./UserSetting"
import PostSetting from "./PostSetting"
import { Context } from "../context/Context"
import { SET_IS_EDIT_POST,IS_ALERT } from "../context/actions"
import { useContext } from "react"
import { Settings } from "@mui/icons-material"
import PostDetail from "./PostDetail"
import UpdatePost from "./UpdatePost"
import Comment from "./Comment"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
function TabPanel(props) {
    const { children, value, index, ...other } = props
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    }
  }
export default function EditPost({post}) {
    const{isEditPost,isAlert, dispatch} = useContext(Context)
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
    dispatch({type :SET_IS_EDIT_POST , payload : !isEditPost})
  }

  const handleClose = () => {
    setOpen(false)
    dispatch({type :SET_IS_EDIT_POST , payload : !isEditPost})

  }
  return (
    (isEditPost)
    ?<div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} >
              Edit Post
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Exit
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Post Edit" {...a11yProps(0)} />
          <Tab label="Comments" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel component ='div' value={value} index={0}>
      <PostDetail post={post}></PostDetail>
      <UpdatePost  post={post}></UpdatePost>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Comment post= {post}></Comment>
      </TabPanel>
      </Box>
      </Dialog>
    </div>
    : <Settings onClick={handleClickOpen}></Settings>
  )
}
