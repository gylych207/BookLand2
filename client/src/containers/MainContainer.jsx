import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Catalog from "../screens/Catalog.jsx";
import BookInfo from "../screens/BookInfo.jsx";
import Customize from "../screens/Customize.jsx";
import SellYourBook from "../screens/SellYourBook.jsx";
import { getAllCategories, getOneCategory } from "../services/categories.js";
import {getAllBooks, getOneBook, postBook, deleteBook, putBook} from "../services/books.js"

export default function MainContainer(props) {
  const [books, setBooks] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getAllBooks();
      setBooks(bookData)
    }
    fetchBooks();
  }, []);

  const handleCreate = async (bookData) => {
    const newBook = await postBook(bookData);
    setBooks(prevState => [...prevState, newBook])
    history.push('/books')
  }

  return (<>
    
  </>)
}
