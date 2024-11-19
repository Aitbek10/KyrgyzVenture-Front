import TripDetailSR from "../components/TripDetailSR";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";

function SaryChelek () {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://manas.su/assets/images/see_place/Sary-Chelek2.jpg"
                title="Sary Chelek"
                text="Choose Your Favourite Destination"
            />
            <TripDetailSR />
            <Footer />
        </>
    );
}

export default SaryChelek;
