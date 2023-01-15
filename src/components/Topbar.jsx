import { Link } from "react-router-dom"
import { Button, Menu,MenuItem, Stack } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

  
const Topbar = ()=>{
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (e)=>{
      setAnchorEl(e.target)
    }
    const handleClose = ()=>{
      setAnchorEl(null)
    }
    return(
      <div style={{display : "flex", flexDirection : "row", justifyContent :"flex-end", margin : " 16px 20px 16px 0"}}>
      <Stack spacing={2} direction="row">
      <BootstrapButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained" disableRipple
      >
        Manages
        <ArrowDropDown />
      </BootstrapButton>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to= {"/posts"} style = {{textDecoration : "none" ,color :"#333"}}>
        <MenuItem onClick={handleClose}>Posts management</MenuItem>
        </Link>
        <Link to= {"/users"} style = {{textDecoration : "none", color :"#333"}}>
        <MenuItem onClick={handleClose}>Users management</MenuItem>
        </Link>
      </Menu>
    </div>
  )
    
}
export default Topbar