import { useState } from "react"
import { set } from "react-hook-form"

function Card( {total, onAdd, product } ) {

    // const [count, setCount] = useState(0)

   


    return (
        <div className="card">
            <div className="img-container">
                <img src={product.img} alt="" />
                {/* {count > 0 && (
                    <div className="counter"> { count } </div>
                )}  */}
            </div>
            <div className="text">
                <div className="title">
                    <h2> {product.title} </h2>
                </div>
                
                <div className="description">
                    <p>{product.description}</p>
                </div>

                <div className="price">
                    <h2> R${product.price } </h2>                    
                </div>
            </div>
            
            <button className="add-Cart"
            onClick={() => {
                onAdd(product)
                total((value) => value + parseInt(product.price))
            }
            }>
                Adicione ao carrinho
            </button>
        </div>
    )
}

export default Card