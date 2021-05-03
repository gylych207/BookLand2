import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js'

export default function Catalog(props) {
  let { books} = props;//changed const to let
  const {handleFilters} = props;
  const [formData, setFormData] = useState({
    title: '',
    condition: '',
    price_from: '',
    price_to: '',
    author_name:''
  })

  const {title, price_to, price_from, author_name} = formData;
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  //fuse js search added 
  const [data, setData] = useState(books);
  const [query,setQuery] = useState('')
  const fuse = new Fuse(data, {
    keys: ["title"],
    includeScore:true
  });
  let results = fuse.search(query);
  books = query? results.map(result => result.item) : books;
  console.log(books.length);

  function handleSearch(e) {
    setQuery(e.target.value)
  }
  

  return (
    <div className='books-container'>
      
      <div className="left-container filters">
        
        <div className='wrapper '>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleFilters(formData)
           
        }}>
          <h3>Book Filters</h3>
          <label>Title:
            <input
              name='title'
              type='text'
              value={title}
              onChange={handleChange}
            />
          </label>
          <label>Condition:
            <select className="form-select form-select-option" name='condition' onChange={handleChange}>
              <option defaultValue>Select Option</option>
              <option value="used">New</option>
              <option value="new">Used</option>
            </select>
          </label>
          <label>price From:
            <input
              placeholder="From"
              name='price_from'
              type='number'
              value={price_from}
              onChange={handleChange}
            />
          </label>
            <label>price To:
            <input
              placeholder="To"
              name='price_to'
              type='number'
              value={price_to}
              onChange={handleChange}
            />
            </label>
          <label>author:
            <input
              name='author_name'
              type='text'
              value={author_name}
              onChange={handleChange}
            />
          </label>
     
          <input type="submit" value="Filter" name="submit" id="submit" />
            </form>
        </div>


      </div>
      <div className='middle-container'>
        <input type='search' placeholder="Search by Title" className='search form-control'
          value={query}
          onChange={handleSearch}>
          </input>
        <div className="row list-container">
            {books.length ? books.map(book => (
            <div key={book.id} className='col-6 col-sm-3 col-md-3 mt-2 books-card-container'>
              <div className="content1 single-books-container d-flex justify-content-center align-items-center pt-4">
                <Link to={`/books/${book?.id}`} id='link' className="text-center">
                  <img src={book?.image_url} alt='' className='book-img img-fluid'/>
                  <p className='book-title'>{book?.title}</p>
                </Link>
            </div>
            </div>
          )):
          <div>
            <h4 className="text-center text-white">Results not found</h4>
          </div>
          }
      
        </div>
      
        <img src={`https://i.imgur.com/vt1GHgF.png`} alt='' className='grass-img'/>
      </div>
      <div className='right-container'>
        <img src={`https://i.imgur.com/QLJuTHR.png`} alt='' className='tree-image'/>
      </div>
    </div>
  );
};
