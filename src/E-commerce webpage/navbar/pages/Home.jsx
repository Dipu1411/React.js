import Navbar from "../Navbar";
import Slider from "../../slider/Slider";
import Products from "../../products/Products";
import StealDrips from "../../products/StealDrips";
import TopTrends from "../../products/TopTrends";
import ForYou from "../../products/Foryou";
import Footer from "../../footer/Footer";


export default function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            <Products />
            <StealDrips />
            <TopTrends />
            <ForYou />
            <Footer />
        </>
    );
}
