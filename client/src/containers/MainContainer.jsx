import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Catalog from "../screens/Catalog.jsx";
import Landing from "../screens/Landing.jsx"
import BookInfo from "../screens/BookInfo.jsx";
import Customize from "../screens/Customize.jsx";
import SellYourBook from "../screens/SellYourBook.jsx";
import ShoppingCard from "../screens/ShoppingCard.jsx"
import Profile from "../screens/Profile"
import { getAllCategories} from "../services/categories.js";
import { getAllBooks, postBook, deleteBook, putBook, filterBook, rentCreate, rentBookDelete, getRentedBooks, updateRating } from "../services/books.js";


export default function MainContainer(props) {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [rentData, setRentData] = useState([])
  const history = useHistory();
  const { currentUser } = props;
  
  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getAllBooks();
      setBooks(bookData)
    }
    const rentBook = async () => {
      const rentData = await getRentedBooks(1);
      setRentData(rentData);
    }
    rentBook()
    fetchBooks();
  }, []);

    
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryData = await getAllCategories();
      setCategories(categoryData)
    }
    const isAuthenticated = ()=>{
      if (currentUser == null){
        history.push('/login')
      }
    }
    isAuthenticated();
    fetchCategories();
  },[]);
  
  
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

  const handleFilters = async(filterData) =>{
    const books = await filterBook(filterData);
    setBooks(books)
  }
  const handleRentCreate = async(id, rentData) => {
    const books = await rentCreate(id, rentData);
    setRentData(books);
    history.push('/profile')
  }

  
  const handleRentBookDelete = async(id)=>{
    const data = await rentBookDelete(id);
    setRentData(data);
  }
  const handleBookRating = async(id, rating)=>{
    const data = await updateRating(id, rating);
    setRentData(data);
  }
  

  return (
    <Switch>
        <Route exact path='/books'>
        <Catalog
          books={books}
          handleDelete={handleDelete}
          currentUser={currentUser}
          handleFilters = {handleFilters}
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
      <Route path='/books/:id/rents'>
        <ShoppingCard
         handleRentCreate={handleRentCreate}
        />
      </Route>
      <Route exact path='/'>
        <Landing
          
        />
      </Route>
       <Route exact path='/profile'>
        <Profile
        handleRentBookDelete={handleRentBookDelete}  
        rentData = {rentData}
        handleBookRating = {handleBookRating}      
        />
        
      </Route>
    </Switch>
  )
}
