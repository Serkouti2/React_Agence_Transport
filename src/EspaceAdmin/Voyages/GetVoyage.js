import React, { Component } from 'react'
import moment from 'moment';

export class GetVoyage extends Component {

  getID = ()=>{
    this.props.getID(this.props.row.id);
  }

  Supprimer = () =>{
    this.props.Supprimer(this.props.row.id);
  }
  render() {
    return (
        <tr>
        <td> {this.props.row.description} </td>
        <td>{this.props.row.duree}</td>
        <td>{this.props.row.villeDepart}</td>
        <td>{this.props.row.villeArrivee}</td>
        <td>{moment(this.props.row.date).format('YYYY-MM-DD')}</td>
        <td>{this.props.row.heureDepart}</td>
        <td>{this.props.row.heureArrivee}</td>
        <td>{this.props.row.type}</td>
        <td>{this.props.row.prix} DH</td>
        <td><button className='btn btn-warning' data-toggle="modal" data-target="#ModalModifierVoyage" onClick={this.getID}><i class="bi bi-pencil-square"></i>Modifier</button></td>
        <td><button className='btn btn-danger'  onClick={this.Supprimer}><i class="bi bi-trash"></i>Supprimer</button></td>
      </tr>
    )
  }
}

export default GetVoyage