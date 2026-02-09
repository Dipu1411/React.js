import { useEffect, useState } from "react";
import "./toptrends.css";

export default function TopTrends() {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/topTrends")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <section className="trends">

            <h2 className="trends-title"> Top Trends</h2>

            <div className="trends-row">
                { items.map((item) => (
                    <div
                        key={ item.id }
                        className="trend-card"
                        onClick={ () => window.open(item.link, "_blank") }
                    >
                        <img src={ item.img } alt={ item.title } />

                        <div className="trend-overlay">
                            <p>{ item.title }</p>
                        </div>
                    </div>
                )) }
            </div>

        </section>
    );
}
