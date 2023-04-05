import React from "react";
import ProfilePhoto from "/home/moringa/Downloads/WhatsApp Image 2023-03-27 at 21.44.13.jpeg";

const HomePage = () => (
  <div style={{ marginTop: "70px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    <img src={ProfilePhoto} alt="Profile" style={{ width: "200px", borderRadius: "50%", marginBottom: "20px" }} />
    <h1 style={{ textAlign: "center" }}>Hi, I'm Joseph Oluoch</h1>
    <p style={{ textAlign: "center", maxWidth: "600px" }}>I'm a full-stack web developer with expertise in Ruby, Ruby on Rails, SQL, JS, React, HTML and CSS. I have a passion for creating innovative and user-friendly web applications that make a positive impact on people's lives.</p>
  </div>
);

export default HomePage;
