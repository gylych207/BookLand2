import { Link } from 'react-router-dom';
import '../style.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        {currentUser ? (
          <>
            <div className='name-logout'>
              <p className='name'>Welcome {currentUser.name}</p>
            <Link to='/' ><span onClick={handleLogout} className='logout'>Logout</span></Link>
            </div>
            <Link to='/'><img src="https://i.imgur.com/DQFRxfk.png" alt='' id='logo' /></Link>
           
          </>
        ) : (
            <>
              <Link to='/login' className="login"><span>Login</span></Link>
              <Link to='/'><img src="https://i.imgur.com/DQFRxfk.png" alt='' id='logo'/></Link>
           
            </>
         
        )}
      </header>
  
      {/* {currentUser && (
        <>
          <Link to='/bookInfo'>Books</Link>
          <Link to='/sellyourBook'>Books</Link>
     
        </>
      )} */}
      {props.children}
    </div>
  )
}
