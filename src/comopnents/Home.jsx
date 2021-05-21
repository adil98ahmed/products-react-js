import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Spinner } from 'react-bootstrap'
import './home.css'
function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const addToCart = (productObj) => {
        let exist = false;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i]['id'] == productObj['id']) {
                exist = true;
            }
        }
        if (exist == false) {
            setCart([...cart, productObj]);
        }
        else {
            alert("Item is already added to your cart, check the bottom of page")
        }
    }
    const deleteFromCart = (productobj) => {
        var temp = [...cart]
        for (var i = 0; i < cart.length; i++) {
            if (temp[i]['id'] == productobj['id']) {
                console.log(temp[i]['id'], cart[i]['id'])
                temp.splice(i, 1);
                setCart(temp)
                break;
            }

        }
    }
    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
        console.log(products)
    }
    return (
        <div>
            {
                products.length > 0 ? (
                    <div className="row no-gutters">

                        <div className="col-lg-9">

                            <div className="row">
                                {products.map(product =>

                                    <div className="col-lg-4 product-item">
                                        <li className="d-flex flex-column justify-content-between" key={product.id}>
                                            <img src={product.image} />
                                            <p>{product.title}</p>
                                            <Link to={`product/${product.id}`}>{product.title}</Link>
                                            <button onClick={() => addToCart(product)} className="btn btn-info">Add</button>
                                        </li>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-3 px-3 cart-item">
                            <h2 className="text-danger d-block">Cart Items</h2>
                            <div className="row">
                                {cart.map(product =>
                                    <li className="d-flex flex-column justify-content-between " key={product.id}>
                                        <img src={product.image} />
                                        <p>{product.title}</p>
                                        <Link to={`product/${product.id}`}>{product.title}</Link>
                                        <button onClick={() => deleteFromCart(product)} className="btn btn-danger">Delete</button>
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                )
            }

        </div>
    )
}

export default Home
