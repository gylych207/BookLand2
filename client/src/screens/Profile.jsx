import React from 'react';
import ReactStars from "react-rating-stars-component";


const Profile = (props) => {
  const { handleRentBookDelete, rentData, handleBookRating } = props;

  return (
    <div className='book-info'>
      <div className='upper-container'>
        <div className="rent-list">
          <h2> Rented Book </h2>
          
           {rentData.map(book => (
          <div key={book.id} className='book-name rent-book'>
            <p className='book-title'>{book?.description}</p>
            <img src='/book.jpeg' alt='' className='book-img'/>
            <p className='book-title'>Due: {book?.days}</p>
            <button className="rent-delete due" onClick={() => handleRentBookDelete(book.id)}> Return </button>
            <ReactStars
              className="profile-due"
              value ={book.rating}
              count={5}
              onChange={(e) => handleBookRating(book.id, e)}
              size={24}
              activeColor="#ffd700"
            />
          </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;