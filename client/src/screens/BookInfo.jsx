import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneBook } from '../services/books';
import {getOneCategory} from "../services/categories.js"

const BookInfo = (props) => {
  const [book, setBook] = useState(null);
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
    }
    fetchBook();
  }, [id])

  useEffect(() => {
    const fetchCat = async () => {
      const catData = await getOneCategory(id);
      setCategory(catData);
    }
    fetchCat();
  }, [id])

 

  return (
    <div>
      <h3>{book?.title}</h3>
      <h3>{book?.category.name}</h3>
    </div>
  );
};

export default BookInfo;