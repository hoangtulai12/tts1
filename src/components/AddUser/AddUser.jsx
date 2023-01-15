import "./AddUser.css"
import { Context } from "../../context/Context"
import { ADD_USER, SET_IS_ADD_USER,IS_ALERT } from "../../context/actions"
import { useRef, useState, useContext } from "react"
import { useNavigate,Link } from "react-router-dom"
import axios from "axios"
import AlertMesage from "../Alert"

function AddUser() {
const usernameElement = useRef()
const emailElement = useRef()
const genderElement = useRef()
const statusElement = useRef()
const navigate = useNavigate();

const { users,isAddUser, isAlert, dispatch} = useContext(Context)
const [alert, setAlert] = useState(false)
const mesages  = "added user successfully" 
const handleClick = async (e) =>{
    e.preventDefault()
        const user = {
            name : usernameElement.current.value,
            gender : genderElement.current.value,
            email : emailElement.current.value,
            status : statusElement.current.value
    
        }
        const url = "https://gorest.co.in/public/v2/users?access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f"
        try {
            const res = await axios.post(url,user)
            dispatch({type :IS_ALERT, payload : !isAlert})
            dispatch({type :SET_IS_ADD_USER, payload : !isAddUser})
            dispatch({type :ADD_USER, payload : res.data})
            // navigate("/")
        } catch (err) {
            console.log(err);
        } 

}
const handleClose = (e) =>{
    dispatch({type :SET_IS_ADD_USER , payload : !isAddUser})
}
  return (
    <>

    <div className="register">

        <div className="registerWrapper">
            <div className="registerRight">
                <div style={{backgroundColor : "black",padding :"16px 0 "}}><h1>Add User</h1></div>
                <form className="registerBox" onSubmit= {handleClick} >
                    <input
                    placeholder="Username"
                    type="text"
                    className="registerInput"
                    ref={usernameElement}
                    />
                    <input
                    placeholder="Email"
                    type="email"
                    className="registerInput"
                    ref={emailElement} />
                    <select
                    placeholder="Gender"
                    className="registerInput"
                    ref={genderElement}>
                    <option value="male">Male</option>
                    <option value = "female">Female</option>
                    </select>
                    <select
                    defaultValue="Status"
                    type="select" 
                    className="registerInput"
                    ref={statusElement}>
                    <option className="status" value ="active">active</option>
                    <option className="status" value ="inactive">inactive</option>
                    </select>
                    <button                  
                    className="signupButton"
                    type="submit"
                    >Add</button>
                    <button className="loginButtonRegister"
                    onClick={handleClose}
                    >
                    <div style={{width :"100%", height :"100%" , display :"flex", alignItems :"center",justifyContent :"center"}}>Cancel</div>
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
export default  AddUser