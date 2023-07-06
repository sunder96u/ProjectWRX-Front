
import { Link } from 'react-router-dom'
import Nav from './Nav'


export default function Header () {
    return (
    <div class="navBar">
      <ul>
        <li>
          <a href="#">MENU</a>
          <ul>
            <li><a href="#" id="teamsBtn">Teams</a></li>
            <li><a href="#" id="projectsBtn">Projects</a></li>
            <li><a href="#" id="tasksBtn">Tasks</a></li>
            <li><a href="#" id="profileBtn">Profile</a></li>
          </ul>
        </li>
      </ul>
    </div>
    )
}

