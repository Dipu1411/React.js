import { useState, useEffect } from "react";
import "./slider.css";

export default function Slider() {

    const slides = [
        {
            img: "/images/img-1.avif",
            link: "https://www.sheinindia.in/s/womennewarrivals-104178",
        },
        {
            img: "/images/img-2.avif",
            link: "https://www.sheinindia.in/s/stylish-stripes-190027",
        },
        {
            img: "/images/img-3.avif",
            link: "https://www.sheinindia.in/s/neutral-territory-190028",
        },
        {
            img: "/images/img-4.avif",
            link: "https://www.sheinindia.in/s/golden-moment-190029",
        },
        {
            img: "/images/img-5.avif",
            link: "https://www.sheinindia.in/s/denim-on-denim-190030",
        },
        {
            img: "/images/img-6.webp",
            link: "https://www.sheinindia.in/c/bestsellers-5895-89351",
        },
    ];

    const [ index, setIndex ] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">

            <button className="arrow left" onClick={ prevSlide }>{ "<" }</button>

            <div
                className="slides"
                style={ { transform: `translateX(-${index * 100}%)` } }
            >
                { slides.map((slide, i) => (
                    <img
                        key={ i }
                        src={ slide.img }
                        alt="banner"
                        style={ { cursor: "pointer" } }
                        onClick={ () => window.open(slide.link, "_blank") }
                    />
                )) }
            </div>

            <button className="arrow right" onClick={ nextSlide }>{ ">" }</button>

            <div className="dots">
                { slides.map((_, i) => (
                    <span
                        key={ i }
                        className={ index === i ? "active" : "" }
                        onClick={ () => setIndex(i) }
                    />
                )) }
            </div>

        </div>
    );
}
