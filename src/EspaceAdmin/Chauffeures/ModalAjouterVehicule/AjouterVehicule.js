import React, { Component } from 'react'

export class AjouterVehicule extends Component {

    state = {
        nomChauffeur : '',
        idvehicule : '',
        vehicules : []
    }

    componentWillReceiveProps = (props) =>{
        this.setState({
            nomChauffeur : props.chauffeur.nom+' '+props.chauffeur.prenom,      
            vehicules : props.vehicules
        })
    }

    handleChangeVehicule = (event) =>{
        this.setState({idvehicule:event.target.value});
       
    }

    Ajouter = () =>{
       var obj_Chauffeur_vehicule = {
            'vehicule' : this.state.idvehicule
        }
        this.props.AjouterVehicule(obj_Chauffeur_vehicule,this.props.chauffeur.id);
    }
  render() {
    return (
        <div>
        {/* Modal */}
        <div className="modal fade" id="ModalAjouterVehicule" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ajouter Vehicule</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    {/*body Modal*/}
                    <div className="modal-body">
                        <form onSubmit={this.handleSumbit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className=" mb-3">
                                        <label htmlFor="tx_nom" className="form-label"> Chauffeur</label>
                                        <input type="text" className="form-control" readOnly value={this.state.nomChauffeur}  />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className=" mb-3">
                                        <label htmlFor="tx_prenom" className="form-label">Vehicule</label>
                                        <select className='form-control' onChange={this.handleChangeVehicule}>
                                            <option>select vehicule ...</option>
                                           { this.state.vehicules.map(row=>{
                                              return <option value={row.id}>{row.matricule}</option>
                                           })}
                                        </select>
                                    </div>
                                </div>



                            </div>
                         

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">cancel</button>
                        <button type="button" className="btn btn-primary"  onClick={this.Ajouter}>Ajouter </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default AjouterVehicule