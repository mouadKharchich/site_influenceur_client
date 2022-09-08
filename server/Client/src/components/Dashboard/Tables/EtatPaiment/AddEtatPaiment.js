import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addEtatPaiment } from '../../../../redux/actions/etatPaiment.actions';
import {getAllInfluenceur} from '../../../../redux/actions/influenceur.actions';
import {getAllCampagne} from '../../../../redux/actions/campagne.actions';

function AddEtatPaiment() {
 const dispatch=useDispatch();

 const [inputValue,setInputValue]=useState({
  "campagneId":"",
  "influenceurId":"",
  "tarif":"",
  "dateReglement":""
 });

 const {allInfluenceurData}=useSelector(state=>state.influenceur);
 const {allCampagneData}=useSelector(state=>state.campagne);

 useEffect(()=>{
  getAllInfluenceur(dispatch);
  getAllCampagne(dispatch);
 },[])
  const handleChange=(e)=>{
      e.preventDefault();
      setInputValue({...inputValue,[e.target.name]:e.target.value})
  }

  const handleAdd=(event)=>{
   event.preventDefault();
   console.log(inputValue)
   addEtatPaiment(inputValue,dispatch);
  }


  return (
    <div className="container-fluid px-4">
     <div className="container mt-5 w-75 mb-5">
       <div className="row">
         <div className="col-md-12">
             <div className="card">
                 <div className="card-header">
                     <h4>Etat Paiment Add 
                         <a href="/dashboard/etatPaiment" className="btn btn-danger float-end">BACK</a>
                     </h4>
                 </div>
                 <div className="card-body">
                 <form onSubmit={(e)=>handleAdd(e)}> 
               
                     <div className="mb-3">
                        <label className='mb-2'>CampagneID: </label>
                        <select 
                              name="campagneId"
                              className='form-control'
                              onChange={(e)=>handleChange(e)}
                            >
                              <option value="" className="text-muted">Veuillez CampagneID</option>
                              {
                                allCampagneData?.map((ele,index)=>{
                                  return <option key={index} value={ele.id}>{ele.id}</option>    
                                })
                              }
                        </select>
                     </div>

                     <div className="mb-3">
                        <label className='mb-2'>InfluenceurID: </label>
                        <select 
                              name="influenceurId"
                              className='form-control'
                              onChange={(e)=>handleChange(e)}
                            >
                              <option value="" className="text-muted">Veuillez InfluenceurID</option>
                              {
                                allInfluenceurData?.map((ele,index)=>{
                                  return <option key={index} value={ele.id}>{ele.id}</option>    
                                })
                              }
                        </select>
                     </div>

                  

                     <div className="mb-3">
                       <label htmlFor="dateReglement">Date Reglement: </label>
                        <input 
                         name="dateReglement"
                         id="dateReglement" 
                         type="date"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>

                     <div className="mb-3">
                       <label htmlFor="tarif">Tarif: </label>
                        <input 
                         name="tarif"
                         id="tarif" 
                         type="tarif"
                         className="form-control" 
                         onChange={(e)=>handleChange(e)}
                        />
                     </div>
                     
                     <div className="mb-3">         
                       <button type="submit"  className="btn btn-primary">
                         Add EtatPaiment
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

export default AddEtatPaiment