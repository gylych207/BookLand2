import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Catalog from "../screens/Catalog.jsx";
import BookInfo from "../screens/BookInfo.jsx";
import Customize from "../screens/Customize.jsx";
import SellYourBook from "../screens/SellYourBook.jsx";
import { getAllCategories, getOneCategory } from "../services/categories.js";
import {getAllBooks, getOneBook, postBook, deleteBook, putBook} from "../services/books.js"

export default function MainContainer() {

  return (<>
    
  </>)
}
