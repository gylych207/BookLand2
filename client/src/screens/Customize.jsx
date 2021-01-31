import React from 'react';
import { useState, useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom';

const Customize = (props) => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    title: '',
    condition: '',
    isbn: '',
    image_url: '',
    price: '',
    author_name:'',
    category_id:'',
  })
  const { title, condition, isbn, image_url, price, author_name } = formData;
  const { books, categories, handleUpdate } = props;
  const { id } = useParams();
  
  useEffect(() => {
    const prefillFormData = () => {
      const book = books.find((book) => {
        return book.id === Number(id)
      })
      setFormData({
        name: book.title
      })
    }
    if (books.length) {
      prefillFormData()
    }
  }, [books])

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
      handleUpdate(id,formData)
   
    }}>
      <h3>Customize Your Book</h3>
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
     
      <button>Update</button>
    </form>
  );
};

export default Customize;