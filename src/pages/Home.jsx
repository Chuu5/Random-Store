import CreateAcc from "../components/CreateAcc"
import "./Home.css"
import "../components/input.css"

import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { motion } from "framer-motion"
// Motion é o componente que nos permite criar animações


const schema = yup.object({
  email: yup.string().required("Esse campo é obrigatorio"),
  password: yup.string().required("Esse campo é obrigatorio"),
}).required();



function Home( {setUser, setLogged} ) {
  
  const [displayCreateAcc, setdisplayCreateAcc] = useState(false)
  
  const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

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

        <div className="form">
          <h3>Login</h3>

          <form onSubmit={handleSubmit(onSubmitForm)}>
            
            <div className="Field">
              <MdEmail />
              <input 
              type={"email"} 
              name={"email"} 
              placeholder={"Email"} 
              className="input-Component"
              {...register( "email" , { required: true } )} />  
            </div>
            <p>{errors.email?.message}</p>

            <div className="Field">
              <FaLock />
              <input 
              type={"password"} 
              name={"password"} 
              placeholder={"Senha"}
              className="input-Component"
              {...register( "password" , { required: true })} />  
            </div>
            <p>{errors.password?.message}</p>

            <button className="submit-button">
              Entrar
            </button>

          </form>


          <button className="btn"
          onClick={ () => {
            setdisplayCreateAcc(true)
          }}>
            Criar Nova Conta
          </button>


        </div>
      </section>
    {displayCreateAcc && <CreateAcc display={setdisplayCreateAcc} />}

    </motion.div>
  )
}

export default Home
