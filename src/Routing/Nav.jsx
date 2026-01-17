import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to="/">FetchApi</Link>
            <Link to="/Counter">Counter</Link>
            <Link to="/Timer">Timer</Link>
            <Link to="/SimpleTodo">SimpleTodo</Link>
            <Link to="/product">Product</Link>
        </div>
    )
}
