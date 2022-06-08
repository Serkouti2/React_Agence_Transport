import moment from 'moment';
import React, { Component } from 'react'

export class ModifierVoyage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:0,
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
    }

    componentWillReceiveProps(props){
        this.setState({
            id:props.voyage.id,
            description: props.voyage.description,
            duree: props.voyage.duree,
            villeDepart: props.voyage.villeDepart,
            villeArrivee: props.voyage.villeArrivee,
            date: props.voyage.date,
            heureDepart: props.voyage.heureDepart,
            heureArrivee: props.voyage.heureArrivee,
            type: props.voyage.type,
            prix: props.voyage.prix,
        })
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

    Modifier = () =>{
        //var date = new Date(this.state.date);
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
            this.props.Modifier(objVoyage,this.state.id);
        }
    render() {
        {console.log(this.state.date)}
        return (
            <div>
                <div className="modal fade" id="ModalModifierVoyage" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modifier Voyage</h5>
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
                                                <input type="text" className="form-control" value={this.state.villeDepart} aria-describedby="emailHelp" onChange={this.handleChangeVilleDepart} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_prenom" className="form-label">Ville Arrivee</label>
                                                <input type="text" className="form-control" value={this.state.villeArrivee} aria-describedby="emailHelp" onChange={this.handleChangeVilleArrivee} />
                                            </div>
                                        </div>


                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_telephone" className="form-label">Date Voyage</label>
                                                <input type="date" className="form-control" value={moment(this.state.date).format('YYYY-MM-DD')} aria-describedby="emailHelp" onChange={this.handleChangeDate} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_email" className="form-label">Heure Depart</label>
                                                <input type="email" className="form-control" value={this.state.heureDepart} aria-describedby="emailHelp" onChange={this.handleChangeHeureDepart} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nationalite" className="form-label">Heure Arrivee</label>
                                                <input type="text" className="form-control" value={this.state.heureArrivee} aria-describedby="emailHelp" onChange={this.handleChangeHeureArrivee} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nationalite" className="form-label">Type</label>
                                                <select className='form-control' value={this.state.type} onChange={this.handleChangeType} >
                                                    <option value='Tour'>Tour</option>
                                                    <option value='Excurtion'>Excurtion</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='row'>

                                        <div className='col-md-4'>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Duree Voyage</label>
                                                <input type="number" className="form-control" value={this.state.duree} aria-describedby="emailHelp" onChange={this.handleChangeDuree} />

                                            </div>
                                            </div>

                                            <div className='col-md-4'>
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Prix Voyage</label>
                                                    <input type="number" className="form-control" value={this.state.prix} aria-describedby="emailHelp" onChange={this.handleChangePrix} />

                                                </div>
                                            </div>

                                        
                                    </div>

                                    <div className='row'>
                                        <div className='col-12'>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Description Voyage</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" value={this.state.description}  rows="3" onChange={this.handleChangeDescription}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">cancel</button>
                                <button type="button" className="btn btn-primary" id='btn_ajouterClient' onClick={this.Modifier}>Modifier Voyage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModifierVoyage