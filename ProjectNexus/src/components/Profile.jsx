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
      <div className="updateProfileForm" onSubmit={handleSubmitProfile}>
            <h2>{user.firstName}'s profile</h2>
            <h5>Update your profile information by entering the new details in the form below and clicking the "Update Profile" button.</h5>
            <form>
                  <label htmlFor="firstName">UPDATE FIRST NAME:</label>
                  <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={user.firstName}/>
                  <label htmlFor="lastName">UPDATE LAST NAME:</label>
                  <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={user.lastName}/>
                  <label htmlFor="userName">UPDATE USERNAME:</label>
                  <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder={user.username}/>
                  <label htmlFor="email">UPDATE EMAIL ADDRESS:</label>
                  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={user.email}/>
                  <label htmlFor="password">UPDATE PASSWORD:</label>
                  <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={user.password}/>
                  {/* <label htmlFor="passwordValid">CONFIRM NEW PASSWORD:</label>
                  <input type="password" id="passwordValid" onChange={handleChange} value={formState.passwordValid}></input> */}
                  <button className="submit" id="updateBtn" type="submit">Update Profile</button>
            </form>
      </div>
    </div>
  )
}

export default ProfilePage
