import Star from "../assets/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(Star);

  return (
    <div>
      {stars.map((star, index) => (
        <img key={index} src={star} alt={star} width="14" height="14" />
      ))}
    </div>
  );
};

export default Rating;
