import axios from 'axios'
import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import ModalAjouter from './ModalAjouter/ModalAjouter'
import ModalModifier from './ModalModifier/ModalModifier'

export class ShowAllReservations extends Component {

  state = {
    Reservations : [
      {client : 'Anas',voyage : 'Ourika',nombrePlace : 5,date : '20/20/2012'},
      {client : 'Anas',voyage : 'Ourika',nombrePlace : 5,date : '20/20/2012'},
      {client : 'Anas',voyage : 'Ourika',nombrePlace : 5,date : '20/20/2012'},
      {client : 'Anas',voyage : 'Ourika',nombrePlace : 5,date : '20/20/2012'},
      {client : 'Anas',voyage : 'Ourika',nombrePlace : 5,date : '20/20/2012'},

    ],
    reservation : ''
  }

  getAllReservations  = ()=>{
     axios.get('http://127.0.0.1:8000/api/reservations')
    .then((result)=>{
      this.setState({Reservations:result.data.data})
      // console.log(result.data.data[0].client.nom);
    })
  }

   componentDidMount = async () =>{
    this.getAllReservations();
  }

  getID = (id) => {
    this.state.Reservations.map(row=>{
      if(row.id==id)
      {
        this.setState({reservation:row});
        console.log(this.state.reservation);
      }
    })
  }
  Ajouter =(reservation) =>{
    axios({
      url : 'http://127.0.0.1:8000/api/reservations',
      method : 'POST',
      data: reservation
    }).then((result) =>{
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Ajouter Avec Succes',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch((result) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result,
      })
    })
  }

  Supprimer =  (id) => {
    Swal.fire({
      title: 'Voullez Vous Supprimer?',
      text: "Supprimer Reservation!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('http://127.0.0.1:8000/api/reservations/'+id)
        .then(function(result){
          Swal.fire(
            'Supprimer!',
            'Le Voyage a Supprimer avec succes.',
            'success'
          )
     
        }).catch(function(result){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: result,
          })
        })
       
      }
    })
  }

  Modifier = (reservation,id) => {
    axios({
      url : 'http://127.0.0.1:8000/api/reservations/'+id,
      method:'PUT',
      data:reservation
    }).then((result) =>{
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Ajouter Avec Succes',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch((result)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result,
      })
    })
  }
  render() {
    const Columns = [
      {
        name: 'Client',
        selector : (row)=>row.client.nom
      },
      {
        name: 'Voyage',
        selector : (row)=>row.voyage.nom

      },
      {
        name: 'Nombre De Place',
        selector : (row)=>row.nombrePlace

      },
      {
        name: 'Date',
        selector : (row)=>row.date

      },
      {
        name : 'Modifier',
        selector : (row)=>
        <button className='btn btn-warning' data-toggle="modal" data-target="#ModalModifierReservation" onClick={()=>this.getID(row.id)}>Modifier</button>
      },
      {
        name : 'Modifier',
        selector : (row)=>
        <button className='btn btn-danger' onClick={()=>this.Supprimer(row.id)}>Modifier</button>
      }
    ]
    return (
        <div className='container '>
            <ModalAjouter  reservations={this.state.Reservations} Ajouter={this.Ajouter}/>
            <ModalModifier reservations={this.state.Reservations} reservation={this.state.reservation} Modifier={this.Modifier}/>
          <div className='row'>
            <div className='col-sm-12'>
           </div>
          </div>
        <div className='row '>
          <div className='col-md-4'>
        
        <button className='btn btn-primary mt-3' data-toggle="modal" data-target="#ModalAjouterReservation">
        <i class="bi bi-person-plus-fill"></i>
          Ajouter Activite</button>
        </div>
        </div>
        <div className='row'>
{/*           
        <table className='table table-dark text-center  mt-3'>
          <tr>
            <th scope="col">Nombre De Places</th>
            <th scope="col">Date</th>
            <th scope="col">Client</th>
            <th scope="col">Voyage</th>
            <th scope="col">Modifier</th>
            <th scope="col">Supprimer</th>
          </tr>
        </table> */}
          
          <DataTable 
          columns={Columns}
          data ={this.state.Reservations}
          pagination
          />
        </div>
      </div>
    )
  }
}

export default ShowAllReservations