import React, {useState} from 'react';
import './App.css';
import Form from './Form';




function App() {
  const [members, setMembers] = useState([
    {
        id:0,
        name: 'Shantel',
        occupation: 'Web Developer',
        email: 'Just-Me@gmail.com',
    },
  
  ]
  
  ) 
const addNewMember = member => {
  const newMember = {
    id:Date.now(),
    name:member.name,
    occupation:member.occupation,
    email: member.email,
  }
  setMembers([...members, newMember])
}

  return (
    <div className="App">

      <h1>Coding Members</h1>
     
      <Form addNewMember={addNewMember} members={members}/>
    </div>
  );
}

export default App;
