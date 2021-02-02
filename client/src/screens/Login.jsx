import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
	const [ formData, setFormData ] = useState({
		username: '',
		password: ''
	});

	const { username, password } = formData;
	const { handleLogin } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

  return (
    <div className='login-screen'>
    <div className='wraper fadeInDown'>
      <div id='formContent'>
      <h2 className="active"> Sign In </h2>
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleLogin(formData);
			}}
    >
      <label>Username:
        <input
          type='text'
          name='username'
          id='login'
          className="fadeIn second tex"
          value={username}
          onChange={handleChange}
        />
      </label>
     
      <label>Password:
        <input
          type='password'
          name='password'
              id='password'
              className='fadeIn third tex'
          value={password}
          onChange={handleChange}
        />
      </label>
     
      <Link to='/register'><h2 className="inactive underlineHover">Sign Up </h2></Link>
      <input type="submit" className="fadeIn fourth sub"/>
      </form>
      </div>
      </div>
      </div>
	);
}
