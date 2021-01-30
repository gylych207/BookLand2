import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </header>
  
      {currentUser && (
        <>
          <Link to='/bookInfo'>Books</Link>
     
        </>
      )}
      {props.children}
    </div>
  )
}
