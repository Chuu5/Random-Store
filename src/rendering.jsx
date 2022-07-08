import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/navbar'
import Home from './pages/Home'
import Purchase from './pages/Purchase'
import Account from './pages/Account'


function Rendering() {

    const [user, setUser] = useState("")
    
   
    return (
    <Routes>
      <Route path='/' element={<Nav user={user} />}>
        <Route path='/' element={<Home setUser={setUser}/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
        <Route path='/account' element={<Account setUser={setUser} user={user} />}/>
      </Route>
    </Routes>
    )
}

export default  Rendering