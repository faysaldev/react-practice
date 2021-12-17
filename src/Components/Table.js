import React, { Component } from 'react';
import ReactTable from 'react-table'

class Table extends Component {
    render() {

        const tableData=[{name:"Faysal",age:"15"},{name:"Faysal",age:"15"},{name:"Faysal",age:"15"},{name:"Faysal",age:"15"},{name:"Faysal",age:"15"},{name:"Faysal",age:"15"}];
        
        const col=[{Header:"Name",accessor:"name"},{Header:"Age",accessor:"age"}];

        return (
            <div>
              <ReactTable 
              data={tableData}
              columns={col}
              defaultPageSize={2}
              pageSizeOption={[2,4,6,8,10]}
              />  
            </div>
        );
    }
}

export default Table;