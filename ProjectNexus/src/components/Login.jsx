import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Context from "../Context"


export default function Login () {

    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

    const initialState = { 
        userName: '',
        password: '',
    }

    const [formState, setFormState] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const { userInfo, setUserInfo } = useContext(Context)

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = async () => {
            const myUser = await axios.get(`${BASE_URL}user/username/${formState.userName}`)
            if (myUser.data[0].password === formState.password) {
                setUserInfo({firstName:myUser.firstName, lastName:myUser.lastName, userId:myUser._id, username:myUser.username})
                setIsActive(false)
                navigate("/")
            } else {
                setIsActive(true)
            }
            console.log(myUser)
        }
        user()
        setFormState(initialState)
    }
    const handleChange = e => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    const logIn = async () => {
        await axios.get(`http://localhost:3001/api/auth/google`)
    }

    const create = () => {
        navigate('/createUser')
    }

    return (
        <div>
            <div className="loginForm" onSubmit={handleSubmit}>
                <form>
                    <label htmlFor="username">USERNAME: </label>
                    <input type="text" placeholder="Enter username here" id="userName" onChange={handleChange} value={formState.userName}/>
                    <label htmlFor="password">PASSWORD: </label>
                    <input type="password" placeholder="Enter password here" id="password" onChange={handleChange} value={formState.password} />
                    <p className="invalid" style={{display: isActive? "": "none"}}>Username or password is incorrect. Please try again!</p>
                    <button type="submit" id="submit">LOG IN</button>
                    <button type="reset" id="resetBtn">forgot password ?</button>
                </form>       
            </div>
            <div className="lineBreak"></div>
            <div>
                {/* <button onClick={() => logIn()}>Login W/ Google</button> */}
                <button id="createBtn" onClick={create}>New Here? &nbsp;Create An Account</button>
            </div>
        </div>
    )
}