
function Card( {onAdd, product } ) {


   


    return (
        <div className="card" data-testid="card">
            <div className="img-container">
                <img src={product.img} alt="" />
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
            data-testid="add-cart"
            onClick={() => {
                onAdd(product)
            }
            }>
                Adicione ao carrinho
            </button>
        </div>
    )
}

export default Card