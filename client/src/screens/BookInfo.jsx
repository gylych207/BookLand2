import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneBook } from '../services/books';

const BookInfo = (props) => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
    }
    fetchBook();
  }, [id])
 

  return (
    <div>
       <h3>{book.name}</h3>
    </div>
  );
};

export default BookInfo;