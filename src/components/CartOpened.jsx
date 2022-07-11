import "./cartOpened.css"


function CartOpened({items, total, onAdd, onRemove}) {


    return (

        <div className="cart-items">

                {items.length === 0 && (
                    <div key={1} className="empty">
                        <h4>O Cart está vazio</h4>
                    </div>
                    // Se o cart estiver vazio irá mostrar isso
                )}

                {items.length > 0 && (
                        
                        items.map( (item) => {
                            return <div key={item.id} className="cart-item">
                                <div className="item-img">
                                    <img src={item.img} alt="" />
                                </div>

                                <h3 className="item-title">{item.title}</h3>

                                <p className="price">R${item.price}</p>
                                <p className="quantity">({item.quantidade})</p>
                                
                                <button className="increment" onClick={() => {
                                    onAdd(item)
                                    total( (value) => value + parseInt(item.price))
                                }}>+</button>

                                <button className="decrement" onClick={() => {
                                    onRemove(item)
                                }}>
                                    -
                                </button>
                            </div>
                        })
                    )
                    // Caso exista items no cart serão adicionado dessa forma
                }
                    
        </div>
    )
}

export default CartOpened