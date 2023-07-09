import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Context from '../Context'
import logo_img from '../images/projectwrxlogo.png'


export default function Header () {

    const { userInfo, setUserInfo } = useContext(Context)

    if (userInfo.username === '') {
        return (
            <div >    
                <div className="header">
                    {/* <h1>PROJECTWRX</h1> */}
                    <Link to="/"><img className="logo" src={logo_img} alt="Project Wrx"/></Link>
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
                            <Link to="/"><img className="logo" src={logo_img} alt="Project Wrx"/></Link>
                        </div>
                        <Nav />
                    </div>
                </div>
            </div>
        )
    }
}
