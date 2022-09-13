import React from 'react';
import TableRow from './TableRow';

const UserTable = ({data,setData}) => {
   
    const handleRemove=(key)=>{
         const _data=data.filter(item=>item.key !==key)
         setData(_data)

    }

  
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Age</th>
        <th>Due</th>
        <th>Gender</th>
        <th>isUser</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  


  {data.map((row, i)=>(
    <TableRow key={row.key} row={row} index={i} data={data} setData={setData} handleRemove={handleRemove} />
  ))}
      
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserTable;