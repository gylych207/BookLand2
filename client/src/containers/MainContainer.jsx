import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Catalog from "../screens/Catalog.jsx";
import Landing from "../screens/Landing.jsx"
import BookInfo from "../screens/BookInfo.jsx";
import Customize from "../screens/Customize.jsx";
import SellYourBook from "../screens/SellYourBook.jsx";
import ShoppingCard from "../screens/ShoppingCard.jsx"
import { getAllCategories} from "../services/categories.js";
import { getAllBooks, postBook, deleteBook, putBook } from "../services/books.js";


export default function MainContainer(props) {
  const [books, setBooks] = useState([]);
  const [bookData,setBookData] = useState([]);
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const { currentUser } = props;
  
  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getAllBooks();
      setBooks(bookData)
    }
    fetchBooks();
  }, []);

    
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryData = await getAllCategories();
      setCategories(categoryData)
    }
    fetchCategories();
  }, []);
  
  
  const handleCreate = async (bookData) => {
    const newBook = await postBook(bookData);
    setBooks(prevState => [...prevState, newBook])
    history.push('/books')
  }
  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(prevState => prevState.filter(book => {
      return book.id !== id
    }))
    history.push('/books')
  }
  const handleUpdate = async (id, bookData) => {
    const updatedBook = await putBook(id, bookData);
    setBooks(prevState => prevState.map(book => {
      return book.id === Number(id) ? updatedBook : book
    }))
    history.push('/books')
  }

  return (
    <Switch>
        <Route exact path='/books'>
        <Catalog
          books={books}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/sellYourBook'>
        <SellYourBook
          handleCreate={handleCreate}
          categories={categories}
        />
      </Route>
      <Route exact path='/books/:id'>
        <BookInfo
          books={books}
          handleDelete={handleDelete}
          setBookData={setBookData}
        />
      </Route>
      <Route path='/books/:id/edit'>
        <Customize
          books={books}
          handleUpdate={handleUpdate}
          categories={categories}
        />
      </Route>
      <Route path='/sellyourbook'>
        <SellYourBook
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/shoppingCard'>
        <ShoppingCard
         bookData={bookData}
        />
      </Route>
      <Route exact path='/'>
        <Landing
          
        />
      </Route>
    </Switch>
  )
}
