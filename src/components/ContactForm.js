import React, { useState, useEffect } from "react";
import "./ContactFormStyles.css";

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/contact/") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setContactInfo(data[0]); 
        }
      })
      .catch((error) => console.error(error));
  }, []);

  if (!contactInfo) {
    return <div className="contact-container">Загрузка данных...</div>;
  }

  return (
    <div className="contact-container">
      <p><strong>Address:</strong> {contactInfo.address}</p>
      <p><strong>Phone:</strong> {contactInfo.phone1}</p>
      <p><strong>Phone:</strong> {contactInfo.phone2}</p>
      <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
      <p>
        <strong>Facebook:</strong>
        <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-square"></i>
        </a>
      </p>
      <p>
        <strong>Instagram:</strong>
        <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram-square"></i>
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
