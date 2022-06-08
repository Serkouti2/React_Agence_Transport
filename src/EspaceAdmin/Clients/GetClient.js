import React, { Component } from 'react'

export class GetClient extends Component {
    constructor(props){
        super(props)
    }

    handleModifier = (event) => {
      this.props.ShowClient(this.props.row.id);
    }

    handleSupprimer = () =>{
      this.props.Supprimer(this.props.row.id);
      console.log('hi');
    }
  render() {
    return (
        <tr>
        <td> {this.props.row.nom} </td>
        <td>{this.props.row.prenom}</td>
        <td>{this.props.row.telephone}</td>
        <td>{this.props.row.nationalite}</td>
        <td><button className='btn btn-warning' data-toggle="modal" data-target="#ModalModifierClient" onClick={this.handleModifier}><i class="bi bi-pencil-square"></i>Modifier</button></td>
        <td><button className='btn btn-danger'  onClick={this.handleSupprimer}><i class="bi bi-trash"></i>Supprimer</button></td>
      </tr>
    )
  }
}

export default GetClient