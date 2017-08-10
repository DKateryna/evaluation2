import React from 'react';


 function BatchesList(props) {
  // const batches = ['batch#1', 'batch#2'];
  const batches = props.batches;
  const BatchesList = batches.map(batch =>
    <li>
      Batch #{batch.number} from: {batch.startDate} to: {batch.endDate}
    </li>
  );
  return(
    <ul>
      {BatchesList}
    </ul>
  )
}
export default BatchesList;
