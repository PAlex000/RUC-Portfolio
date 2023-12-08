import React, { useState, useEffect } from 'react';
import CardComp from "../common/CardComp";

const StarRating = ({ rating, onStarClick, size }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      onClick={() => onStarClick(index + 1)}
      style={{ fontSize: size || '16px', cursor: 'pointer' }} // Add the fontSize style
    >
      {index + 1 <= rating ? '★' : '☆'}
    </span>
  ));

  return <div style={{ position: 'absolute', top: '10px', left: '10px' }}>{stars}</div>;
};
const Rating =() => {

  const backgroundContainer = {
    backgroundColor: "#000",
  };

  useEffect(() => {
    console.log('Rating component is rendered');
  }, []);
  // Initial rating state
  const [rating, setRating] = useState(0);

  // Initial comment state
  const [comment, setComment] = useState('');

  // Event handler for updating the rating
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Event handler for updating the comment
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Event handler for saving the rating
  const handleSaveRating = async () => {
    //saving logic goes here
    // Clear the input fields after saving
    setRating(0);
    setComment('');
  };

  // Event handler for canceling the rating
  const handleCancelRating = () => {
    // Clear the input fields
    setRating(0);
    setComment('');

  const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
  };

  const cardCompProps = {
    title: "Movie Title Goes Here",
    imageSrc: "react-frontend/src/assets/shawshank.jpg",
    style: { margin: "auto" },
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 'auto' }}>
      {/* Movie Details Section using CardComp */}
      <div style={{ textAlign: 'center', marginBottom: '75px', maxWidth: '250px', width: '80%', margin: 'auto' }}>
        <CardComp {...cardCompProps} />
        <button>See Similar Movies</button>
      </div>
      {/* Rating and Bookmark Section */}
      <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
        {/* ... (Existing bookmark components) */}
      </div>

      {/* Combined Rating Input and Buttons Section */}
      <div style={{ position: 'relative', textAlign: 'center', marginTop: 'auto', marginBottom: '400px', width: '80%', maxWidth: '800px' }}>
  {/* Stars component */}
  <StarRating rating={rating} onStarClick={handleRatingChange} size ="22px" style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)'}} />

  <textarea
    placeholder="Write your rating here..."
    value={comment}
    onChange={handleCommentChange}
    style={{ width: '100%', minHeight: '100px', fontSize: '16px', padding: '10px', marginTop: '40px' }}
  />

  {/* Save and Cancel Buttons */}
  <button onClick={handleSaveRating}>Save</button>
  <button onClick={handleCancelRating}>Cancel</button>
</div>
    </div>
  );
}

export default Rating;
