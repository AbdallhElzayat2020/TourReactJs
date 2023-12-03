import { useState } from "react";

const Tour = ({ name, id, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img className="img" src={image} alt={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            readMore
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};
export default Tour;
