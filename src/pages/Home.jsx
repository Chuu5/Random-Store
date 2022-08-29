import CreateAcc from "../components/CreateAcc"
import LoginForm from "../components/LoginForm"
import "./Home.css"
import "../components/input.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { motion } from "framer-motion"
import Greetings from "../components/Greetings"
// Motion é o componente que nos permite criar animações



function Home( {setUser, setLogged, logged, user} ) {
  
  const [displayCreateAcc, setdisplayCreateAcc] = useState(false)
  

  const navigate = useNavigate();

  
  const onSubmitForm = data => {
    fetch("https://shopping-fake-api.herokuapp.com/users/")
    .then(response => response.json())
    .then( (users) => {
      const user = users.find((user) => user.email === data.email)

      if (user) {

        if(user.password === data.password) {
          setUser(user)
          setLogged(true)
          navigate("/purchase")
        } else {
          alert("Senha Invalida")
        }

      } else {
        alert("Email Não Registrado")
      }
    })
    .catch(e => console.error(e))
  }

  displayCreateAcc ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"



  return (

    <motion.div className="container"
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.2} }}>

      <section className="flex-home">

        <div className="home-text">
          <h2>Random Store</h2>
          <h3>
            Uma loja de coisas aleatorias que gosto
          </h3>
        </div>

        {logged ? <Greetings name={user.userName}/> : <LoginForm onSubmitForm={onSubmitForm} display={setdisplayCreateAcc}/>}
      </section>
    {displayCreateAcc && <CreateAcc display={setdisplayCreateAcc} />}

    </motion.div>
  )
}

export default Home
