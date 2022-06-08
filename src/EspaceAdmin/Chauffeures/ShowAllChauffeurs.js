import axios from 'axios'
import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import ModalAjouter from './ModalAjouter/ModalAjouter'
import AjouterVehicule from './ModalAjouterVehicule/AjouterVehicule'
import ModalModifier from './ModalModifier/ModalModifier'

export class ShowAllChauffeurs extends Component {

    state = {
        Chauffeurs: [
            // { nom: 'Anass', prenom: 'serkouti', nationalite: 'maroc', telephone: 222222, email: 'anass@gmail.com',matricule : 1111 },
            // { nom: 'Anass', prenom: 'serkouti', nationalite: 'maroc', telephone: 222222, email: 'anass@gmail.com' ,matricule : 1111},
            // { nom: 'Anass', prenom: 'serkouti', nationalite: 'maroc', telephone: 222222, email: 'anass@gmail.com' ,matricule : 1111},
            // { nom: 'Anass', prenom: 'serkouti', nationalite: 'maroc', telephone: 222222, email: 'anass@gmail.com' ,matricule : 1111}

        ],
        Chauffeur: '',

        vehicules : []
    }

    getallVehicules = () =>{
        axios.get('http://127.0.0.1:8000/api/vehicules')
        .then((result)=>{
            this.setState({vehicules:result.data.data})

        })

    }

    getAllChauffeurs = () => {
        axios.get('http://127.0.0.1:8000/api/chauffeurs')
            .then((result) => {
                this.setState({ Chauffeurs: result.data.data })
            })
    }

    componentDidMount = () => {
        this.getAllChauffeurs();
        this.getallVehicules();
    }

    getID = (id) =>{
        this.state.Chauffeurs.map(row=>{
            if(row.id==id)
            {
                this.setState({Chauffeur:row});
            }
        })
    }
    Ajouter = (chauffeur) => {
        axios({
            url: 'http://127.0.0.1:8000/api/chauffeurs',
            method: 'POST',
            data: chauffeur
        }).then((result) => {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Ajouter Avec Succes',
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((result) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })
    }

    Modifier = (reservation,id) => {
        axios({
          url : 'http://127.0.0.1:8000/api/chauffeurs/'+id,
          method:'PUT',
          data:reservation
        }).then((result) =>{
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Modifier Avec Succes',
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
            axios.delete('http://127.0.0.1:8000/api/chauffeurs/'+id)
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

      AjouterVehicule = (obj_Chauffeur_vehicule,chauffeur_id) =>
      {
        axios({
            url: 'http://127.0.0.1:8000/api/chauffeur/'+chauffeur_id+'/vehicule/add',
            method: 'POST',
            data: obj_Chauffeur_vehicule
        }).then((result) => {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Ajouter Avec Succes',
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((result) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })
      }
    render() {

        const Columns = [
            {
                name: 'Nom',
                selector: (row) => row.nom
            },
            {
                name: 'Prenom',
                selector: (row) => row.prenom
            },
            {
                name: 'Nationalite',
                selector: (row) => row.nationalite
            },
            {
                name: 'Telephone',
                selector: (row) => row.telephone
            },
            {
                name: 'Email',
                cell: (row) => row.email
            },
            {
                name : 'Vehicule',
                cell : (row)=><Link className='btn btn-success' to={{pathname:`/chauffeur/vehicules/${row.id}`}}>Vehicule</Link>
            },
            {
                name: 'Ajouter Vehicule',
                cell: (row) =>
                    <button className='btn btn-secondary' data-toggle="modal" data-target="#ModalAjouterVehicule" onClick={() => this.getID(row.id)} ><i class="bi bi-plus"></i>Ajouter Vehicule</button>
            },
            {
                name: 'Modifier',
                cell: (row) =>
                    <button className='btn btn-warning' data-toggle="modal" data-target="#ModalModifierChauffeur" onClick={() => this.getID(row.id)}><i class="bi bi-pencil-square"></i>Modifier</button>
            },
            {
                name: 'Supprimer',
                cell: (row) =>
                    <button className='btn btn-danger' onClick={() => this.Supprimer(row.id)}><i class="bi bi-trash"></i>Supprimer</button>

            }
        ]

        {            console.log(this.state.Chauffeurs)
        }
        return (
            
            <div className='container'>
                <ModalAjouter Ajouter={this.Ajouter} vehicules={this.state.vehicules}/>
                <ModalModifier vehicules={this.state.vehicules}  chauffeur={this.state.Chauffeur} Modifier={this.Modifier}/>
                <AjouterVehicule chauffeur={this.state.Chauffeur} vehicules = {this.state.vehicules} AjouterVehicule={this.AjouterVehicule}/>
                <div className='row '>
                    <div className='col-md-4 '>
                        <button className='btn btn-primary mt-3' data-toggle="modal" data-target="#ModalAjouterChauffeur">
                            <i class="bi bi-person-plus-fill"></i>
                            Ajouter Chauffeur</button>
                    </div>
                </div>

                <div>
                        <DataTable
                        columns={Columns}
                        data={this.state.Chauffeurs}
                        pagination

                    />
                </div>
            </div>
        )
    }
}

export default ShowAllChauffeurs