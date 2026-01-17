import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const [ product, setProducts ] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <h1>{ product.title }</h1>
            <img src={ product.image } alt="" width="200" />
            <p>Price: ${ product.price }</p>
            {/* <p>Description: { product.description }</p> */ }
        </div>
    )
}
