import React, { Component } from 'react';


 class Batch extends Component {
   constructor(){
     super();
     this.state = {showStudents: false};
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
           <button onClick={() => this.props.addStudent(this.props.number, {name: 'Joen'})}>
            Add Student
          </button>
          <button onClick={() => this.toggleStudentList()}>Show students</button>
          {this.showStudents()}
       </li>
     )
   }
}
export default Batch;
