import React, { Component } from 'react'

export class AjouterVoyage extends Component {

    state = {
        description: "",
        duree: 0,
        villeDepart: "",
        villeArrivee: "",
        date: "",
        heureDepart: "",
        heureArrivee: "",
        type: "Tour",
        prix: 0,
    }

    handleChangeDescription = (event) =>{
        this.setState({description:event.target.value});
    }

    handleChangeDuree = (event) =>{
        this.setState({duree:event.target.value});
    }

    handleChangeVilleDepart = (event) =>{
        this.setState({villeDepart:event.target.value});
    }

    handleChangeVilleArrivee = (event) =>{
        this.setState({villeArrivee:event.target.value});
    }

    handleChangeDate = (event) =>{
        this.setState({date:event.target.value});
    }

    handleChangeHeureDepart = (event) =>{
        this.setState({heureDepart:event.target.value});
    }

    handleChangeHeureArrivee = (event) =>{
        this.setState({heureArrivee:event.target.value});
    }

    handleChangeType = (event) =>{
        this.setState({type:event.target.value});
    }

    handleChangePrix = (event) =>{
        this.setState({prix:event.target.value});
    }

    Ajouter = () =>{
        var objVoyage = {
        description: this.state.description,
        duree:parseInt(this.state.duree),
        villeDepart: this.state.villeDepart,
        villeArrivee: this.state.villeArrivee,
        date: this.state.date,
        heureDepart: this.state.heureDepart,
        heureArrivee: this.state.heureArrivee,
        type: this.state.type,
        prix:parseFloat(this.state.prix),
        }
        this.props.Ajouter(objVoyage);
    }
    render() {
        return (
            <div>

                {/* Modal */}
                <div className="modal fade" id="ModalAjouterVoyage" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Ajouter Voyage</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            {/*body Modal*/}
                            <div className="modal-body">
                                <form onSubmit={this.handleSumbit}>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Ville Depart</label>
                                                <input type="text" className="form-control"  aria-describedby="emailHelp"  onChange={this.handleChangeVilleDepart}/>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_prenom" className="form-label">Ville Arrivee</label>
                                                <input type="text" className="form-control" aria-describedby="emailHelp" onChange={this.handleChangeVilleArrivee} />
                                            </div>
                                        </div>


                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_telephone" className="form-label">Date</label>
                                                <input type="date" className="form-control"  aria-describedby="emailHelp" onChange={this.handleChangeDate} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_email" className="form-label">Heure Depart</label>
                                                <input type="email" className="form-control"  aria-describedby="emailHelp"  onChange={this.handleChangeHeureDepart}/>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nationalite" className="form-label">Heure Arrivee</label>
                                                <input type="text" className="form-control"  aria-describedby="emailHelp" onChange={this.handleChangeHeureArrivee} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nationalite" className="form-label">Type</label>
                                                <select className='form-control' onChange={this.handleChangeType}>
                                                    <option value='Tour'>Tour</option>
                                                    <option value='Excurtion'>Excurtion</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='row'>
                                    <div className='col-4'>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Duree Voyage</label>
                                                <input type="number" className="form-control" id="tx_nationalite" aria-describedby="emailHelp" onChange={this.handleChangeDuree} />

                                            </div>

                                        </div>
                                        <div className='col-4'>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Prix Voyage</label>
                                                <input type="number" className="form-control" id="tx_nationalite" aria-describedby="emailHelp" onChange={this.handleChangePrix} />

                                            </div>

                                        </div>
                                    </div>

                                    <div className='row'>
                                    <div className='col-12'>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Description Voyage</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleChangeDescription}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">cancel</button>
                                <button type="button" className="btn btn-primary" id='btn_ajouterClient' onClick={this.Ajouter}>Ajouter Voyage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AjouterVoyage