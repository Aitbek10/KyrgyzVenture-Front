import TripDetailKR from "../components/TripDetailKR";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";

function Karakol () {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://foto-tours.ru/media/tz_portfolio/article/cache/63c7acba728f6tz_portfolio_1674030266_M.jpe"
                title="Karakol"
                text="Choose Your Favourite Destination"
            />
            <TripDetailKR />
            <Footer />
        </>
    );
}

export default Karakol;
