import "./AddPost.css"
import { Context } from "../../context/Context"
import { ADD_POST, SET_IS_ADD_POST,IS_ALERT } from "../../context/actions"
import { useRef, useState, useContext } from "react"
import { useNavigate,Link } from "react-router-dom"
import axios from "axios"
import AlertMesage from "../Alert"

function AddPost() {
const idElement = useRef()
const titleElement = useRef()
const bodyElement = useRef()
const navigate = useNavigate();

const { isAddPost, isAlert, dispatch,posts} = useContext(Context)
const [alert, setAlert] = useState(false)
const mesages  = "added user successfully" 
const handleClick = async (e) =>{
    e.preventDefault()
   const  userId = idElement.current.value
        const post = {
            title : titleElement.current.value,
            body : bodyElement.current.value,
    
        }
        const url = `https://gorest.co.in/public/v2/users/${userId}/posts?access-token=4356fb7e13111d5ff3565de8a6c40cb296183a47f138d495fd14b5373f74a60f`
        try {
            const res = await axios.post(url,post)
            dispatch({type :IS_ALERT, payload : !isAlert})
            dispatch({type :SET_IS_ADD_POST, payload : !isAddPost})
            dispatch({type :ADD_POST, payload : res.data})
            // navigate("/")
        } catch (err) {
            console.log(err);
        } 

}
const handleClose = (e) =>{
    dispatch({type :SET_IS_ADD_POST, payload : !isAddPost})
}
console.log(alert);
  return (
    <>

    <div className="register">

        <div className="registerWrapper">
            <div className="registerRight">
                <div style={{backgroundColor : "black"}}><h1>Add Post</h1></div>
                <form className="registerBox" onSubmit= {handleClick} >
                    <input
                    placeholder="User Id"
                    type="text"
                    className="registerInput"
                    ref={idElement}
                    />
                    <input
                    placeholder="Title"
                    type="title"
                    className="registerInput"
                    ref={titleElement} />
                    <input
                    placeholder="Content"
                    type="text"
                    className="registerInput"
                    ref={bodyElement}
                    />
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
export default  AddPost