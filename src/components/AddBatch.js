import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class AddBatch extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
  }

  setStartDate(date) {
      this.setState({
        ...this.state,
        startDate: date
      });
  }
  setEndDate(date) {
      this.setState({
        ...this.state,
        endDate: date
      });
  }

  render() {
    return (
      <div>
        Start date: <DatePicker selected={this.state.startDate} onChange={this.setStartDate} />
         End date: <DatePicker  selected={this.state.endDate} onChange={this.setEndDate}/>
          <button onClick={() => this.props.onClick(this.state.startDate, this.state.endDate)}>Add New Batch</button>
      </div>
    )
  }
}
export default AddBatch;
