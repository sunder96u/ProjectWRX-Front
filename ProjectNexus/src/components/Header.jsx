import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Context from '../Context'


export default function Header () {

    const { userInfo, setUserInfo } = useContext(Context)

    if (userInfo.username === '') {
        return (
            <div >    
                <div className="header">
                    {/* <h1>PROJECTWRX</h1> */}
                    <Link to="/"><img src="./src/images/projectwrxlogo.png" /></Link>
                </div>
            </div>
        )
    } else {
        return (
            <div >    
                <div className="header">
                    <div>
                        <div>
                            {/* <h1>PROJECTWRX</h1> */}
                            <Link to="/"><img src="./src/images/projectwrxlogo.png" /></Link>
                        </div>
                        <Nav />
                    </div>
                </div>
            </div>
        )
    }
}
