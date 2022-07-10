import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Account.css"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    email: yup.string().email("Email invalido").required("Esse campo é obrigatorio"),
    userName: yup.string().min(3, "Minimo de 3 caracteres"),
    password: yup.string().min(4, "Minimo de 4 caracteres"),
    confirmPassword: yup.string().min(4, "Minimo de 4 caracteres").oneOf([yup.ref('password')], 'Senhas devem ser iguais')
});

function Account( {setUser, user, setLogged} ) {

    const { register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePass = (event) => {
        setPass(event.target.value)
    }
    const handleConfirmPass = (event) => {
        setConfirmPass(event.target.value)
    }

    const navigate = useNavigate()



    function changeName() {
        
        if(user.userName !== name &&
            name.length >= 4) {
            const newUser = user
            newUser.userName = name
            alert("Nome de Usuario Alterado Com Sucesso")
            
            fetch(`http://localhost:5000/users/` + user.id, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(
                    newUser
                )
            })
            .then(response => response.json())
            .then(data => data)
            .catch(e => console.error(e))
            setUser("")
            setLogged(false)
            navigate("/")
        } else if(name.length < 4) {
            alert("Nomes precisam ser de pelo menos 4 digitos")
        } else {
            alert("Esse nome de usuario é o mesmo que já está cadastrado")
        }
    }

    function changeEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(user.email !== email &&
            email.match(regex)) {
            const newUser = user
            newUser.email = email
            
            fetch(`http://localhost:5000/users/` + user.id, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(
                    newUser
                    )
                })
                .then(response => response.json())
                .then(data => data)
                .catch(e => console.error(e))
            alert("Email Alterado Com Sucesso")
            setUser("")
            setLogged(false)
            navigate("/")
        } else if(!email.match(regex)) {
            alert("Email Invalido")
        } else {
            alert("Esse Email é o mesmo que já está cadastrado")
        }
    }

    function changePass() {
        if(user.password !== pass &&
            pass === confirmPass &&
            pass.length >= 5) {
            const newUser = user
            newUser.password = pass
            newUser.confirmPassword = confirmPass
            
            fetch(`http://localhost:5000/users/` + user.id, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(
                    newUser
                    )
                })
                .then(response => response.json())
                .then(data => data)
                .catch(e => console.error(e))
            alert("Senha Alterada Com Sucesso")
            setUser("")
            setLogged(false)
            navigate("/")
        } else if (pass !== confirmPass) {
            alert("As senhas devem ser iguais")
        } else if(pass.length < 5) {
            alert("Senhas devem possuir pelo menos 5 digitos")
        }
        
    }

    return (
        <div className="container">
            <div className="info-container">

                <div className="info-text">
                    <h2>Alterar Nome de Usuario</h2>
                </div>

                <div className="info-fields">

                    <input type="text" id="changeName" placeholder="Nome"
                    onChange={handleName}/>
                    <button onClick={changeName}>Alterar dado</button>
                </div>
            </div>

            <div className="info-container">

                <div className="info-text">
                    <h2>Alterar Senha</h2>
                </div>

                <div className="info-fields">

                    <input type="password" placeholder="Senha"
                    onChange={handlePass}/>
                    <input type="password" placeholder="Confirmar Senha"
                    onChange={handleConfirmPass}/>
                    <button onClick={changePass}>Alterar dado</button>

                </div>

            </div>

            <div className="info-container">

                <div className="info-text">
                    <h2>Alterar Email</h2>
                </div>

                <div className="info-fields">

                    <input type="text" placeholder="Email"
                    onChange={handleEmail}/>

                    <button onClick={changeEmail}>Alterar dado</button>
                </div>
            </div>
        </div>
    ) 
}

export default Account