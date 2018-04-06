import React from 'react';

class AddMoreDetails extends React.Component {
  constructor(){
    super()
    this.state = {address: '', number: ''}
    this.changeAddress = this.changeAddress.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
  }
  changeAddress(e){
    this.setState({address: e.target.value});
  }
  changeNumber(e){
    this.setState({number: e.target.value});
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
        <form action="" >
          <div className="container">
            <h1>Add User Details</h1>
            <hr/>

            <label><b>Address</b></label>
            <input type="text" placeholder="Enter Your Address" name="address" value = {this.state.address} onChange={this.changeAddress} /> <br/>

            <label><b>Phone-Num</b></label>
            <input type="Number" placeholder="Enter MobNum" name="number" value={this.state.number} onChange={this.changeNumber}/> <br/>
            <br/>

            <div className="clearfix">
              <button type="submit" className="signupbtn" onClick={this.submitForm}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMoreDetails;
