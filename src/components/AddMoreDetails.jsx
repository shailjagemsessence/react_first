import React from 'react';
import _ from 'lodash';

class AddMoreDetails extends React.Component {
  constructor(){
    super()
    this.state = {address: '', number: ''}
    this.changeAddress = this.changeAddress.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state.data = []
  }
  changeAddress(e){
    this.setState({address: e.target.value});
  }
  changeNumber(e){
    this.setState({number: e.target.value});
  }
  submitForm(){
    this.state.data.push({address: this.state.address, number: this.state.number});
  }
  render() {
    if(this.props.show_userdetail_form == false){
      return null;
    }
    return (
      <div className="add_details">
      <h2>{this.props.name}</h2>
        <br/>
        <br/>
        <form>
          <div className="container">
            <h3>Add User Details</h3>
            <hr/>

            <label><b>Address</b></label>
            <input type="text" placeholder="Enter Your Address" name="address" value = {this.state.address} onChange={this.changeAddress} /> <br/>

            <label><b>Phone-Num</b></label>
            <input type="Number" placeholder="Enter MobNum" name="number" value={this.state.number} onChange={this.changeNumber}/> <br/>
            <br/>

            <div className="clearfix">
              <button type="submit" className="signupbtn" onClick={this.submitForm}>Sign Up</button>
              <button type="submit" onClick={this.props.UserInformation}>Hide</button>
            </div>
          </div>
        </form>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              <td>{this.state.data.address}</td>
              <td>{this.state.data.number}</td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AddMoreDetails;
