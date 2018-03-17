import React, { Component } from 'react';
import _ from 'lodash';

export class Login extends Component {
  constructor(){
    super()
    this.state = {email: 'example@yopmail.com', password: '123456789', name: 'example' }
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state.data = [{email: 'examplesss@yopmail.com', password: '123456789sss', name: 'exampl' }]
  }
  changeName(e){
    this.setState({name: e.target.value});
  }

  changeEmail(e){
    this.setState({email: e.target.value});
  }

  changePassword(e){
    this.setState({password: e.target.value});
  }

  submitForm(e){
    e.preventDefault();
    this.state.data.push({name: this.state.name, password: this.state.password, email: this.state.email});
    this.setState({data: this.state.data});
  }

  render() {
    return (
      <div>
        name: {this.state.name} <br/>
        email: {this.state.email} <br/>
        password: {this.state.password} <br/>
        <br/>
        <br/>
        <form action="" >
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <label ><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name="name" value = {this.state.name} onChange={this.changeName} /> <br/>

            <label ><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.changeEmail}/> <br/>

            <label ><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" value={this.state.password} onChange={this.changePassword}/><br/>

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="text" placeholder="Repeat Password" name="psw-repeat" value={this.state.password}/><br/>
            <br/>


            <div className="clearfix">
              <button type="submit" className="signupbtn" onClick={this.submitForm}>Sign Up</button>
            </div>
          </div>
        </form>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {_.map(this.state.data, data1 => {
                return (<tr>
                  <td>{data1.name}</td>
                  <td>{data1.email}</td>
                  <td>{data1.password}</td>
                </tr>)
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}
