import {React,useState} from "react";
import './AuthPage.css'

import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="main">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      <div className="login">
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
      <div className="img"></div>
    </main>
  );
}

