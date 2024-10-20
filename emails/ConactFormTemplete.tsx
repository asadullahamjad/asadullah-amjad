import React from 'react'
type contactEmailTempleteProps={
    name:string,
    email:string,
    message:string
}
function ConactFormTemplete({name,email,message}:contactEmailTempleteProps){
  return (
    <div>
      <h1>Contact form submission</h1>
      <p>
        From <strong>{name}</strong> at {email}
      </p>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  )
}

export default ConactFormTemplete
