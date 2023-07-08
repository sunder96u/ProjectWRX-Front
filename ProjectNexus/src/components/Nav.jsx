import { Link } from 'react-router-dom'

export default function Header () {
    return (
    <div className="navBar">
      <ul>
        <li>
          <a className="menu" href="#">MENU</a>
          <ul className='navBabies'>
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

