import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import MainContainer from "./containers/MainContainer.jsx";
import Layout from "./layouts/Layout.jsx";
import Login from "./screens/Login";
import Register from "./screens/SignUp.jsx";
import { loginUser, registerUser, verifyUser, removeToken} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();

  useEffect(() => { 
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  },[])

  return (
    <div>
    </div>
  );
}

export default App;
