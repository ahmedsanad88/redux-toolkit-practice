import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPorducts } from './productsSlice';
import "./Products.css";



// here simply we are using { useSelector, useDispatch } to handle get and update state from any file existing inside our main index file.

function Products() {

    const products = useSelector(state => state.products.products);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => console.log("error: ", err));

        dispatch(setPorducts(response.data));
        // console.log("prodcuts: ", response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="products">
            {

                products.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <h4>{product.title}</h4>
                            <p>{product.category}</p>
                            <img src={product.image} alt="product" />
                            <p><b>{product.price}</b></p>
                            <p>{product.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;
