import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/navbar'
import Home from './pages/Home'
import Purchase from './pages/Purchase'
import Account from './pages/Account'
import LoggedOff from './pages/LoggedOff'


function Rendering() {

    const [user, setUser] = useState("")

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
   
    return (
    <Routes>
      <Route path='/' element={<Nav user={user} />}>
        <Route path='/' element={<Home setUser={setUser} setLogged={setIsLoggedIn}/>}/>
        <Route path='/purchase' element={isLoggedIn ? <Purchase/> : <LoggedOff/>}/>
        <Route path='/account' element={<Account setLogged={setIsLoggedIn} setUser={setUser} user={user} />}/>
      </Route>
    </Routes>
    )
}

export default  Rendering