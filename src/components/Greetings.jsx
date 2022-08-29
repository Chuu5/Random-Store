import "./Greetings.css"

function Greetings({name}) {
    return(
        <div className="greetings">
            <h2>Olá {name}</h2>
        </div>
    )
}

export default Greetings