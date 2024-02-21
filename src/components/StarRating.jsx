import { FaStar } from "react-icons/fa";
import { useState } from "react";
import '../index.css'

const StarRating = (numberOfStars = 6) => {
  const [rating, SetRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {

  }

  function handleMouseEnter(getCurrentIndex) {
    
  }

  function handleMouseLeave(getCurrentIndex) {
    
  }


  return (
    <div className="star-rating">
      {[...Array(numberOfStars).map((_, index) => {
        index += 1;

      })]}
      <div className="wrapper">
       <h3>Rate Us:</h3>
      </div>
       
    </div>
  );
}

export default StarRating