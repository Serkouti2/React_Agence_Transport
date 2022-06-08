import axios, { Axios } from 'axios'
import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import GetClient from './GetClient'
import ModalClient from './ModalAjouter/ModalClient'
import ModalModifier from './ModalModifier/ModalModifier'
export class ShowAllClients extends Component {


  state = {
    objClient: {},
    clients: [
      { id: 1, nom: 'Anass', prenom: 'serkouti', telephone: '011111', nationalite: 'Marocaine', email: 'anasskech300@gmail.com' },
      { id: 2, nom: 'Anass', prenom: 'serkouti', telephone: '011111', nationalite: 'Marocaine', email: 'anasskech300@gmail.com' },
      { id: 3, nom: 'Anass', prenom: 'serkouti', telephone: '011111', nationalite: 'Marocaine', email: 'anasskech300@gmail.com' },
      { id: 4, nom: 'Anass', prenom: 'serkouti', telephone: '011111', nationalite: 'Marocaine', email: 'anasskech300@gmail.com' },
      { id: 5, nom: 'Anass', prenom: 'serkouti', telephone: '011111', nationalite: 'Marocaine', email: 'anasskech300@gmail.com' },
      { id: 6, nom: 'Anass', prenom: 'serkouti', telephone: '011111', nationalite: 'Marocaine', email: 'anasskech300@gmail.com' },
      { id: 7, nom: 'Anass', prenom: 'serkouti', telephone: '011111', nationalite: 'Marocaine', email: 'anasskech300@gmail.com' },

    ]
  }

  ///////////Method Recherche Client //////////////////

  handleModifier = (id) => {
    this.state.clients.map(row => {
      if (row.id == id) {
        this.setState({ objClient: row });

      }
    })

  }

  ///////////Methods API Client //////////////////


  ///////////Methods Get All Client //////////////////

  getAllClients = async () => {


    await axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/clients`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },

    })
      .then((result) => {
        const getClients = result.data;
        console.log(result.data.data);
        this.setState({ clients: getClients.data });

      })
  }
  componentDidMount() {
    this.getAllClients();
  }
  ///////////Method Ajouter Client //////////////////
   Ajouter = async (client) => {
    // var clients = this.state.clients;
    // clients.push(client);
    // this.setState({clients:clients});
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/clients",
      data: client,
      config: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    }).then((request) => {


      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Ajouter Avec Succes',
        showConfirmButton: false,
        timer: 1500
      });
      
     
     
    }).catch((request)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }).finally(()=> {
      var Clients =[];
      Clients = this.state.Clients;
      Clients.push(client);
      this.setState({Clients:Clients});
     
    })
  }
 
  ///////////Method Modifier Client //////////////////

  Modifier = async (client, id) => {
   await axios({
      url: 'http://127.0.0.1:8000/api/clients/' + id,
      method: 'PUT',
      data: client,
      config: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    }).then(function (result) {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Modifier Avec Succes',
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(function (result) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }).finally(function () {
      this.getAllClients();

    })
  }

  ///////////Method Supprimer Client //////////////////

  Supprimer =async (id) => {

    Swal.fire({
      title: 'Voullez Vous Supprimer?',
      text: "Supprimer Client!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('http://127.0.0.1:8000/api/clients/' + id)
          .then(function (result) {

            Swal.fire(
              'Supprimer!',
              'Le Client a Supprimer avec succes.',
              'success'
            )
          })

      }
    })

  }
  render() {
   
    const Columns = [
      {
        name: "Nom",
        selector: (row) => row.nom
      },
      {
        name: "Prenom",
        selector: (row) => row.prenom
      },
      {
        name: "Nationalite",
        selector: (row) => row.nationalite
      },
      {
        name: "Telephone",
        selector: (row) => row.telephone
      },
      {
        name: "Modifier",
        cell: (row) => (
          <button className='btn btn-warning' data-toggle="modal" data-target="#ModalModifierClient" onClick={() => this.handleModifier(row.id)}><i class="bi bi-pencil-square"></i>Modifier</button>
        )
      },
      {
        name: "Modifier",
        cell: (row) => (
          <button className='btn btn-danger'  onClick={()=>this.Supprimer(row.id)} ><i class="bi bi-trash"></i>Supprimer</button>
        )
      },

      
    ]
    return (
      <div className='container '>
         <ModalClient Ajouter={this.Ajouter} />
            <ModalModifier client={this.state.objClient} Modifier={this.Modifier} />
        <div className='row '>
          <div className='col-md-4 '>
           
            <button className='btn btn-primary mt-3' data-toggle="modal" data-target="#ModalAjouterClient">
              <i class="bi bi-person-plus-fill"></i>
              Ajouter Client</button>
          </div>
        </div>
        <div className='row'>
            {/* <table className='table  table-hover mt-3'>
          <tr>
            <th scope="col">nom</th>
            <th scope="col">prenom</th>
            <th scope="col">telephone</th>
            <th scope="col">nationalite</th>
            <th scope="col">modifier</th>
            <th scope="col">supprimer</th>
          </tr> */}
            {/*           
            {this.state.clients.map((row)=>{
               return <GetClient row={row}  ShowClient={this.handleModifier} Supprimer={this.Supprimer}/>
            })
            } */}
            {/* </table> */}
            <DataTable
              columns={Columns}
              data={this.state.clients}
              pagination
            />




        </div>
      </div>
    )
  }
}

export default ShowAllClients