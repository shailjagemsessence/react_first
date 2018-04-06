import React from 'react';
import Form from './Form' ;
import AddMoreDetails from './AddMoreDetails';
import _ from 'lodash';

class SignUp extends React.Component {
  constructor(){
    super()
    this.state = {email: '', password: '', name: '' , show_userdetail_form: false, title: 'Show'}
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.UserInformation = this.UserInformation.bind(this);
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

  UserInformation(){
    this.setState({show_userdetail_form: !this.state.show_userdetail_form});
    if(this.state.show_userdetail_form){
      this.setState({ title: "Hide" });
    }
    else{
      this.setState({ title: "Show" });
    }
  }

  render() {
    return (
      <div>
        <Form
          email={this.state.email}
          name={this.state.name}
          password={this.state.password}
          changeName={this.changeName}
          changeEmail={this.changeEmail}
          changePassword={this.changePassword}
          submitForm={this.submitForm}
        />
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
                  <td><button onClick={()=>this.UserInformation()}>{this.state.title}</button></td>
                </tr>)
                })
              }
            </tbody>
          </table>
          <AddMoreDetails
            name={this.state.name}  show_userdetail_form={this.state.show_userdetail_form}
          />
        </div>

      </div>
    );
  }
}

export default SignUp;
