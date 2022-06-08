import axios from 'axios'
import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import ModalAjouter from './ModalAjouter/ModalAjouter'
import ModalModifier from './ModalModifier/ModalModifier'

export class ShowAllVehicules extends Component {

    state = {
        Vehicules : [
         
        ],
        vehicule : ''
    }

     ///////////Methods API Client //////////////////


  ///////////Methods Get All Vehicules //////////////////
    getAllVehicules =async () =>{
        axios.get('http://127.0.0.1:8000/api/vehicules')
        .then((result) =>{
            this.setState({Vehicules:result.data.data})
        })
    }

    componentDidMount = () =>{
        this.getAllVehicules();
    }

    getID = (id) => {
        this.state.Vehicules.map(row=>{
            if(row.id==id)
            {
                this.setState({vehicule:row});
            }
        })
        console.log(this.state.vehicule);
    }

      ///////////Methods Ajouter Vehicules //////////////////

    Ajouter = (vehicule) =>{
        axios({
            url : 'http://127.0.0.1:8000/api/vehicules',
            method : 'POST',
            data : vehicule
        }).then((result) => {
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

        ///////////Methods Modifier Vehicules //////////////////

    Modifier = (vehicule,id) =>{
        axios({
            url : 'http://127.0.0.1:8000/api/vehicules/'+id,
            method : 'PUT',
            data : vehicule
        }).then((result) =>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Modifier Avec Succes',
                showConfirmButton: false,
                timer: 1500
              })
        }).catch((result) =>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result,
              })
        })
    }


      ///////////Methods Supprimer Vehicules //////////////////

    Supprimer = (id) =>{
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
              axios.delete('http://127.0.0.1:8000/api/vehicules/'+id)
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
    render() {

        const Columns = [
            {
                name : 'Matricule',
                selector : (row) => row.matricule
            },
            {
                name : 'Capacite',
                selector : (row)=>row.capacite
            },
            {
                name:'Modifier',
                selector : (row) =>
                <button className='btn btn-warning'  data-toggle="modal" data-target="#ModalModifierVehicule" onClick={()=>this.getID(row.id)}><i class="bi bi-pencil-square"></i>Modifier</button>
            },
            {
                name:'Supprimer',
                selector:(row)=>
                <button className='btn btn-danger' onClick={()=>this.Supprimer(row.id)}><i class="bi bi-trash"></i>Supprimer</button>
            }
        ]
        return (
            <div className='container'>
                <ModalAjouter Ajouter={this.Ajouter}/>
                <ModalModifier vehicule={this.state.vehicule} Modifier={this.Modifier}/>
                <div className='row '>
                    <div className='col-md-4 '>
                        <button className='btn btn-primary mt-3' data-toggle="modal" data-target="#ModalAjouterVehicule">
                            <i class="bi bi-person-plus-fill"></i>
                            Ajouter Vehicule</button>
                    </div>
                </div>

                <div>
                    <DataTable
                    columns={Columns}
                    data={this.state.Vehicules}
                    pagination
                    />
                </div>
            </div>
        )
    }
}

export default ShowAllVehicules