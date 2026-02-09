import { useEffect, useState } from "react";
import "./stealdrips.css";

export default function StealDrips() {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/stealDrips")
            .then((res) => res.json())
            .then((data) => setItems(data)); // ⭐ FIXED
    }, []);

    return (
        <section className="drips">
            <h2 className="drips-title">Steal Drips</h2>

            <div className="drips-row">
                { items.map((item) => (
                    <div
                        key={ item.id }
                        className="drip-card"
                        onClick={ () => window.open(item.link, "_blank") }
                    >
                        <img src={ item.img } alt={ item.name } />

                        <div className="drip-info">
                            <h4>{ item.name }</h4>
                            <p>{ item.price }</p>
                        </div>
                    </div>
                )) }
            </div>
        </section>
    );
}
