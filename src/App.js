import React, { Component } from 'react';
import './App.css';
import AddBatch from './components/AddBatch';
import BatchesList from './components/BatchesList';
import API from './api/index';

class App extends Component {
  constructor(){
    super();
    this.addStudent = this.addStudent.bind(this);
    this.evaluationsService = new API().service('evaluations');

    this.evaluationsService.find().then(page => {
      this.setState(page.data[0]);
    });
    this.state = {batches: [], nextBatchNumber: 1};
  }

  find(batches, number){
    return batches.find(batch => batch.number === number);
  }

  findNot(batches, number){
    return batches.filter(batch => batch.number !== number);
  }

  addStudent(batchNumber, student){
    const batches = this.state.batches;
    const batch = this.find(batches, batchNumber);
    const newStudents = [...batch.students, student];
    const newBatch = {...batch, students: newStudents};
    const newBatches = [...this.findNot(batches, batchNumber), newBatch];
    const newState = {...this.state, batches: newBatches};

    this.persistState(newState);
  }

  persistState(state){
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

  addBatch(startDate, endDate){
    let newBatches = [...this.state.batches, {
      startDate: startDate,
      endDate: endDate,
      number: this.state.nextBatchNumber,
      students: []
    }];

    let state = {
      ...this.state,
      batches: newBatches,
      nextBatchNumber: this.state.nextBatchNumber + 1
    };

    this.persistState(state);
  }

  render() {
    return (
      <div>
        <AddBatch onClick={(startDate, endDate) => this.addBatch(startDate, endDate)} />
        <BatchesList batches={this.state.batches} addStudent={this.addStudent}/>
      </div>
    );
  }
}

export default App;
