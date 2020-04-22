import React, {useState} from 'react';

function Member(props) {
    
  
    return (
      <div className="Member-List">
          {props.members.map(member => (
              <div className="list" key={member.id}>
                  <h2>Name: {member.name}</h2>
          <h3>Role: {member.occupation}</h3>
          <h3>Email: {member.email}</h3>
          </div>
          ))}
    
        
      </div>
    );
  }
  
  export default Member;
  