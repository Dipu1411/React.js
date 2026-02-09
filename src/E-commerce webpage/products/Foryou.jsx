import { useEffect, useState } from "react";
import "./foryou.css";

export default function ForYou() {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/foryou")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <section className="foryou">
            <h2 className="foryou-title"> For You</h2>

            <div className="foryou-grid">
                { items.map((item) => (
                    <div
                        key={ item.id }
                        className="foryou-card"
                        onClick={ () => window.open(item.link, "_blank") }
                    >
                        <img src={ item.img } alt={ item.name } />

                        <div className="foryou-info">
                            <h4>{ item.name }</h4>
                        </div>
                    </div>
                )) }
            </div>
        </section>
    );
}
