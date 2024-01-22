import "./App.css";
import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage/Homepage.jsx";


function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <div className="App">

      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Homepage />
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}

    </div>
  );
}

export default App;
