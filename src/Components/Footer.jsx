import React from "react";
import dhImg from "../images/DH.png";
import faceImg from "../images/ico-facebook.png";
import instaImg from "../images/ico-instagram.png";
import tiktokImg from "../images/ico-tiktok.png";
import wappImg from "../images/ico-whatsapp.png";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={dhImg} alt="DH logo" />
      <p>Follow us</p>
      <img src={faceImg} alt="Facebook logo" />
      <img src={instaImg} alt="Instagram logo" />
      <img src={tiktokImg} alt="TikTok Logo" />
      <img src={wappImg} alt={"WhatsApp Logo"} />
    </footer>
  );
};

export default Footer;
