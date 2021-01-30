import React from 'react';
import { Link } from 'react-router-dom';

export default function Catalog(props) {
  return (
    <div>
      <h3>Books</h3>
      {props.books.map((book) => { 
        return book.title
      })}
    </div>
  );
};
