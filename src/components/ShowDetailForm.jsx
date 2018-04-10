import React from 'react';

const ShowDetailForm = (props) => (
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th>Address</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
          {props.data.map(function(d){
            return (<tr>
              <td>{d.address}</td>
              <td>{d.number}</td>
            </tr>)}
           )}
      </tbody>
    </table>
  </div>
)
export default ShowDetailForm;
