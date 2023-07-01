import React from "react";
import dhImg from "../images/DH.png";
import faceImg from "../images/ico-facebook.png";
import instaImg from "../images/ico-instagram.png";
import tiktokImg from "../images/ico-tiktok.png";
import wappImg from "../images/ico-whatsapp.png";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow"></div>
      <footer className="bg-blue-600 py-5 flex flex-row justify-between">
        <p className="self-center">Made by ManuMB</p>
        <div className="flex gap-x-2">
          <p>Follow us</p>
          <img src={faceImg} alt="Facebook logo" className="h-12 w-12" />
          <img src={instaImg} alt="Instagram logo" className="h-12 w-12" />
          <img src={tiktokImg} alt="TikTok Logo" className="h-12 w-12" />
          <img src={wappImg} alt="WhatsApp Logo" className="h-12 w-12" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
