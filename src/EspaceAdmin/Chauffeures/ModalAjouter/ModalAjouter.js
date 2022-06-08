import axios from 'axios'
import React, { Component } from 'react'

export class ModalAjouter extends Component {


    state = {
        nom: '',
        prenom: '',
        telephone: '',
        nationalite: '',
        email: '',
        vehicule : ''
    }



    handleChangeNom = (event) => {

        this.setState({ nom: event.target.value });
    }
    handleChangePrenom = (event) => {
        this.setState({ prenom: event.target.value });

    }
    handleChangeTelephone = (event) => {
        this.setState({ telephone: event.target.value });
    }

    handleChangeNationalite = (event) => {
        this.setState({ nationalite: event.target.value });
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangeVehicule = (event) => {
        this.setState({ vehicule: event.target.value });
    }

    Ajouter = () => {
        var objChauffeur = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            telephone: this.state.telephone,
            nationalite: this.state.nationalite,
            email: this.state.email,
            vehicule: this.state.vehicule
        }

        this.props.Ajouter(objChauffeur);
    }
    render() {
        return (
            <div>

                {/* Modal */}
                <div className="modal fade" id="ModalAjouterChauffeur" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Ajouter Chauffeur</h5>
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
                                                <label htmlFor="tx_nom" className="form-label">Nom</label>
                                                <input type="text" className="form-control" id="tx_nom" aria-describedby="emailHelp" onChange={this.handleChangeNom} />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_prenom" className="form-label">Prenom</label>
                                                <input type="text" className="form-control" id="tx_prenom" aria-describedby="emailHelp" onChange={this.handleChangePrenom} />
                                            </div>
                                        </div>



                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_telephone" className="form-label">Telephone</label>
                                                <input type="text" className="form-control" id="tx_telephone" aria-describedby="emailHelp" onChange={this.handleChangeTelephone} />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nationalite" className="form-label">nationalite</label>
                                                <input type="text" className="form-control" id="tx_nationalite" aria-describedby="emailHelp" onChange={this.handleChangeNationalite} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_telephone" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="tx_telephone" aria-describedby="emailHelp" onChange={this.handleChangeEmail} />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label className="form-label">Vehicule</label>
                                                <select className='form-control' onChange={this.handleChangeVehicule}>
                                                    {this.props.vehicules.map(row => {
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
                                <button type="button" className="btn btn-primary" id='btn_ajouterClient' onClick={this.Ajouter}>Ajouter Chauffeur</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalAjouter