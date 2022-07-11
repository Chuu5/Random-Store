import Card from "../components/card"
import "./Purchase.css"
import { AiOutlineArrowUp } from "react-icons/ai"


import Data from "../../db.json"
import { useState } from "react"
import CartOpened from "../components/CartOpened"





function Purchase() {
    const products = Data.products;
    
    const [quantity, setQuantity] = useState(0)
    
    const [cartItems, setCartItems] = useState([])
    
    const [openCart, setOpenCart] = useState(false)
    
    const [totalPrice, setTotalPrice] = useState(0)


    const onAdd = (product) => {
        setQuantity(quantity + 1)

        const exist = cartItems.find( (prod) => {
            return prod.id === product.id
        });


        if(exist) {
            setCartItems(
                cartItems.map( (prod) => {
                    return prod.id === product.id ?  {...exist, quantidade: exist.quantidade + 1} : prod
                })
            );
        } else {
            setCartItems([...cartItems, {...product, quantidade: 1}])
        }

        // Função que adiciona um item no cart e caso ele já esteja no cart ele irá adicionar uma quantidade nova
    }

    const onRemove = (product) => {
        setQuantity(quantity - 1)
        const exist = cartItems.find( (prod) => prod.id === product.id)
        setTotalPrice(totalPrice - product.price)
        if(exist && exist.quantidade > 1) {
            setCartItems(
                cartItems.map( (prod) => {
                    return prod.id === product.id ?  {...exist, quantidade: exist.quantidade - 1} : prod
                })
            );
        } else {
            setCartItems(cartItems.filter( (item) => {
                return item.id !== product.id
            }))
        }
    }
    

    
    return (
        
        <div className="container">

            
            <section className="cards">

                {products.map( (product) => {
                
        
                    return <Card total={setTotalPrice} items={cartItems} onAdd={onAdd} key={product.id} product={product} />
                })}

            </section>

            <div className={`cart ${openCart ? 'opened' : ''}`}>
                <div className="cart-title" >

                    <h3>Cart ({quantity})</h3>
                    <button onClick={() => {
                        setOpenCart(!openCart)
                    }}>
                        <AiOutlineArrowUp />
                    </button>
                </div>

                {openCart && (
                    <>
                        <CartOpened onRemove={onRemove} onAdd={onAdd} items={cartItems}
                        total={setTotalPrice} />

                        <div className="clear-container">
                            {quantity > 0 && (
                                <h3>Preço Total: {totalPrice} </h3>
                            )}
                            <button className="clear" onClick={ () => {
                                setCartItems([])
                                setQuantity(0)
                                setTotalPrice(0)
                            }}>Limpar Cart</button>
                        </div>

                    </>
                )}   


            </div>
        </div>
    )
}

export default Purchase