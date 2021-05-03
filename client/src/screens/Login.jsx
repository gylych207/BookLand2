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
      <div className='formContent'>
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
          placeholder="User Name"
              name='username'
              className='fadeIn second login tex'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
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
      <br />
      <Link to='/register'> <h2 class="inactive underlineHover">Sign Up </h2></Link>
      <input type="submit" class="fadeIn fourth sub" />
      </form>
      </div>
      </div>
      </div>
	);
}
