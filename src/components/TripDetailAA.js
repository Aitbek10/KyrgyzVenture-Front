import AA1 from "../assets/AA1.jpg"
import AA2 from "../assets/AA2.jpg"
import AA3 from "../assets/AA3.jpg"
import AA4 from "../assets/AA4.jpg"
import TripDetailDataAA from "./TripDetailDataAA"
import "./DestinationStyles.css"


const TripDetailAA = () => {
    return (
        <div className="destination">
                <h1>Popular Destinations</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame</p>
                
                <TripDetailDataAA
                className="first-des"
                heading = "Camp Ak-Sai"
                text = "The Ak-Sai camp is located in the Ala-Archa National Park and is popular among those who enjoy a relaxing holiday in nature. Situated in a valley next to clear mountain streams, this camp is ideal for picnics and short walks. Guests can enjoy the view of the snow-capped peaks while listening to the sound of water and breathing in the fresh mountain air. The Ak-Sai camp is also known for its picturesque landscapes, which are perfect for photo shoots against the backdrop of wild nature."
                img1 = {AA1}
                img2 = {AA2}
                />

                <TripDetailDataAA
                className="first-des-reverse"
                heading = "Peak Teacher"
                text = "For fans of extreme sports and active recreation, Uchitel Peak (4,200 meters) is one of the most accessible routes for climbing in Ala-Archa. Trekking routes leading to the peak run through picturesque mountain landscapes and crystal clear streams, which attracts tourists and climbers from all over the world. Uchitel Peak requires good physical fitness, but offers stunning panoramic views of the Tien Shan Mountains and the surroundings of Ala-Archa."
                img1 = {AA3}
                img2 = {AA4}
                />
            <div className="about-container">
                <h1>Facts and Features</h1>
                <h2>High Mountain Peaks</h2>
                <p>Ala-Archa is famous for its peaks, including Korona Peak (4860 m), Semenov-Tian-Shansky Peak and Svobodnaya Koreya Peak, which attract experienced climbers.</p>
                
                <h2>History of mountaineering</h2>
                <p>The park opened in 1976 and became a popular training ground for Soviet climbers.</p>

                <h2>Landscapes for any season</h2>
                <p> Ala-Archa is attractive to visit at any time of the year, offering green valleys and flowering meadows in spring and summer, and snow-capped peaks and icy waterfalls in autumn and winter.</p>
            
            </div>
        </div>
        

    )
}

export default TripDetailAA