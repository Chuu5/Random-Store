import { Link } from "react-router-dom"
import "./LoggedOff.css"

function LoggedOff() {
    return(
        <div className="container">
            <div className="logged-off">
                <h2>Você deve estar logado para Continuar</h2>
                <Link to={"/"}>
                    <button>
                        Entrar na sua conta
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LoggedOff