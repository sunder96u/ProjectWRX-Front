import { Link } from 'react-router-dom'


export default function Header () {
    return (
        <div >    
            <div className="header">
                <img src="./src/images/projectwrxlogo.png" />
                <h1>PROJECTWRX</h1>
                <Link to="/">Home</Link>
                <Nav />
            </div>
        </div>
    )
}