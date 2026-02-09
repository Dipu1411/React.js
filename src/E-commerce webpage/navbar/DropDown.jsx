import { Link } from "react-router-dom";
import "./dropdown.css";

export default function Dropdown({ type }) {

    const womenData = [
        {
            title: "Dresses",
            items: [ "A-Line dresses", "Mini Dresses", "Midi Dresses", "Maxi Dresses", "Asymmetrical" ]
        },
        {
            title: "Sets",
            items: [ "Bodysuits", "Co-Ord Sets", "Dungarees", "Jumpsuits", "Track Suits" ]
        },
        {
            title: "Top Wear",
            items: [ "Shirts", "Tanks & Camis", "Tops", "T-Shirts" ]
        },
        {
            title: "Bottomwear",
            items: [ "Jeans", "Skirts", "Shorts" ]
        },
        {
            title: "Denim",
            items: [ "Dress", "Jeans", "Skirts", "Tops" ]
        },
        {
            title: "Innerwear",
            items: [ "Bras", "Lingerie", "Nightwear" ]
        },
        {
            title: "Jewellery",
            items: [ "Brooches & Pins", "Earrings", "Bangles & Bracelets", "Rings", "Necklaces & Pendants" ]
        }
    ];

    const menData = [
        {
            title: "Tops",
            items: [ "T-Shirts", "Shirts", "Hoodies" ]
        },
        {
            title: "T-shirts",
            items: [ "Crew Neck", "V-Neck", "Polo T-Shirts", "Graphic Tees", "Long Sleeve", "Tank Tops", "Oversized" ]
        },
        {
            title: "Bottomwear",
            items: [ "Jeans", "Joggers", "Cargos" ]
        },
        {
            title: "Outerwear",
            items: [ "Jackets", "Coats", "Blazers", "Cardigans", "Sweat-Shirts", "Vests", "Biker Jackets" ]
        },
        {
            title: "Denim Jeans",
            items: [ "Slim Fit", "Skinny Fit", "Regular Fit", "Baggy", "Bootcut", "Relaxed Fit", "Tapered Fit" ]
        },
        {
            title: "Activewear",
            items: [ "Tracksuits", "Gym Wear" ]
        },
        {
            title: "Accessories",
            items: [ "Caps", "Belts", "Wallets", "Watches", "Sunglasses", "Jewellery", "kadas", "Chains" ]
        }
    ];

    const data = type === "women" ? womenData : menData;

    return (
        <div className="mega-menu">
            { data.map((section, index) => (
                <div key={ index }>
                    <p>{ section.title }</p>

                    { section.items.map((item, i) => (
                        <Link key={ i } to="#">
                            { item }
                        </Link>
                    )) }
                </div>
            )) }
        </div>
    );
}
