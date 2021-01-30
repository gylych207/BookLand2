import React, { useState } from 'react';

export default function SellYourBook(props){
  const [formData, setFormData] = useState({
    title: '',
    condition: '',
    isbn: '',
    image_url: '',
    price: '',
    author_name:''
  })
  const {title, condition, isbn,image_url, price, author_name} = formData;
  const {handleCreate} = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
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

     
      <button>Submit</button>
    </form>
  )
};

