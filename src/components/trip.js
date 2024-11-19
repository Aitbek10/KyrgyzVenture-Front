import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/trip/'); 
                setTrips(response.data);
            } catch (error) {
                console.error('Error fetching trips:', error);
            }
        };
        fetchTrips();
    }, []);

    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p></p>
            <div className="tripcard">
                {trips.map((trip) => (
                    <TripData
                        key={trip.slug} 
                        imgs={trip.image_url}  
                        heading={trip.name}  
                        text={trip.description}  
                        link={`/${trip.slug}`}  
                    />
                ))}
            </div>
        </div>
    );
}

export default Trip;
