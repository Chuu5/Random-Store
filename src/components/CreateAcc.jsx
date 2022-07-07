import "./input.css";
import { AiOutlineUser, AiFillCloseCircle } from "react-icons/ai"
import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import "./createAcc.css"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";


const schema = yup.object({
    email: yup.string().required("Esse campo é obrigatorio"),
    userName: yup.string().required("Esse campo é obrigatorio").min(3, "Minimo de 3 caracteres"),
    password: yup.string().required("Esse campo é obrigatorio").min(4, "Minimo de 4 caracteres"),
    confirmPassword: yup.string().required("Esse campo é obrigatorio")
    .min(3, "Minimo de 4 caracteres").oneOf([yup.ref('password')], 'Senhas devem ser iguais')
}).required();

function CreateAcc( { display } ) {


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = data => console.log(data);
    

    
    return (
        <div className="createAcc">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Cadastro</h2>
                <div className="Field">
                    <AiOutlineUser />
                    <input type={"text"} name={"name"} placeholder={"UserName"} 
                    className="input-Component"
                    {...register( "userName" , { required: true } )}
                    />
                </div>
                <p>{errors.userName?.message}</p>

                <div className="Field">
                    <MdEmail />
                    <input type={"email"} name={"email"} placeholder={"Email"} 
                    className="input-Component"
                    {...register( "email" , { required: true } )}/>
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