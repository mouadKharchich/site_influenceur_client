import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { addClient } from '../../../redux/actions/client.actions';

function AddClient() {
 const dispatch=useDispatch();

 const [clientInputValue,setClientInputValue]=useState({
  "id":"",
  "nomSociete":"",
  "pays":"",
  "ville":"",
  "quartier":"",
  "codePostal":"",
  "telephone":"",
  "email":""
 });

  const handleChange=(e)=>{
      e.preventDefault();
      setClientInputValue({...clientInputValue,[e.target.name]:e.target.value})
  }

  const handleAdd=(event)=>{
   event.preventDefault();
   addClient(clientInputValue,dispatch);
  }


  return (
    <div className="container-fluid px-4">
     <div className="container mt-5 w-75 mb-5">
       <div className="row">
         <div className="col-md-12">
             <div className="card">
                 <div className="card-header">
                     <h4>Client View Details 
                         <a href="/dashboard/client" className="btn btn-danger float-end">BACK</a>
                     </h4>
                 </div>
                 <div className="card-body">
                 <form onSubmit={(e)=>handleAdd(e)}> 
                     <div className="mb-3">
                       <label htmlFor="nomSociete">nom societe: </label>
                        <input 
                         name="nomSociete"
                         id="nomSociete" 
                         type="text"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>
                      
                     <div className="mb-3">
                       <label htmlFor="pays">pays: </label>
                        <input 
                         name="pays"
                         id="pays" 
                         type="text"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>

                     <div className="mb-3">
                       <label htmlFor="ville">ville: </label>
                        <input 
                         name="ville"
                         id="ville" 
                         type="text"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>

                     <div className="mb-3">
                       <label htmlFor="quartier">quartier: </label>
                        <input 
                         name="quartier"
                         id="quartier" 
                         type="text"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>

                     <div className="mb-3">
                       <label htmlFor="codePostal">code postal: </label>
                        <input 
                         name="codePostal"
                         id="codePostal" 
                         type="text"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>

                     <div className="mb-3">
                       <label htmlFor="nomDirecteur">nom directeur: </label>
                        <input 
                         name="nomDirecteur"
                         id="nomDirecteur" 
                         type="text"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>

                     <div className="mb-3">
                       <label htmlFor="telephone">telephone: </label>
                        <input 
                         name="telephone"
                         id="telephone" 
                         type="text"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>

                     <div className="mb-3">
                       <label htmlFor="email">email: </label>
                        <input 
                         name="email"
                         id="email" 
                         type="text"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>

                     <div className="mb-3">         
                       <button type="submit"  className="btn btn-primary">
                         Add Client
                       </button>
                     </div>

                 </form>
                                 
                 </div>
             </div>
         </div>
     </div>
    </div>
  </div>
  )
}

export default AddClient