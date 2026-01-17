import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Clothing() {
    const [ products, setProducts ] = useState([]);
    const [ search, setSearch ] = useState("");

    const [ sortOrder, setSortOrder ] = useState("");
    const [ maxPrice, setMaxPrice ] = useState("");

    function fetchdata() {
        fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
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
        .filter((item) =>
            maxPrice ? item.price <= Number(maxPrice) : true
        )
        .sort((a, b) => {
            if (sortOrder === "lowToHigh") return a.price - b.price;
            if (sortOrder === "highToLow") return b.price - a.price;
            return 0;
        });

    return (
        <div>
            <h1>Clothing Products</h1>

            <input
                type="text"
                placeholder="search product..."
                value={ search }
                onChange={ (e) => setSearch(e.target.value) }
            />

            <select onChange={ (e) => setSortOrder(e.target.value) }>
                <option value="">Sort by Price</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
            </select>

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
