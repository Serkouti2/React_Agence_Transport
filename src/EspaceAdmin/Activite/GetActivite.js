import React, { Component } from 'react'

export class GetActivite extends Component {

  getID = () =>{
    this.props.getID(this.props.row.id);
  }

  Supprimer = () =>{
    this.props.Supprimer(this.props.row.id);
  }
  render() {
    return (
      <tr>
          <td>{this.props.row.nom }</td>
          <td>{this.props.row.description}</td>
          <td>{this.props.row.prix}</td>
          <td><button className='btn btn-warning' data-toggle="modal" data-target="#ModalModifierActivite" onClick={this.getID}><i class="bi bi-pencil-square"></i>Modifier</button></td>
          <td><button className='btn btn-danger' onClick={this.Supprimer} ><i class="bi bi-trash"></i>Supprimer</button></td>
     
      </tr>
    )
  }
}

export default GetActivite