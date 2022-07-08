import "./input.css";
import { AiOutlineUser, AiFillCloseCircle } from "react-icons/ai"
import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import "./createAcc.css"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Data from "../../db.json"


const schema = yup.object({
    email: yup.string().email("Email invalido").required("Esse campo é obrigatorio"),
    userName: yup.string().required("Esse campo é obrigatorio").min(4, "Minimo de 4 caracteres"),
    password: yup.string().required("Esse campo é obrigatorio").min(5, "Minimo de 5 caracteres"),
    confirmPassword: yup.string().required("Esse campo é obrigatorio")
    .min(5, "Minimo de 5 caracteres").oneOf([yup.ref('password')], 'Senhas devem ser iguais')
}).required();

function CreateAcc( { display } ) {

    const users = Data.users

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });




    const onSubmit = data => {

        const emailExist = users.find( (user) => user.email === data.email)

        if(emailExist) {
            return alert("email já registrado")
        } else {
            fetch("http://localhost:5000/users/", {
                    method: "POST",
                    body: JSON.stringify({
                        ...data
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(user => console.log(user))
                .catch(e => console.error(e)) 
                alert("Email Registrado com sucesso")
                display(false)
        }
    }
    

    
    return (
        <div className="createAcc">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Cadastro</h2>
                <div className="Field">
                    <AiOutlineUser />
                    <input 
                    type={"text"} name={"name"} placeholder={"UserName"} 
                    className="input-Component"
                    {...register( "userName" , { required: true } )}
                    />
                </div>
                <p>{errors.userName?.message}</p>

                <div className="Field">
                    <MdEmail />
                    <input 
                    type={"text"} 
                    name={"email"} 
                    placeholder={"Email"} 
                    className="input-Component"
                    {...register( "email" , { 
                        required: true
                    })}
                
                    />
                </div>
                <p>{errors.email?.message}</p>

                <div className="Field">
                    <FaLock />
                    <input type={"password"} id="createPass" name={"CreatePass"} placeholder={"Password"} 
                    className="input-Component"
                    {...register( "password" , { required: true } )}/>
                </div>
                <p>{errors.password?.message}</p>

                <div className="Field">
                    <FaLock />
                    <input type={"password"} name={"ConfirmPass"} placeholder={"Confirm Password"} 
                    className="input-Component"
                    {...register( "confirmPassword" , { required: true } )}/>
                </div>
                <p>{errors.confirmPassword?.message}</p>

                <button className="btn">
                    Cadastre-se
                </button>


                <button className="close-btn"
                onClick={(e) => {
                    e.preventDefault()
                    display(false)
                }}>
                    <AiFillCloseCircle />
                </button>
                
            </form>
           

        </div>
    )

}

export default CreateAcc