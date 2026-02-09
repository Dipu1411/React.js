import { Link } from "react-router-dom";
import "./products.css";

const products = [
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260112/u1eB/6964b6b27ef0c7385c5d8c2c/-473Wx593H-443388990-dustypink-MODEL4.jpg",
        title: "Women",
        path: "/women"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260128/evm0/6979f91a7ef0c7385c9afc48/-473Wx593H-443388579-black-MODEL.jpg",
        title: "Jeans & Jeggings",
        path: "/jj"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260127/bm6J/6978ad0dcbfa0d56089fc453/-473Wx593H-443321932-black-MODEL.jpg",
        title: "Dresses",
        path: "/dresses"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260113/lKN4/69663e8c7ef0c7385c67046b/-473Wx593H-443388983-dustypink-MODEL.jpg",
        title: "Tops",
        path: "/tops"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260112/f8Yz/6964f7f67ef0c7385c6229a7/-473Wx593H-443388990-dustypink-MODEL.jpg",
        title: "Shirts",
        path: "/shirts"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260115/LsEE/6968ab47cbfa0d5608774269/-473Wx593H-443388112-darknavy-MODEL.jpg",
        title: "Nightwear",
        path: "/nightwear"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260113/Hfee/6966244ecbfa0d56086f9aa2/-473Wx593H-443390736-mustard-MODEL.jpg",
        title: "T-shirts",
        path: "/t-shirts"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260128/4hsf/6979f8097ef0c7385c9add29/-473Wx593H-443394339-beige-MODEL.jpg",
        title: "Trousers & pants",
        path: "/tp"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260121/lJnZ/6970ce647ef0c7385c81cce9/-473Wx593H-443334945-gold-MODEL.jpg",
        title: "Jewellery",
        path: "/jewellery"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20251225/uyMs/694d25f1cbfa0d56082b8406/-473Wx593H-443387936-dustypink-MODEL.jpg",
        title: "Innerwear",
        path: "iw"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260116/e3t9/696a5d5c7ef0c7385c703caa/-473Wx593H-443391318-black-MODEL.jpg",
        title: "Co-ord Sets",
        path: "/co"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260129/jgbJ/697b1c7fcbfa0d5608a7a22a/-473Wx593H-443391440-black-MODEL.jpg",
        title: "T-shirts",
        path: "/t-shirts"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20251222/tsbD/6948f925239b37265a921d21/-473Wx593H-443390358-midblue-MODEL.jpg",
        title: "Jeans",
        path: "/jeans"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260127/9TQz/6978c5a87ef0c7385c962633/-473Wx593H-443383787-khaki-MODEL.jpg",
        title: "Trouser & Pants",
        path: "/tp"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260102/GV8e/695759bfcbfa0d560842ff1f/-473Wx593H-443392733-blackmix-MODEL.jpg",
        title: "Joggers",
        path: "/joggers"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260106/ymqN/695ca37acbfa0d560850f089/-473Wx593H-443390712-ltblue-MODEL.jpg",
        title: "Cargos",
        path: "/cargos"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root1/20260122/Xn5c/6971f96d7ef0c7385c8773b4/-473Wx593H-443335718-khaki-MODEL.jpg",
        title: "Polo Tees",
        path: "/pt"
    },
    {
        img: "https://assets.sheinindia.in/medias/shein_sys_master/root/20250521/YVFP/682d621c7a6cd4182f45b098/-473Wx593H-443325981-maroon-MODEL.jpg",
        title: "Shirts",
        path: "/shirts"
    },

]

export default function Products() {
    return (
        <div className="products">
            {
                products.map((item, index) => (
                    <Link to={ item.path } key={ index } className="product-card">
                        <img src={ item.img } alt={ item.title } />
                        <p>{ item.title }</p>
                    </Link>
                ))
            }
        </div>
    )

}