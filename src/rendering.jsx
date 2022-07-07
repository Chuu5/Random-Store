import { Routes, Route } from 'react-router-dom'
import Nav from './components/navbar'
import Home from './pages/Home'
import Purchase from './pages/Purchase'


function Rendering() {

    
   
    return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route path='/' element={<Home />}/>
        <Route path='/purchase' element={<Purchase/>}/>
      </Route>
    </Routes>
    )
}

export default  Rendering