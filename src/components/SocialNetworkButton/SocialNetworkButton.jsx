import React from "react";
import "@/components/SocialNetworkButton/SocialNetworkButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function SocialNetworkButton({ networks }) {
  const icons = {
    github: faGithub,
    linkedin: faLinkedin,
    instagram: faInstagram,
  };

  return (
    <div className="SocialButtons">
      <div className="Space" />
      {Object.entries(networks).map(([name, url]) => (
        url && (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ButtonStyle" title={name}>
              <FontAwesomeIcon icon={icons[name]} />
            </button>
          </a>
        )
      ))}
      <div className="Space" />
    </div>
  );
}
