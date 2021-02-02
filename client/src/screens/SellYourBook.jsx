import React, { useState } from 'react';
import { useHistory } from "react-router-dom"


export default function SellYourBook(props) {
  const history = useHistory();
  
  const [formData, setFormData] = useState({
    title: '',
    condition: '',
    isbn: '',
    image_url: '',
    price: '',
    author_name:'',
    category_id:'',
  })
  const {title, condition, isbn,image_url, price, author_name} = formData;
  const {handleCreate,categories} = props;

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='sell-screen'>
      <div className='sell-left-container'>
        <div className='content1'>
          <h2>1. Fill out the form</h2>
          <p>We will tell you how much we'll pay you</p>
        </div>
        <img src='https://i.imgur.com/8EzvAKw.png' alt='coinbase'/>
      </div>
      <div className='sell-middle-container'>
        <divc className='content2'>
          <h2> 2. Mail Your Books for Free</h2>
          <p>Print a prepaid shipping label and tape it to the package</p>
        </divc>
        <div className='sell-form'>
          <div className='wrapper'>
        <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
     history.push('/books')
    }}>
      <h3>Your Book Info</h3>
      <label>Title:
        <input
          name='title'
          type='text'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>Condition:
        <input
          name='condition'
          type='text'
          value={condition}
          onChange={handleChange}
        />
      </label>
      <label>ISBN:
        <input
          name='isbn'
          type='text'
          value={isbn}
          onChange={handleChange}
        />
      </label>
      <label>imageURL:
        <input
          name='image_url'
          type='text'
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <label>price:
        <input
          name='price'
          type='text'
          value={price}
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
      <select defaultValue='hi' onChange={handleChange} name='category_id'>
        <option disabled value='hi'>--select a category--</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id} >{category.name}</option>
        ))}
              </select>
              
     
              <input type="submit" value="Send" name="submit" id="submit" />
            </form>
            </div>
        </div>
      </div>
      <div className='sell-right-container'>
      <div className='content3'>
        <h2> 3. Get paid</h2>
          <p>After we Inspect your book,we will Send your payment</p>
        
      </div>
  
          <img src='https://i.imgur.com/pzSPT2L.png' alt=''/>
      </div>
      

      </div>
  )
};

