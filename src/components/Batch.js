import React, { Component } from 'react';


 class Batch extends Component {
   render(){
     return(
       <li>
         Batch #{this.props.number} from: {this.props.startDate} to: {this.props.endDate}
         <button onClick={() => this.props.addStudent(this.props.number, {name: 'Joen'})}>Add Student</button>
       </li>
     )
   }
}
export default Batch;
