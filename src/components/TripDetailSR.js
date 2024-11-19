import SR1 from "../assets/SR1.jpg"
import SR2 from "../assets/SR2.jpg"
import SR3 from "../assets/SR3.jpg"
import SR4 from "../assets/SR4.jpg"
import TripDetailDataSR from "./TripDetailDataSR"
import "./DestinationStyles.css"
import "./AboutStyles.css"

const TripDetailSR = () => {
    return (
        <div className="destination">
                <h1>Sary Chelek</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame</p>
                
                <TripDetailDataSR
                className="first-des"
                heading = "Sary-Chelek Resort"
                text = "Nestled along the stunning shores of Lake Song-Kul, the Sary-Chelek Resort offers a tranquil escape surrounded by breathtaking mountain landscapes. Visitors can enjoy a variety of outdoor activities such as horseback riding, hiking, and fishing in the pristine waters of the lake. The resort features cozy yurts that provide a unique cultural experience, allowing guests to immerse themselves in the traditional nomadic lifestyle. With its serene atmosphere and stunning views, Sary-Chelek is an ideal destination for those seeking relaxation and adventure in nature."
                img1 = {SR1}
                img2 = {SR2}
                />

                <TripDetailDataSR
                className="first-des-reverse"
                heading = "Kyzart Valley"
                text = "Located just a short distance from Son-Kul Lake, Kyzart Valley is a popular spot for adventure seekers. This picturesque valley offers numerous trekking and hiking trails that lead to breathtaking viewpoints overlooking the lake and surrounding mountains. Campers can set up in the valley and enjoy stargazing under the clear skies of Kyrgyzstan. The area is also known for its diverse wildlife, making it a great place for nature lovers and photographers. Kyzart Valley is perfect for those looking to explore the natural beauty and engage in outdoor activities."
                img1 = {SR3}
                img2 = {SR4}
                />
            <div className="about-container">
                <h1>Facts and Features</h1>
                <h2>Passing Glacier</h2>
                <p>The lake freezes over in winter, making the surface ideal for ice skating at this time of year.</p>
                
                <h2>Height</h2>
                <p>Son-Kol is one of the highest lakes in Kyrgyzstan, located at an altitude of about 3016 meters above sea level.</p>

                <h2>Festival</h2>
                <p>Every year Son Kol hosts a festival celebrating traditional Kyrgyz culture, including sporting events such as horse racing and eagle games.</p>
            
            </div>
        </div>
        

    )
}

export default TripDetailSR