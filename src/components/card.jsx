import propTypes from "prop-types";

function Card({ imgSrc, name, bio }) {
  return (
    <div className="Card">
      <img src={`/${imgSrc}`} alt=" picture of a duck"></img>
      <p id="title">{name}</p>
      <p>{bio}</p>
    </div>
  );
}

Card.propTypes = {
  name: propTypes.string,
  imgSrc: propTypes.string,
  bio: propTypes.string,
};

export default Card;
