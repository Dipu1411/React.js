import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Electronic() {
    const [ products, setProducts ] = useState([]);
    const [ search, setSearch ] = useState("");
    const [ sortOrder, setSortOrder ] = useState("");
    // const [ maxPrice, setMaxPrice ] = useState("");

    function fetchdata() {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then((data) => setProducts(data));
    }

    useEffect(() => {
        fetchdata();
    }, []);

    const filteredProducts = products
        .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        )
        // FIXED PRICE FILTER
        // .filter((item) =>
        //     maxPrice ? item.price <= Number(maxPrice) : true
        // )

        // SORTING
        .sort((a, b) => {
            if (sortOrder === "lowToHigh") return a.price - b.price;
            if (sortOrder === "highToLow") return b.price - a.price;
            return 0;
        });

    return (
        <div>
            <h1>Electronic Products</h1>

            {/* SEARCH */ }
            <input
                type="text"
                placeholder="search product..."
                value={ search }
                onChange={ (e) => setSearch(e.target.value) }
            />

            {/* SORT */ }
            <select onChange={ (e) => setSortOrder(e.target.value) }>
                <option value="">Sort by Price</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
            </select>

            {/* FIXED PRICE FILTER */ }
            <input
                type="number"
                placeholder="Max Price"
                value={ maxPrice }
                onChange={ (e) => setMaxPrice(e.target.value) }
            />

            { filteredProducts.map((item) => (
                <div key={ item.id }>
                    <Link to={ `/ProductDetails/${item.id}` }><h3>{ item.title }</h3></Link>
                    <img src={ item.image } alt="" width="120" />
                    <p>Price: ${ item.price }</p>
                </div>
            )) }
        </div>
    );
}
