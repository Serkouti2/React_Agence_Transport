import axios from 'axios'
import React, { Component } from 'react'
import DataTable from 'react-data-table-component'

export class DataTableVehicules extends Component {

    state = {
        Vehicules : []
    }

    getAllVehiculesChauffeur =() =>{
        axios.get('http://127.0.0.1:8000/api/chauffeurs/'+this.props.id.id)
        .then(result=>{
            this.setState({Vehicules:result.data.data[0].vehicule});
            
        })
    }

    componentDidMount = () =>{
        this.getAllVehiculesChauffeur();
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
        }
       
    ]
    return (
      <div>
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

export default DataTableVehicules