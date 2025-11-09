import React from "react";
import "@/components/SocialNetworkButton/SocialNetworkButton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialNetworkButton() {
  return (
    <div className="SocialButtons">
      <div className="Space">
      </div>
      <a href="https://github.com/CariRodrigues" target="_blank" rel="noopener noreferrer">  
        <button className="ButtonStyle">
            <FontAwesomeIcon icon={faGithub} />
        </button>
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <button className="ButtonStyle">
            <FontAwesomeIcon icon={faLinkedin} />
        </button>
      </a>
      <a href="https://www.instagram.com/cari_rodriguess" target="_blank" rel="noopener noreferrer">
        <button className="ButtonStyle">
            <FontAwesomeIcon icon={faInstagram} />
        </button>
      </a>
      <div className="Space">
      </div>
    </div> 
  );
}