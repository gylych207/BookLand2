import React from 'react';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { getOneBook } from '../services/books';
import ReactStars from "react-rating-stars-component";



const BookInfo = (props) => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const { handleDelete } = props;

  

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
    }
    fetchBook();
  }, [id])

 

  return (
    <div className='book-info'>
      <div className='upper-container'>
        <div className='info-left-container'>
          <div className='book-div'> <img src={book?.image_url} alt='' className='book-info-image' />
          <Link to={`/books/${book?.id}/edit`}><span className='customize'>Customize</span></Link>
            <span className='delete' onClick={()=>handleDelete(book.id)}>Delete</span>
            </div>
        </div>
        <div className='info-middle-container'>
          <div className='upper-inner-container'><p>{book?.title}</p></div>
          <div className='lower-inner-container'>
            <div className='left-lower-inner-container'>
              <p><span>Condition:</span> {book?.condition}</p>
              <p><span>ISBN: </span>{book?.isbn}</p>
              <p><span>Rental Price: </span> {book?.price}$</p>
              <p><span>Author: </span>{book?.author_name}</p>
             
            </div>
            <div className='right-lower-inner-container'>
              <div className='instock'><p>In stock</p></div>
            </div>
          </div>
  
        </div>
        <div className='info-right-container'>
          <div className='ad overall-rating'>
          <h3> Book Overall Rating: {book?.rating}</h3>
            
            <ReactStars
              className="due"
              value={1}
              edit={false}
              count={1}
              size={24}
              activeColor="#ffd700"
            />
            </div>
          <div className='ad'>
            <p>Free 2 Day Shipping</p>
            <p>Arrive 01.05.2021</p>
          </div>
          <div className='btn-rent'>
            <Link to={`/books/${id}/rents`}><p>RENT</p></Link>
          </div>
        </div>
      </div>
      <div className='lower-container'>
        <div className='reviews'>
          <input type='textarea' />
          <img src='https://i.imgur.com/opaqxyG.png' alt=''/>
        </div>
        <div className='photo'>
          <img src='https://i.imgur.com/t0UsMu4.png' alt=''/>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;