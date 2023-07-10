import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../Context'

export default function Header () {
  const { userInfo, setUserInfo } = useContext(Context)
  const userId = userInfo.userId

  return (

  <div className="navBar">
    <ul>
      <li>
        <ul className='navBabies'>
          <li><Link to="/">Teams</Link></li>
          <li><Link to="/ProjectList">Projects</Link></li>
          <li><Link to="/TaskList">Tasks</Link></li>
          <li><Link to={"/Profile/"+{userId}}>Profile</Link></li>
        </ul>
      </li>
    </ul>
  </div>
  )
}






