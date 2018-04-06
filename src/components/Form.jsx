import React from 'react';

const Form = (props) => (
  <form action="" >
    <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>

      <label ><b>Name</b></label>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value = {props.name}
        onChange={props.changeName}
      /> <br/>

      <label ><b>Email</b></label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        value={props.email}
        onChange={props.changeEmail}
      /> <br/>

      <label ><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        value={props.password}
        onChange={props.changePassword}
      /><br/>

      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="text" placeholder="Repeat Password" name="psw-repeat" value={props.password}/><br/>
      <br/>


      <div className="clearfix">
        <button
          type="submit"
          className="signupbtn"
          onClick={props.submitForm}
        >
          Sign Up
        </button>
      </div>
    </div>
  </form>
)
export default Form;
