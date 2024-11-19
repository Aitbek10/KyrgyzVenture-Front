import TripDetailAA from "../components/TripDetailAA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";

function AlaArcha () {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://cdn.tripspoint.com/uploads/photos/7195/adventure-to-the-ala-archa-national-park_E4u17.jpeg"
                title="Ala Archa"
                text="Choose Your Favourite Destination"
            />
            <TripDetailAA />
            <Footer />
        </>
    );
}

export default AlaArcha;
