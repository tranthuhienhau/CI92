import React, {useState} from 'react';


const Btn = () => {
    let [infor, setInfor] = useState({name:'', age:''})
    const handleClick = ()=>{
        let name =window.prompt("Enter name: ");
       
        while (!name) {
          alert('You do not enter name');
          name = window.prompt('Enter name again:'); 
        }
        let age = window.prompt("Enter age: ");
        while (!age) {
          alert('You do not enter age');
          name = window.prompt('Enter name again:'); 
          age = window.prompt('Enter age again:'); 
        }
        
        setInfor({ name, age });

    }
  return (
    <div>
       <button onClick={handleClick}>Add text</button>
        <h1>Thông tin người dùng: </h1>
        <p>Name: {infor.name}</p>
        <p>Age: {infor.age}</p>

    </div>
  )
}

export default Btn