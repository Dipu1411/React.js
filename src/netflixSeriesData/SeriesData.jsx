import React from "react";
import SeriesCard from "./SeriesCard"; // 2. import card component
import netflixSeriesData from "./netflixSeriesData.json";

const Series = () => {
    return (
        <>
            <div className="container">
                <ul className="series-list" style={{ listStyleType: "none" }}>
                    {netflixSeriesData.map((curElem) => {
                        return <SeriesCard key={curElem.index} curElem={curElem} />;
                    })}
                </ul>
            </div>
        </>
    );
};

export default Series;
