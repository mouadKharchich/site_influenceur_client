import React, { useEffect, useState } from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { deleteClient, getAllClient } from '../../../../redux/actions/client.actions';

function Table({name,fieldsTable}) {
  const dispatch=useDispatch();
  const [q,setQ]=useState("");
  const {allClientData,loading}=useSelector(state=>state.client);
  useEffect(() => {
    getAllClient(dispatch); 
  }, []);
 
  

  const handleDelete=(event,id)=>{
    deleteClient(id,dispatch)

  }

  const search=(rows)=>{
    return rows.filter(
      (row)=>
         row.id==parseInt(q) ||
         row.nomSociete.toLowerCase().indexOf(q.toLowerCase())>-1 ||
         row.nomDirecteur.toLowerCase().indexOf(q.toLowerCase())>-1 ||
         row.telephone.toLowerCase().indexOf(q.toLowerCase())>-1 ||
         row.email.toLowerCase().indexOf(q.toLowerCase())>-1 
             
      )
  }

  return (
   <div className="container-fluid px-4">

   <div className="row my-5">
     
        <div className='card-hearder mb-3'>
          <h4>{name} Table
             <a href={`/dashboard/client/add`} className='btn btn-primary float-end'>+ add Client</a>
          </h4>
        </div>

        <div className='card-hearder mb-3'>
         <input 
         className='p-1 form-control w-25' 
         placeholder='search ..'
         value={q}
         onChange={(e)=>setQ(e.target.value)}
         />
        </div>
  
      <div className="col">
          <table className="table bg-white rounded shadow-sm  table-hover">
            <thead>
                  <tr className="text-center">
                  <th scope="col" className='text-warning'width="50">ID</th>
                     {
                       fieldsTable.map((ele,index)=>{
                         return <th key={index} scope="col">{ele}</th>
                        })
                     }
                   <th scope='col'>Actions</th>
                  </tr>
              </thead>
              <tbody>
              { search(allClientData)?.map((ele,index)=>{
                  return (<tr key={index+1} className="text-center">
                      <td key={index+1} className="text-warning">{
                        ele.id<10 
                        ?"0"+ele.id
                        : ele.id
                      }</td>
                      <td>{ele.nomSociete}</td>
                      <td>{ele.nomDirecteur}</td>   
                      <td>{ele.telephone}</td>   
                      <td>{ele.email}</td>   
                      <td scope="col" width="150">
                      <a href={`/dashboard/client/view/${ele.id}`} className="text-success" style={{fontSize:"16px",marginRight:"10px"}}>view</a>
                      <a href={`/dashboard/client/edit/${ele.id}`}  className="text-warning" style={{fontSize:"18px",marginRight:"10px"}}><AiFillEdit/></a>
                      <a className="text-danger" style={{fontSize:"18px"}} onClick={(event)=>handleDelete(event,ele.id)}><AiFillDelete/></a>
                      </td>
                  </tr>)
                })
              }
              </tbody>
          </table>
      </div>
   </div>
  
   </div>
  )
}

export default Table