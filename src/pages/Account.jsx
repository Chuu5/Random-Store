import "./Account.css"

function Account( {user} ) {
    return (
        <div className="container">
            <div className="info-container">

                <div className="info-text">
                    <h2>Mudar Nome de Usuario</h2>
                </div>

                <div className="info-fields">

                    <input type="text" placeholder="Nome"/>

                    <button>Alterar dado</button>
                </div>
            </div>

            <div className="info-container">

                <div className="info-text">
                    <h2>Mudar Nome de Usuario</h2>
                </div>

                <div className="info-fields">

                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirmar Senha" />

                    <button>Alterar dado</button>
                </div>
            </div>

            <div className="info-container">

                <div className="info-text">
                    <h2>Mudar Email</h2>
                </div>

                <div className="info-fields">

                    <input type="email" placeholder="Email"/>

                    <button>Alterar dado</button>
                </div>
            </div>
        </div>
    ) 
}

export default Account