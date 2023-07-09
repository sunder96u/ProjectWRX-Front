import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


export default function CreateAccount () {

    const BASE_URL = "https://projectwrx-back-production.up.railway.app/api/"

    const initialState = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        passwordValid: ""
    }

    const [formState, setFormState] = useState(initialState)
   
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            pictures: null,
            username: formState.userName,
            password: formState.password,
            birthday: null,
            googleId: null,
        }

        await axios.post(`${BASE_URL}user/create`, newUser)

        setFormState(initialState)
        navigate("/")
    }

    const handleChange = e => {
        setFormState({...formState, [e.target.id]: e.target.value })
    }

    const cancel = () => {
        setFormState(initialState)
        navigate("/")
    }

    return ( 
        <div>
        <div className="createUserForm" onSubmit={handleSubmit}>
            <form>
                <label htmlFor="firstName">ENTER FIRST NAME: </label>
                <input type="text" placeholder="First name" id="firstName" onChange={handleChange} value={formState.firstName}></input>
                <label htmlFor="lastName">ENTER LAST NAME: </label>
                <input type="text" placeholder="Last name" id="lastName" onChange={handleChange} value={formState.lastName}></input>
                <label htmlFor="userName">CREATE USERNAME: </label>
                <input type="text" placeholder="Username" id="userName" onChange={handleChange} value={formState.userName}></input>
                <label htmlFor="email">ENTER EMAIL ADDRESS:</label>
                <input type="email" placeholder="email" id="email" onChange={handleChange} value={formState.email}></input>
                <label htmlFor="password">CREATE PASSWORD:</label>
                <input type="password" id="password" onChange={handleChange} value={formState.password}></input>
                <label htmlFor="passwordValid">CONFIRM PASSWORD:</label>
                <input type="password" id="passwordValid" onChange={handleChange} value={formState.passwordValid}></input>
                <button type="submit" className="createBtn">Create New Account</button>
                <button type="cancel" className="submit" onClick={cancel}>Cancel</button>
            </form>       
        </div>
    </div>
    )
}