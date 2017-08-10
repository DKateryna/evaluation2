import React from 'react';
import ReactDOM from 'react-dom';

class AddBatch extends React.Component{
  render() {
    return (
      <button onClick={ this.props.onClick }>Add New Batch</button>
    )
  }
}
export default AddBatch;
