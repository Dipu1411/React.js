import React, { useState, useEffect } from 'react'

export default function Electronic() {
    const [ products, setProducts ] = useState([]);

    function fetchdata() {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then((data) => setProducts(data));
    }

    useEffect(() => {
        fetchdata();
    }, []);


    return (
        <div>
            <h1>Electronic Products</h1>
            {
                products.map((item) => (
                    <div>
                        <h3>{ item.title }</h3>
                        <img src="{item.image}" alt="" width="120" />
                        <p>Price: ${ item.price }</p>
                    </div>
                ))
            }
        </div>
    )
}
