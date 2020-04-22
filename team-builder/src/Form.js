import React, {useState} from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';

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
      <div className="Member-List">
      <form className="form" onSubmit={submitMember}>

          <label htmlFor="member">Name</label>
          <input id="member" type="text" name="name" onChange={changes} placeholder="Name" value= {memberName.name} />
          

          <label htmlFor="occupation">Occupation</label>
          <input id="occupation" type="text" name="occupation" onChange={changes} placeholder="Occupation" value= {memberName.occupation} />
          

          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" onChange={changes} placeholder="Email" value= {memberName.email}/>
         <button type="submit">Submit</button>
      </form>

      <Container className="card">
          {props.members.map(member => (
              <div className="list" key={member.id}>
                
                <Card className="cards" >
                  <CardBody >
             
                  <CardTitle><h2>Name: {member.name}</h2></CardTitle>
                  <CardSubtitle><h3>Role: {member.occupation}</h3></CardSubtitle>
                  <CardSubtitle><h3>Email: {member.email}</h3></CardSubtitle>
              
                  </CardBody>
                </Card>
                
          </div>
          ))}
    </Container>

      </div>
    );
  }
  
  export default Form;
  