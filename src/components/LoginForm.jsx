import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"


const schema = yup.object({
  email: yup.string().required("Esse campo é obrigatorio"),
  password: yup.string().required("Esse campo é obrigatorio"),
}).required();


function LoginForm({onSubmitForm, display}) {

    const {register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      })
    return (
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
        onClick={() => {
          display(true)
        }}>
          Criar Nova Conta
        </button>


      </div>
    )
}

export default LoginForm