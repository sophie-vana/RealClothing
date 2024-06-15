// LoginPage.js
import Navigation from "../components/navigation";
import React, { useState } from "react";
import LoginForm from "../components/loginForm";
import RegistrationForm from "../components/registrationForm";

const LoginPage = () => {
  // State to manage the display of either the login form or registration form
  const [showLoginForm, setShowLoginForm] = useState(true);

  // Function to switch btween registration and login forms
  const handleSwitchForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="loginPage">
      <Navigation />
      {showLoginForm ? (
        <LoginForm onSwitchForm={handleSwitchForm} />
      ) : (
        <RegistrationForm onSwitchForm={handleSwitchForm} />
      )}
    </div>
  );
};

export default LoginPage;
