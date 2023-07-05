import { Link } from 'react-router-dom'


export default function Header () {
    return (
        <div >    
            <div className="header">
                <Link to="/">Home</Link>
                <h1 className='title'>ProjectWRX</h1>
            </div>
        </div>

    )
}