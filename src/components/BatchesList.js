import React from 'react';
import Batch from './Batch';


 function BatchesList(props) {
  const batches = props.batches;
  const BatchesList = batches.map(batch =>
    <Batch {...batch} addStudent={props.addStudent} />
  );
  return(
    <ul>
      {BatchesList}
    </ul>
  )
}
export default BatchesList;
