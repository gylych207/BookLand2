import { Link } from "react-router-dom";
import "../style.css";

export default function Layout(props) {
    const { currentUser, handleLogout } = props; 
    return (
        <div className="header-container">
            {/* nav start */}
            <nav
                className="navbar navbar-expand-lg navbar-light "
                style={{ backgroundColor: "#19497D" }}
            >
                <div className="container-fluid">
                    <Link to="/">
                        <img
                            src="https://i.imgur.com/VJT4g9l.png"
                            alt=""
                            id="logo"
                        />
                    </Link>
                    
                    {
                      currentUser ? 
                      <div
                        className=" nav-right-position"
                        id=""
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <div
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{fontSize:'18px'}}
                                >
                                 Welcome {currentUser.name}
                                </div>
                                <ul
                                    className="dropdown-menu responsive-dropdown"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li className="text-center">
                                    <Link to='/profile' className="text-dark">Profile</Link>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li className="text-center">
                                        <Link to='/' onClick={handleLogout} className="text-dark">
                                        Logout
                                         
                                         </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    :
                    <div
                        className=" nav-right-position"
                        id=""
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                
                            <Link to='/login'><button className="btn btn-primary">Login</button></Link>
                            </li>
                        </ul>
                    </div>
                    }
                </div>
            </nav>
            {/* nav end */}

            {/* {currentUser && (
        <>
          <Link to='/bookInfo'>Books</Link>
          <Link to='/sellyourBook'>Books</Link>
     
        </>
      )} */}
            {props.children}
        </div>
    );
}
