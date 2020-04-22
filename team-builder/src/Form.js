import React, {useState} from 'react';

function Form(props) {
  const [memberName, setMemberName] = useState({
      name: '', 
      occupation: '',
      email: '',
    })  
   
  const changes = event => {
      setMemberName({...memberName, [event.target.name]: event.target.value})
  }

const submitMember = event => {
    event.preventDefault();
    props.addNewMember(memberName);
    setMemberName({name: '', occupation: '', email: ''})
}



    return (
      <form onSubmit={submitMember}>

          <label htmlFor="member">Name</label>
          <input id="member" type="text" name="name" onChange={changes} placeholder="Name" value= {memberName.name} />
          

          <label htmlFor="occupation">Occupation</label>
          <input id="occupation" type="text" name="occupation" onChange={changes} placeholder="Occupation" value= {memberName.occupation} />
          

          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" onChange={changes} placeholder="Email" value= {memberName.email}/>
         <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default Form;
  