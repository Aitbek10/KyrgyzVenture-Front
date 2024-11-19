import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AboutStyles.css";

function AboutUs() {
    const [aboutData, setAboutData] = useState({});

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/about/'); 
                if (response.data.length > 0) {
                    setAboutData(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };
        fetchAboutData();
    }, []);

    return (
        <div className="about-container">
            <h1>Our History</h1>
            <p>{aboutData.history}</p>
            
            <h1>Our Mission</h1>
            <p>{aboutData.mission}</p>

            <h1>Our Vision</h1>
            <p>{aboutData.vision}</p>
        </div>
    );
}

export default AboutUs;
