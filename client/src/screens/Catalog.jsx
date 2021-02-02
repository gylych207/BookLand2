import React from 'react';
import { Link } from 'react-router-dom';

export default function Catalog(props) {
  const { books} = props;
  return (
    <div className='books-container'>
      <div className="left-container">
        <img src={`https://i.imgur.com/781mgR7.png`} alt=''/>
      </div>
      <div className='middle-container'>
        <input type ='search' placeholder="Search" className='search'></input>
        <div className="list-container">
        {books.map(book => (
        <div key={book.id} className='book-name'>
          
          <Link to={`/books/${book?.id}`} id='link'>
            <img src={book?.image_url} alt='' className='book-img'/>
            <p className='book-title'>{book?.title}</p>
          </Link>
         
        </div>
      ))}
        </div>
      
      <img src={`https://i.imgur.com/vt1GHgF.png`} alt='' className='grass-img'/>
      </div>
      <div className='right-container'>
        <img src={`https://i.imgur.com/QLJuTHR.png`} alt='' className='tree-image'/>
      </div>
    </div>
  );
};
