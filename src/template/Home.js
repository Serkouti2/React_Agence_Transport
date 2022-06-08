import React, { Component } from 'react'
import {BrowserRouter as  Router,Routes,Route } from 'react-router-dom';
import ShowAllActivite from '../EspaceAdmin/Activite/ShowAllActivite';
import ShowVehicule from '../EspaceAdmin/Chauffeures/Chauffeur-Vehicule/ShowVehicule';
import ShowAllChauffeurs from '../EspaceAdmin/Chauffeures/ShowAllChauffeurs';
import ShowAllClients from '../EspaceAdmin/Clients/ShowAllClients';
import ShowAllReservations from '../EspaceAdmin/Reservations/ShowAllReservations';
import ShowAllVehicules from '../EspaceAdmin/Vehicules/ShowAllVehicules';
import ShowAllVoyages from '../EspaceAdmin/Voyages/ShowAllVoyages';
import SlideNav from './SlideNav';
export class Home extends Component {
  render() {
    return (
      <Router>
    <div className="App">
       <SlideNav />
    </div>

    <Routes>
      <Route path='/clients' element={<ShowAllClients />} />
      <Route path='/voyages' element={<ShowAllVoyages />} />
      <Route path='/activite' element={<ShowAllActivite />}/>
      <Route path='/reservation' element={<ShowAllReservations />}/>
      <Route path='/vehicule' element={<ShowAllVehicules/>} />
      <Route path='/chauffeur' element={<ShowAllChauffeurs />}/>
      <Route path='/chauffeur/vehicules/:id' element={<ShowVehicule />} />
    </Routes>
    </Router>
    )
  }
}

export default Home