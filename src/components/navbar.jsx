import { BsCoin } from "react-icons/bs"
import { Outlet, Link } from "react-router-dom";
import "./navbar.css"

function Nav() {
    return (
        <>
            <nav>
                
                <div className="logo">
                    <BsCoin />
                </div>

                <ul className="menu-links">

                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/purchase"}>Purchase</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>
                            <button className="cart-btn">
                                Cart
                            </button>
                        </Link>
                    </li>
                </ul>

            </nav>
            <Outlet />
        </>
    )
}

export default Nav