import karakol2 from "../assets/karakol2.jpg"
import karakol3 from "../assets/karakol3.jpg"
import karakol4 from "../assets/karakol4.jpg"
import karakol5 from "../assets/karakol5.jpg"
import TripDetailDataKR from "./TripDetailDataKR"
import "./DestinationStyles.css"
import "./AboutStyles.css"

const TripDetailKR = () => {
    return (
        <div className="destination">
                <h1>Karakol</h1>
                <p>Tours give you the opportunity to see a lot, within a time frame</p>
                
                <TripDetailDataKR
                className="first-des"
                heading = "Ski Resort Karakol"
                text = "Karakol Ski Base is a premier winter sports destination located in the breathtaking Terskey Alatau mountains of Kyrgyzstan. Offering a unique blend of stunning natural scenery and excellent skiing facilities, this ski base caters to both beginners and advanced skiers. With a variety of slopes, well-maintained trails, and modern ski lifts, visitors can enjoy an exhilarating experience on the powdery slopes. The base also features equipment rental services, cozy accommodations, and local dining options, making it an ideal spot for a winter getaway. Beyond skiing, the area is perfect for snowboarding, snowshoeing, and exploring the beautiful alpine landscapes, ensuring an unforgettable adventure for all winter sports enthusiasts."
                img1 = {karakol2}
                img2 = {karakol3}
                />

                <TripDetailDataKR
                className="first-des-reverse"
                heading = "Karakol in Summer"
                text = "Karakol in summer is a breathtaking destination characterized by lush green valleys, majestic mountains, and crystal-clear rivers. This vibrant town offers a variety of outdoor activities, including hiking to stunning locations like Ala-Kul Lake and the Karakol Valley, where visitors can enjoy wildflowers and panoramic views. The region is also perfect for mountain biking, horseback riding, and rafting on nearby rivers. With its rich cultural heritage, Karakol features lively local markets where travelers can sample delicious Kyrgyz cuisine and experience traditional yurt stays, making it an ideal summer getaway for adventure seekers and nature lovers alike."
                img1 = {karakol4}
                img2 = {karakol5}
                />
            <div className="about-container">
                <h1>Facts and Features</h1>
                <h2>Ski Resort</h2>
                <p>Karakol is home to one of the best ski resorts in Central Asia, offering excellent conditions for skiing and snowboarding, along with stunning views of the surrounding mountains.</p>
                
                <h2>Natural Diversity</h2>
                <p>The region surrounding Karakol is renowned for its natural diversity, including alpine meadows, crystal-clear lakes, and picturesque mountain rivers, making it a popular destination for trekking and outdoor activities.</p>

                <h2>Hospitality</h2>
                <p> Karakol is famous for its traditional Kyrgyz hospitality. Locals warmly welcome guests and offer them to try national dishes like beshbarmak and kumys.</p>
            
            </div>
        </div>
        

    )
}

export default TripDetailKR