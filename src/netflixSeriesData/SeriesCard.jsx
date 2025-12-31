import React from "react";
import netflixSeriesData from "./netflixSeriesData.json"; // 1. import json data

export default function SeriesCard({ curElem }) {
    console.log(curElem);
    const { image, name, cast, description, release_date, rating, link } = curElem; // object destructuring

    //     const MyButton = styled.a`     // ⬅️ changed from button to styled anchor
    //     background-color: #e50914;
    //     color: #fff;
    //     text-decoration: none;
    //     padding: 12px 25px;
    //     border-radius: 25px;
    //     font-size: 1rem;
    //     font-weight: bold;
    //     cursor: pointer;
    //     text-transform: uppercase;
    //     transition: background-color 0.3s ease;   // ⬅️ corrected
    //     margin-top: auto;
    //     display: inline-block;
    //   `;

    return (
        <li className="series-card" key={curElem.index}>
            <div>
                <img
                    className="card-image"
                    src={curElem.image}
                    alt={name}
                    width="40%"
                    height="40%"
                />
            </div>
            <div className="card-content">
                <p><b>Name :</b> {name}</p>
                <p><b>Cast :</b> {cast.join(", ")}</p>
                <p><b>Description:</b> {description}</p>
                <p><b>Release Date:</b> {release_date}</p>
                <p>Rating:<span className={`rating ${rating >= 8.5 ? "hit" : "average"}`}>{rating}</span></p>
            </div>
            {/* CORRECTED LINE: The anchor tag is now a direct child of the list item, with the class "button" for styling. */}
            <a href={link} target="_blank" rel="noopener noreferrer" className="button"> Watch Now </a><br /><br />
        </li>
    );
}