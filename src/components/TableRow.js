import React, { useState } from 'react';

const TableRow = ({row,handleRemove,data,setData, index}) => {
    const [error,setError]=useState('')
    // const [age,setAge]=useState(row?.age)
    const handleChange=(value, i)=>{
        if(value<=0){
            setError("Field shou")
        }
        const _data = [...data];
        _data[i].age = value;



        //  setAge(e.target.value)
        //  const remaining=data.filter(item=>item.key !==row.key)
        //  const editAbleUser=data.find(item=>item.key ===row.key)
        //  const property=e.target.name 
        //  editAbleUser[property]=e.target.value 
        //  const _data=[...remaining,editAbleUser]
         setData(_data)
         localStorage.setItem('userdata',JSON.stringify(_data))

        
  
    }
    console.log(data,"check")
    return (
        <tr >
        <th className='w-[20%]'>{row?.key}</th>
        <td className='w-[20%]'><input name='age' value={row?.age} onChange={(e) => handleChange(e?.target?.value,index)} type="text"  /></td>
        <td className='w-[20%]'>{row.dues}</td>
        <td className='w-[20%]'>{row.gender}</td>
        <td className='w-[20%]'>{row.isUser?<span className='text-green-600 font-bold '>Yes</span>:<span className='text-red-600 font-bold'>No</span>}</td>
        <td className='w-[20%]'><button onClick={()=>handleRemove(row.key)} className='btn btn-error btn-xs bg-red-500 text-white font-semibold'>Delete</button></td>
      </tr> 
    );
};

export default TableRow;