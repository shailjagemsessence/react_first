import React, { Component } from 'react';
import _ from 'lodash';

export class Login extends Component {
  constructor(){
    super()
    this.state = {email: '', password: '', name: '' }
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.state.data = []
    this.state.editableId = null
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
    let record_id = Date.now()

    const editable_id = this.state.editableId
    if (editable_id) {
      let record = _.find(this.state.data, (o) => {
        if (o.id == editable_id) {
          o.name = this.state.name;
          o.email = this.state.email;
          o.password = this.state.password;
        }
      });
    } else {
      this.state.data.push({id: record_id, name: this.state.name, password: this.state.password, email: this.state.email});
    }

    this.setState({data: this.state.data, name: '', email: '', password: ''});
  }

  deleteEntry(record_id){
    _.remove(this.state.data, function(n) {
      return n.id == record_id;
    });
    this.setState({data: this.state.data});
  }

  editEntry(record_id){
    this.setState({editableId: record_id});
    let record = _.find(this.state.data, function(o) { return o.id === record_id });
    this.setState({name: record.name, email: record.email, password: record.password});
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
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {_.map(this.state.data, data1 => {
                return (<tr>
                  <td>{data1.id}</td>
                  <td>{data1.name}</td>
                  <td>{data1.email}</td>
                  <td>{data1.password}</td>
                  <td><button onClick={()=>this.editEntry(data1.id)}>Edit</button></td>
                  <td><button onClick={()=>this.deleteEntry(data1.id)}>Delete</button></td>
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
