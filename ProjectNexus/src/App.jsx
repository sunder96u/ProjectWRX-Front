// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Context from './Context'

function App() {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    userId: '',
    username: ''
  })

  return (
    <div>
      <Context.Provider value={{ userInfo, setUserInfo}}>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default App