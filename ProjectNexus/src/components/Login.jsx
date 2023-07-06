import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login () {
    const initialState = { 
        userName: '',
        password: '',
    }

    const [formState, setFormState] = useState(initialState)
    const [isActive, setIsActive] = useState(false)

    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formState)
        setFormState(initialState)
    }
    const handleChange = e => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    const logIn = async () => {
        await axios.get(`http://localhost:3001/api/auth/google`)
    }

    const create = () => {
        //send the user to the createpage (will be a nav??)
        navigate('/createUser')
    }

    return (
        <div>
            
            <div className="login-Form" onSubmit={handleSubmit}>
                <form>
                    <label htmlFor="username">Username: </label>
                    <input type="text" placeholder="UserName" id="userName" onChange={handleChange} value={formState.userName}/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" onChange={handleChange} value={formState.password} />
                    <p className="invalid" style={{display: isActive? "": "none"}}>Password or Username incorrect</p>
                    <button type="submit">Submit</button>
                </form>       
            </div>
            <div className="lineBreak"></div>
            <div>
                <button onClick={() => logIn()}>Login W/ Google</button>
                <p onClick={create}><span className="create">Create Account</span> here</p>
            </div>
        </div>
    )
}