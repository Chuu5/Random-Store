import { Link } from "react-router-dom"
import "./LoggedOff.css"
import { motion } from "framer-motion"

function LoggedOff() {
    return(
        <motion.div className="container"
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration: 0.2}}}>

            <div className="logged-off">
                <h2>Você deve estar logado para Continuar</h2>
                <Link to={"/"}>
                    <button>
                        Entrar na sua conta
                    </button>
                </Link>
            </div>
        </motion.div>
    )
}

export default LoggedOff