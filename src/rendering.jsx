import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/navbar'
import Home from './pages/Home'
import Purchase from './pages/Purchase'
import Account from './pages/Account'
import LoggedOff from './pages/LoggedOff'

import { AnimatePresence } from "framer-motion"

function Rendering() {
    const location = useLocation()
    // Usamos o useLocation para dizer ao frame-motion(biblioteca usada para animações) em que pagina estamos pois ele não consegue ler isso

    const [user, setUser] = useState("")

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
   
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Nav user={user} />}>
            <Route path='/' element={<Home setUser={setUser} setLogged={setIsLoggedIn}/>}/>
            <Route path='/purchase' element={isLoggedIn ? <Purchase/> : <LoggedOff/>}/>
            <Route path='/account' element={<Account setLogged={setIsLoggedIn} setUser={setUser} user={user} />}/>
          </Route>
        </Routes>
    </AnimatePresence>
    )
}

export default  Rendering