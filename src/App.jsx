import React, { useState } from 'react';
import './App.css';
import { json } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    
  });
  const [confirmPassword, setConfirmPassword] = useState("")
  const onChangeConfirmPassword = (e)=>{
    setConfirmPassword(e.target.value)
  }
  function onChangeValue(key) {
    return function (e) {
      setUser({ ...user, [key]: e.target.value });
    };
  }
  function isValidEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  

  function onSubmit(event) {
    event.preventDefault();
    if (user.password !== confirmPassword){
      alert("Please! Password and ConfirmPassword must be the same!!1")
      return
    }
    alert(JSON.stringify(user))
    setUser({
      username: "",
      password: "",
      confirmPassword:"",
      email: "",
    });
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={user.username} onChange={onChangeValue("username")} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={user.password} onChange={onChangeValue("password")} />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmpassword" value={user.confirmPassword} onChange={onChangeConfirmPassword}  />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={user.email} onChange={onChangeValue("email")} />

      <button type='submit'>Login</button>
    </form>
  );
};

export default App;
