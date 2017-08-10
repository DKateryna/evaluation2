import React, { Component } from 'react';


 class Batch extends Component {
   constructor(){
     super();
     this.state = {
       showStudents: false,
       showStudentInput: false
     };

    this.setName = this.setName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event){
    this.props.addStudent(this.props.number, {name: this.state.name});
    this.setState({...this.state, name: ''});
    event.preventDefault();
   }

   setName(event){
     this.setState({...this.state, name: event.target.value});
   }

   showStudentInput(){
     if(!this.state.showStudentInput) return '';
     return(
       <form onSubmit={this.handleSubmit}>
         <label>
           Name:
           <input type="text" name="name" value={this.state.name} onChange={this.setName} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     )
   }

   toggleStudentInput(){
     this.setState({
       ...this.state,
       showStudentInput: !this.state.showStudentInput
     })
   }

   showStudents(){
     if(!this.state.showStudents) return '';
     const studentsList = this.props.students.map((student) =>
      <li>
        {student.name}
      </li>
      )

     return (
       <ol>
          {studentsList}
       </ol>
     )
   }

   toggleStudentList(){
     this.setState({
       ...this.state,
       showStudents: !this.state.showStudents
     })
   }

   render(){
     return(
       <li>
         Batch #{this.props.number} from: {this.props.startDate} to: {this.props.endDate}
          students in the batch {this.props.students.length}
          <button onClick={() => this.toggleStudentInput()}>Add Student</button>
          <button onClick={() => this.toggleStudentList()}>Show students</button>
          {this.showStudentInput()}
          {this.showStudents()}
       </li>
     )
   }
}
export default Batch;
