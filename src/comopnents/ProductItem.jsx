import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import './home.css'
function ProductItem({ match }) {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products/' + match.params['id'])
            .then(response => response.json())
            .then(data => setProducts(data))
        console.log(products)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10  flex-nowrap product-item">
                    {
                        products != null ? (
                            <div className="d-flex">
                                <img src={products.image} />
                                <div className="mt-5">
                                    <h3>{products.title}</h3>
                                    <p>{products.description}</p>
                                    <p className="text-info">{products.category}</p>
                                    <p className="text-danger">{products.price} $</p>
                                    <button className="btn btn-info w-100">Add to cart</button>
                                </div>
                            </div>
                            
                        ) : (
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductItem
