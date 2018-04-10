import React from 'react';

const Form = (props) => (
  <div class="container">
    <h2>Sign Up</h2>
    <form class="form-horizontal" action="" >
      <div class="form-group">
        <label class="control-label col-md-4"><b>Name</b></label>
        <div class="col-md-8">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value = {props.name}
            onChange={props.changeName}
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-md-4"><b>Email</b></label>
        <div class="col-sm-8">
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={props.email}
            onChange={props.changeEmail}
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-md-4"><b>Password</b></label>
        <div class="col-md-8">
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={props.password}
            onChange={props.changePassword}
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-md-4" htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <div class="col-md-8">
          <input
            type="text"
            placeholder="Repeat Password"
            name="psw-repeat"
            value={props.password}
          />
        </div>
      </div>


        <div className="clearfix">
          <button
            type="submit"
            className="signupbtn"
            onClick={props.submitForm}
          >
            Sign Up
          </button>
        </div>
    </form>
  </div>
)
export default Form;
