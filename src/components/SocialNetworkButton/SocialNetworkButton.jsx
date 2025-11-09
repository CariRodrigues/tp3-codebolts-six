import React from "react";
import "@/components/SocialNetworkButton/SocialNetworkButton.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialNetworkButton({github, linkedin, instagram}) {
  return (
    <div className="SocialButtons">
      <div className="Space">
      </div>
      <a href={github} target="_blank" rel="noopener noreferrer">  
        <button className="ButtonStyle">
            <FontAwesomeIcon icon={faGithub} />
        </button>
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <button className="ButtonStyle">
            <FontAwesomeIcon icon={faLinkedin} />
        </button>
      </a>
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <button className="ButtonStyle">
            <FontAwesomeIcon icon={faInstagram} />
        </button>
      </a>
      <div className="Space">
      </div>
    </div> 
  );
}