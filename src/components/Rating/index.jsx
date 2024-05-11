/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ totalStars = 5, rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-5">
      <h5>Service Quality</h5>
      {[...Array(totalStars)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`text-xl ${index <= (hover || rating) ? "text-yellow-500" : "text-gray-400"}`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
