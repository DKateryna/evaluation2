import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddBatch from './components/AddBatch';
import BatchesList from './components/BatchesList';

class App extends Component {
  constructor(){
    super();
    this.state = {batches: [], nextBatchNumber: 1};
  }
  addBatch(){
    let newBatches = [...this.state.batches, {
      number: this.state.nextBatchNumber
    }];

    let state = {
      ...this.state,
      batches: newBatches,
      nextBatchNumber: this.state.nextBatchNumber + 1
    };

    this.setState(state);

  }
  render() {
    return (
      <div>
        <AddBatch onClick={() => this.addBatch()} />
        <BatchesList batches={this.state.batches} />
      </div>
    );
  }
}

export default App;
