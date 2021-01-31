import { Link } from 'react-router-dom';
import '../style.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      <header>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            <Link to='/catalog' className="catalog">Catalog</Link>
          </>
        ) : (
            <>
            <Link to='/login' className="login">Login</Link>
              <Link to='/catalog' className="catalog">Catalog</Link>
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
