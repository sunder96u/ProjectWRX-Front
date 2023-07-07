import { Link } from 'react-router-dom'
import Nav from './Nav'


export default function Header () {
    return (
    <div class="navBar">
      <ul>
        <li>
          <a href="#">MENU</a>
          
          
          
          
          <ul>
            <li><Link to="/TeamList">Teams</Link></li>
            <li><Link to="/ProjectList">Projects</Link></li>
            <li><Link to="/TaskList">Tasks</Link></li>
            <li><Link to="/">Profile</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    )
}

