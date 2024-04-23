import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p style={{ color: "red" }}>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to Zeecare Health – Your Trusted Partner in Wellness At
            Zeecare Health, we believe that everyone deserves access to
            high-quality healthcare that is convenient, comprehensive, and
            compassionate. Our mission is to empower individuals and communities
            to take control of their health and well-being through innovative
            medical solutions and personalized care. With a team of experienced
            healthcare professionals, cutting-edge technology, and a
            patient-centered approach, Zeecare Health is your one-stop
            destination for all your healthcare needs. Whether you're seeking
            preventive care, managing a chronic condition, or in need of
            specialized treatment, we're here to support you every step of the
            way.
          </p>
          <p>We are all in 2024!</p>

          <p>
            At Zeecare Health, we understand that each individual is unique, and
            we tailor our services to meet your specific needs and preferences.
            Our team is committed to building trusted relationships with our
            patients, ensuring open communication, respect, and dignity in every
            interaction. Experience the Zeecare Health difference and embark on
            your journey to optimal health and wellness today. Your well-being
            is our priority, and we're here to support you every step of the
            way.
          </p>
          <p>Your Trusted Partner in Wellness and health</p>
          <p>Happy And Healthy</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
