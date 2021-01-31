import React from 'react';
import { Link } from 'react-router-dom';

export default function Catalog(props) {
  const { books, handleDelete, currentUser } = props;
  return (
    <div>
      <h3>Books</h3>
      {books.map(book => (
        <React.Fragment key={book.id}>
          <Link to={`/books/${book.id}`}><img src={book.image_url} /></Link>
          {currentUser?.id === book.user_id && (
            <>
              <Link to={`/books/${book.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
