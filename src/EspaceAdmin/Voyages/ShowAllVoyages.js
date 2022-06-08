import axios from 'axios'
import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import GetVoyage from './GetVoyage'
import AjouterVoyage from './ModalAjouter/AjouterVoyage'
import ModifierVoyage from './ModalModifier/ModifierVoyage'
export class ShowAllVoyages extends Component {

    state = {
        Voyages : [
            {id:'1',description:'Voyage',duree:3,villeDepart:'Marrakesh',villeArrivee:'Essaouira',date:'2021-06-07',heureDepart:'12:00',heureArrivee:'20:00',type:'Excurtion',prix:1200},
            {id:'2',description:'Voyage',duree:3,villeDepart:'Marrakesh',villeArrivee:'Essaouira',date:'2020-04-04',heureDepart:'12:00',heureArrivee:'20:00',type:'Excurtion',prix:1200},

        ],
        Voyage : {}
    }

     ///////////Method Recherche Voyage //////////////////

     getID = (id) =>{
      this.state.Voyages.map(row => {
          if(row.id == id )
          {
              this.setState({Voyage:row});
          }
      })
      console.log(this.state.Voyage);
  }

       ///////////Methods API Voyages //////////////////


        ///////////Methods Get All Voyages //////////////////

    getAllVoyages = () => {
      axios.get(`http://127.0.0.1:8000/api/voyages`)
      .then((result) => {
        const getVoyages = result.data;
        this.setState({Voyages:getVoyages.data});
  
      })
    }

    componentDidMount() {
      this.getAllVoyages();
    }
    
///////////Method Ajouter Voyage //////////////////

    Ajouter = (voyage) =>{
      axios({
        method :  "POST",
        url : "http://127.0.0.1:8000/api/voyages",
        data : voyage,
        config: { headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }} 
      }).then(function(result){
  
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Ajouter Avec Succes',
          showConfirmButton: false,
          timer: 1500
        })
        
      }).catch(function(result){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result,
        })
      }).finally(function(){
        this.getAllVoyages();
      })

    }

    ///////////Method Modifier Voyage //////////////////

    Modifier = (voyage,id) =>{
      console.log(voyage);
      axios({
        url : 'http://127.0.0.1:8000/api/voyages/'+id,
        method:'PUT',
        data:voyage,
        config: { headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }} 
      }).then(function(result){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Modifier Avec Succes',
          showConfirmButton: false,
          timer: 1500
        });
      }).catch(function(result){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result,
        })
      })
    }

    ///////////Method Supprimer Voyage //////////////////

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
          axios.delete('http://127.0.0.1:8000/api/voyages/'+id)
          .then(function(result){
             
       
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
      console.log(id);
    }
  render() {

    const Columns = [
      {
        name : 'Description',
        cell : (row) => row.description
      },
      {
        name : 'VilleDepart',
        selector : (row) => row.villeDepart
      },
      {
        name : 'VilleArrivee',
        selector : (row) => row.villeArrivee
      },
      {
        name : 'Duree',
        selector : (row) => row.duree+"Jour(s)"
      },
      {
        name : 'Date',
        selector : (row) => row.date
      },
      {
        name : 'HeureDepart',
        selector : (row) => row.heureDepart
      },
      {
        name : 'HeureArrivee',
        selector : (row) => row.heureArrivee
      },
      {
        name : 'TypeVoyage',
        selector : (row) => row.type
      },
      {
        name : 'Prix',
        selector : (row) => row.prix+" DH"
      },
      {
        name : 'Modifier',
        cell : (row) =>
        <button className='btn btn-warning' data-toggle="modal" data-target="#ModalModifierVoyage" onClick={()=>this.getID(row.id)}><i class="bi bi-pencil-square"></i>Modifier</button>
      },
      {
        name:'Supprimer',
        cell:(row)=>
        <button className='btn btn-danger'  onClick={()=>this.Supprimer(row.id)}><i class="bi bi-trash"></i>Supprimer</button>
      }
    ]
    return (
        <div className='container'>
            <AjouterVoyage Ajouter={this.Ajouter}/>
            <ModifierVoyage voyage={this.state.Voyage} Modifier={this.Modifier}/>
        <div className='row '>
          <div className='col-md-4 '>
          
        <button className='btn btn-primary mt-3' data-toggle="modal" data-target="#ModalAjouterVoyage">
        <i class="bi bi-person-plus-fill"></i>
          Ajouter Voyage</button>
        </div>
        </div>
        <div className='row'>
     
          
        {/* <table className='table table-dark text-center  mt-3'>
          <tr>
            <th scope="col">Descripton</th>
            <th scope="col">Duree</th>
            <th scope="col">VilleDepart</th>
            <th scope="col">VilleArrivee</th>
            <th scope="col">Date</th>
            <th scope="col">HeureDepart</th>
            <th scope="col">HeureArrivee</th>
            <th scope="col">Type</th>
            <th scope="col">Prix</th>
            <th scope="col">Modifier</th>
            <th scope="col">Supprimer</th>


          </tr>
          
           
          {this.state.Voyages.map((row)=>{
               return <GetVoyage row={row}  getID={this.getID}  Supprimer={this.Supprimer}/>
            })
            }
        
        </table> */}
        <DataTable 
        columns={Columns}
        data={this.state.Voyages}
        pagination
        
        />
          
        
        </div>
      </div>
    )
  }
}

export default ShowAllVoyages