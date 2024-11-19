import React from 'react';
import './ContactFormStyles.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <p><strong>Address:</strong> XXXXXXXXXXXXXXX</p>
      <p><strong>Phone:</strong> +996 777 111 222</p>
      <p><strong>Phone:</strong> +996 555 222 333</p>
      <p><strong>Email:</strong> kyrgyz_venture@tour.kg</p>
        <p><strong>Facebook</strong> <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
        </a></p>
        <p><strong>Instagram</strong><a href="/">
            <i className="fa-brands fa-instagram-square"></i>
        </a></p>
          
    </div>
  );
};

export default ContactPage;
