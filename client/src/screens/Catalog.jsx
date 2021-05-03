import React, { useState }from 'react';
import { Link } from 'react-router-dom';
export default function Catalog(props) {
  const { books} = props;
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
  return (
    <div className='books-container'>
      

      <div className="left-container filters">
        
        <div className='wrapper'>
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
            <select className="form-select" name='condition' onChange={handleChange}>
              <option selected>Open this select menu</option>
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
