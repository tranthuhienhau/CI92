// import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, {useState} from 'react';

const App = () => {
  const [form, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.fullName.trim() === '' ||
      form.emailAddress.trim() === '' ||
      form.password.trim() === '' ||
      form.confirmPassword.trim() === ''
    ) {
      alert('You must fill in all fields');
      return;
    }


    console.log('Form submitted:', form);
    alert(JSON.stringify(form));
    setFormData({
      fullName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <form action="" id="form_hello" onSubmit={handleSubmit}>
      <h3>HELLO</h3>
      <h4>Please sign up to continue</h4>

      <label htmlFor="fullName">Fullname</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        required
      />

      <label htmlFor="emailAddress">Email address</label>
      <input
        type="text"
        id="emailAddress"
        name="emailAddress"
        value={form.emailAddress}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit">Sign up</button>
    </form>
  );
};


export default App