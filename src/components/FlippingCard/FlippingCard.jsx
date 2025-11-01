import "./FlippingCard.css";
import Logo from "@/assets/simpsons/the_simpsons_logo.svg";
import backgroudSimpsons from "@/assets/simpsons/background_simpsons.jpg";

const FlippingCard = ({ character }) => {
  const cardSimpsonsStyle = {
    backgroundImage: `url(${backgroudSimpsons})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "260px 360px"
  };

  if (!character) {
    return <div className="card-container loading">Loading...</div>;
  }

  const randomPhrase =
    character.phrases?.[Math.floor(Math.random() * character.phrases.length)] ||
    "No phrase available.";

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

export default FlippingCard;
