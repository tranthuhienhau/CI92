import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './component/Button'
const ParentComponent = () => {
  return (
    <div className='Container'>
      <Button text='Button 1'  />
      <Button text='Button 2'/>
      <Button text='Button 3' />
      <Button text='Button 4'/>
    </div>
  );
};

export default ParentComponent;
