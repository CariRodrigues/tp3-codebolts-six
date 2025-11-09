import { useEffect, useState } from "react";
import "./SimpsonsFavorites.css";
import Logo from "@/assets/simpsons/the_simpsons_logo.svg";
import backgroudSimpsons from "@/assets/simpsons/background_simpsons.jpg";


const SimpsonsFavorites = ({ characterId }) => {
    const [character, setCharacter] = useState(null);


    const cardSimpsonsStyle = {
        backgroundImage: `url(${backgroudSimpsons})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '260px 360px'
    };

    useEffect(() => {
        fetch(`https://thesimpsonsapi.com/api/characters/${characterId}`)
            .then((res) => res.json())
            .then((data) => setCharacter(data))
            .catch((err) => console.error("Error fetching character:", err));
    }, [characterId]);

    if (!character) {
        return <div className="card-container loading">Loading...</div>;
    }

    const randomPhrase =
        character.phrases[Math.floor(Math.random() * character.phrases.length)];


    return (
        <div className="card-container">
            <div className="flip-card">
                <div className="card-front" style={cardSimpsonsStyle}>
                    <img
                        className="character-img"
                        src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`}
                        alt={character.name}
                        loading="lazy"
                    />
                    <img src={Logo} alt="Simpsons Logo" className="logo-simpsons" />
                </div>
                <div className="card-back">
                    <h3>{character.name}</h3>
                    <p><strong>Ocupación:</strong> {character.occupation}</p>
                    <p><strong>Edad:</strong> {character.age}</p>
                    <p><strong>Fecha de nacimiento:</strong> {character.birthdate}</p>
                    <p className="phrase">"{randomPhrase}"</p>
                </div>
            </div>
        </div>
    );
};

export default SimpsonsFavorites;