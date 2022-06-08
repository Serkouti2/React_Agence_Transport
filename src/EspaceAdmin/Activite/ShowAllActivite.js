import axios from 'axios'
import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import GetActivite from './GetActivite'
import AjouterActivite from './ModalAjouter/AjouterActivite'
import ModifierActivite from './ModalModifier/ModifierActivite'

export class ShowAllActivite extends Component {

    state = {
        Activites : [
            {id:1,nom:'nom',description:'Description',prix:30},
        ],
        activite : {},
        
    }

    
       ///////////Methods API Activites //////////////////


        ///////////Methods Get All Activites //////////////////
    getID = (id) =>{
        this.state.Activites.map(row=>{
            if(row.id==id)
            {
                this.setState({activite:row});
            }
        })

    }

    getAllActivites = () =>{
      axios.get('http://127.0.0.1:8000/api/activites')
      .then((result)=>{
        this.setState({Activites:result.data.data});
        console.log(result.data.data);
      })
    }
    componentDidMount(){
     this.getAllActivites();
    }

           ///////////Ajouter Activite //////////////////

    Ajouter = (activite) =>{
      axios({
        url : 'http://127.0.0.1:8000/api/activites',
        method : 'POST',
        data : activite
      }).then((result) =>{
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Ajouter Avec Succes',
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
    };

          ///////////Modifier Activite //////////////////

    Modifier = (activite,id) =>{
      axios({
        url : 'http://127.0.0.1:8000/api/activites/'+id,
        method : 'PUT',
        data : activite
       }).then((result) =>{
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Modifier Avec Succes',
          showConfirmButton: false,
          timer: 1500
      })
      }) .catch((result) =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result,
        })
      });
     
      }
    
          ///////////Supprimer Activite //////////////////

    Supprimer = (id) =>{
        Swal.fire({
          title: 'Voullez Vous Supprimer?',
          text: "Supprimer Voyage!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'oui!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios({
              url : 'http://127.0.0.1:8000/api/activites/'+id,
              method : 'DELETE',
    
            }).then(function(result){
               
         
            }).catch(function(result){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result,
              })
            })
            Swal.fire(
              'Supprimer!',
              'Le Voyage a Supprimer avec succes.',
              'success'
            )
          }
        })
    }
  render() {
    const Columns = [
      {
        name:'Nom',
        selector : (row) => row.nom
      },
      {
        name : 'Description',
        cell : (row) =>row.description
      },
      {
        name : 'Prix',
        selector : (row)=>row.prix + " DH"
      },
      {
        name:'Modifier',
        selector:(row)=>
          <button className='btn btn-warning' data-toggle="modal" data-target="#ModalModifierActivite" onClick={()=>this.getID(row.id)}><i class="bi bi-pencil-square"></i>Modifier</button>
      },
      {
        name:'Supprimer',
        selector:(row)=>
        <button className='btn btn-danger' onClick={()=>this.Supprimer(row.id)} ><i class="bi bi-trash"></i>Supprimer</button>
      }

    ]
    return (
        <div className='container '>
              <AjouterActivite Ajouter = {this.Ajouter}/>
           <ModifierActivite  activite={this.state.activite}  Modifier = {this.Modifier}/>
       
        <div className='row '>
          <div className='col-md-4 '>
        <button className='btn btn-primary mt-3' data-toggle="modal" data-target="#ModalAjouterActivite">
        <i class="bi bi-person-plus-fill"></i>
          Ajouter Activite</button>
        </div>
        </div>
        <div className='row'>
{/*           
        <table className='table table-dark text-center  mt-3'>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Descripton</th>
            <th scope="col">Prix</th>
            <th scope="col">Modifier</th>
            <th scope="col">Supprimer</th>
          </tr>

          {this.state.Activites.map(row=>{
             return <GetActivite getID = {this.getID} row={row} Supprimer = {this.Supprimer}/>
          })}       
        </table> */}
          <DataTable 
          columns={Columns}
          data={this.state.Activites}
          pagination
          />
        </div>
      </div>
    )
  }
}

export default ShowAllActivite