import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { name, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='signUp-screen'>
    <div className='wraper fadeInDown'>
    <div className='formContent'>
    <h2 className="active"> Sign Up</h2>
    <form onSubmit={(e)=> {
      e.preventDefault();
      handleRegister(formData);
    }}>
    
      <label>Username:
        <input
          type='text'
          placeholder="User Name"
                name='name'
                className='fadeIn second login tex'
          value={name}
          onChange={handleChange}
        />
      </label>
    
      <label>Email:
        <input
          placeholder="Email"
          type='text'
                name='email'
                className='fadeIn second login tex'
          value={email}
          onChange={handleChange}
        />
      </label>
    
      <label>Password:
        <input
          placeholder="Password"
          type='password'
                name='password'
                className='fadeIn third login tex'
          value={password}
          onChange={handleChange}
        />
      </label>
   
      <input type="submit" className="fadeIn fourth sub" />
      </form>
      </div>
      </div>
    </div>
  )
}
