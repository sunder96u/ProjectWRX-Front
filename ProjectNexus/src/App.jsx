import { useState } from 'react'
import './App.css'
import CreateTeamModal from './components/CreateTeamModal'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Context.Provider>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default App