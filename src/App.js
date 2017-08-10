import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddBatch from './components/AddBatch';
import BatchesList from './components/BatchesList';
import API from './api/index';

class App extends Component {
  constructor(){
    super();
    this.evaluationsService = new API().service('evaluations');

    this.evaluationsService.find().then(page => {
      this.setState(page.data[0]);
    });
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
    this.evaluationsService.update(state._id, state).then(() => {
      this.evaluationsService.find()
      .then(page => {
          this.setState(page.data[0]);
          }
      );}
    ).catch(error => {
      console.error('Error updating state!', error)
    });
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
