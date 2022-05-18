import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './UserSignupForm.css'

function UserSignupForm(){
    const API = process.env.REACT_APP_API_URL;
    const nav = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState("")
    const [chooseUserName, setChooseUserName] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: "",
        username: "",
        password: "",
    })

    const handleInputChange = (event) => {
        if(event.target.id === "confirm-password"){
            setConfirmPassword(event.target.value)
            return;
        }
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    const inputUserName = (event) => {
        event.preventDefault()
        if(confirmPassword === userInfo.password){
            setChooseUserName(true)
        } else {
            alert("Password doesn't match")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const today = new Date
        const [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDay()]
        //axios post userInfo
        axios.post(API + "users/", {
            ...userInfo,
            date: year + "-" + month + "-" + day
        })
        .then(()=>{
            nav("/signIn")
        })
        .catch(console.log)
    }

    return (
            <form className="UserSignupForm" onChange={handleInputChange}>
                {chooseUserName ?
                <>
                    <div className="username-input">
                        <label htmlFor="username"></label>
                        <input id="username" name="username" type="text" placeholder={userInfo.email} required/>
                    </div>
                    <input onClick={handleSubmit} type="submit"/>
                </>   
                
                :
                <>
                    <div className="email-input">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="email" required />
                    </div>
                    <div className="password-input">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="text" placeholder="password" />
                    </div>
                    <div className="password-input">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input id="confirm-password" name="password" type="text" placeholder="confirm password"/>
                    </div>
                    <input onClick={inputUserName} type="submit"/>
                </>
                }
            </form>
    )
}

export default UserSignupForm