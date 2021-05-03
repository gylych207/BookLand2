import React , { useState }from 'react';
import { useParams } from 'react-router-dom';

const ShoppingCard = (props) => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    description: '',
    days: ''
  })
  const {description, days} = formData;
  const {handleRentCreate} = props;

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='card'>
     	<div className='wrapper shoping_cart'>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleRentCreate(id, formData)}}>
          
          <h3>Shooping Cart</h3>
          <label>description:
            <input
              name='description'
              type='text'
              value={description}
              onChange={handleChange}
            />
          </label>
          <label>Rented Days:

            <input
              placeholder="Days"
              name='days'
              type='date'
              value={days}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Checkout" name="submit" id="submit" />
            </form>
            </div>
    </div>
  );
};

export default ShoppingCard;