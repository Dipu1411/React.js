import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Product() {
    return (
        <div>
            <h1>Product</h1>

            <div>
                <Link to="electronic">Electronic</Link>
                <Link to="clothing">Clothing</Link>
                <Link to="jwellery">Jewellery</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
