import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Context from '../Context'


const ProfilePage = () => {
      const { userInfo, setUserInfo } = useContext(Context)
      const [ user, setUser ] = useState({})
      let { id } = useParams()
      const [ firstName, setFirstName ] = useState('')
      const [ lastName, setLastName ] = useState('')
      const [ username, setUsername ] = useState('')
      const [ email, setEmail ] = useState('')
      const [ password, setPassword ] = useState('')

      
      const userData = {
            firstName,
            lastName,
            username,
            email, 
            password,
      }

      const saveUserData = async () => {
            try {
                  const response = await axios.put(
                  `https://projectwrx-back-production.up.railway.app/api/user/64a6cccef8a13aa0425a4e59`,
                  userData
              )
              console.log('Profile updated successfully:', response.data)
            } catch (error) {
              console.error('Error updating profile:', error)
            }
      }

      const handleSubmitProfile = (e) => {
            e.preventDefault()
        
            console.log(userData)
        
            saveUserData(userData)
        
            alert('Profile updated successfully!')
      }

      useEffect(() => {
      const getUser = async () => {
            try {
                  const response = await axios.get(`https://projectwrx-back-production.up.railway.app/api/user/64a6cccef8a13aa0425a4e59`)
                  setUser(response.data)
            } catch (error) {
            console.error(error)
            }
      }
      getUser()
      console.log(getUser())
      }, [])
      console.log(user)

      
      

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="updateProfileForm">
            <h2>{user.firstName}'s profile</h2>
            <h5 style={{ color: 'red' }}>Update your profile info by entering the new details and clicking the "Update Profile" button.</h5>

            <form onSubmit={handleSubmitProfile}>
                  <label>
                        First Name:
                  <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder={user.firstName}
                  />
                  </label>
                  <br />
                  <label>
                        Last Name:
                  <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder={user.lastName}
                  />
                  </label>
                  <br />
                  <label>
                        Username:
                  <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={user.username}
                  />
                  </label>
                  <br />
                  <label>
                        Email:
                  <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={user.email}
                  />
                  </label>
                  <br />
                  <label>
                        Password:
                  <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={user.password}
                  />
                  </label>
                  <br />
                  <button type="submit">Update Profile</button>
            </form>
      </div>
    </div>
  )
}

export default ProfilePage
