import React, { Component } from 'react'

export class AjouterActivite extends Component {

  state = {
    nom : '',
    description : '',
    prix:''
  }

  handleChangeNom = (event) =>{
    this.setState({nom:event.target.value})
  }

  handleChangeDescription = (event) =>{
    this.setState({description:event.target.value})
  }

  handleChangePrix = (event) =>{
    this.setState({prix:event.target.value})
  }

  Ajouter = () =>{
    var objActivite = {
      nom : this.state.nom,
      description : this.state.description,
      prix : this.state.prix
    };

    this.props.Ajouter(objActivite);

  }
  render() {
    return (
        <div>
  {/* Modal */}
  <div className="modal fade" id="ModalAjouterActivite" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ajouter Activite</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
        <form onSubmit={this.handleSumbit}>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Nom Activite</label>
                                                <input type="text" className="form-control"  aria-describedby="emailHelp" onChange={this.handleChangeNom} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Prix</label>
                                                <input type="text" className="form-control"  aria-describedby="emailHelp" onChange={this.handleChangePrix} />
                                            </div>
                                        </div>
                                      
                                    </div>
                                    <div className='row'>
                                    <div className='col-md-12'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Description</label>
                                                <textarea className='form-control' cols='3' onChange={this.handleChangeDescription}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                  
                                     


                                </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={this.Ajouter}>Ajouter Activite</button>
        </div>
      </div>
    </div>
  </div>
  </div>

  )

  }
}

export default AjouterActivite