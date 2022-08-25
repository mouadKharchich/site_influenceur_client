import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import Login from '../Login/Login'
import Register from '../Register/Register'
import VerifierEmail from '../VerifierEmail/VerifierEmail'
import ConfimerEmail from '../ConfimerEmail/ConfimerEmail'
import CompeleteProfil from '../CompeleteProfil/CompeleteProfil'
import ConfirmConditionGenerale from '../ConfirmConditionGenerale/ConfirmConditionGenerale'
import Admin from '../Dashboard/Admin'
import ProfilInfluenceur from '../ProfilInfluenceur/ProfilInfluenceur'
import ConfirmInstagram from '../ConfimerInstagram/ConfirmInstagram'
import Client from '../Dashboard/Tables/Client'
import ViewClient from '../Dashboard/Tables/ViewClient'
import EditClient from '../Dashboard/Tables/EditClient'
import AddClient from '../Dashboard/Tables/AddClient'

function Routers() {
  return (
   <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/register/verifierEmail' element={<VerifierEmail />} />
          <Route path='/register/confirmEmail' element={<ConfimerEmail/>} />
          <Route path='/register/confirmInstagram' element={<ConfirmInstagram/>} />
          <Route path='/register/completeProfil' element={<CompeleteProfil/>} />
          <Route path='/register/conditionGenrale' element={<ConfirmConditionGenerale/>} />
          <Route path='/dashboard/home' element={<Admin/>} />

          <Route path='/dashboard/client' element={<Client/>} />
          <Route path='/dashboard/client/view/:id' element={<ViewClient/>} />
          <Route path='/dashboard/client/edit/:id' element={<EditClient/>} />
          <Route path='/dashboard/client/add' element={<AddClient/>} />

          <Route path='/profil' element={<ProfilInfluenceur/>} />
        </Routes>
     </BrowserRouter>
  )
}

export default Routers