import { Link } from 'react-router-dom'
import Nav from './Nav'


export default function Header () {
    return (
        <div >    
            <div className="header">
                <h1>PROJECTWRX</h1>
                <Link to="/">Home</Link>
                <Nav />
            </div>
        </div>
    )
}
