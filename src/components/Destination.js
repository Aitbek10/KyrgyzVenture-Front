import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/destinations/');
                setDestinations(response.data);
            } catch (error) {
                console.error('Error fetching destinations:', error);
            }
        };
        fetchDestinations();
    }, []);

    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            {destinations.map((destination, index) => (
                <DestinationData
                    key={destination.id}
                    className={index % 2 === 0 ? "first-des" : "first-des-reverse"} 
                    heading={destination.name}
                    text={destination.description}
                    img1={destination.image1}  
                    img2={destination.image2} 
                />
            ))}
        </div>
    );
};

export default Destination;
