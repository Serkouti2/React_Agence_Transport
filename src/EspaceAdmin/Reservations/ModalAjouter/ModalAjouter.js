import React, { Component } from 'react'

export class ModalAjouter extends Component {

    state = {
        client_id: '',
        voyage_id: '',
        date : '',
        nombrePlace : 0
    };

    handleChangeClient = (event) =>{
        this.setState({client_id:event.target.value});
    }

    handleChangeVoyage = (event) =>{
        this.setState({voyage_id:event.target.value});
    }

    handleChangeDate = (event) =>{
        this.setState({date:event.target.value});
    }

    handleChangeNombrePlace = (event) =>{
        this.setState({nombrePlace:event.target.value});
    }

    Ajouter = () => {
      var  objReservation = {
        client_id : this.state.client_id,
        voyage_id : this.state.voyage_id,
        date : this.state.date,
        nombrePlace : this.state.nombrePlace
        }
        console.log(objReservation);
        this.props.Ajouter(objReservation);
    }
    render() {
        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="ModalAjouterReservation" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ajouter Reservation</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleSumbit}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label" >Client</label>
                                                <select className='form-control' onChange={this.handleChangeClient}>
                                                    <option selected={true}>Select Client....</option>

                                                    {this.props.reservations.map(row=>{
                                                        return  <option value={row.client.id}>{row.client.nom}</option>
                                                    })}
                                                   
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Voyage</label>
                                                <select className='form-control' onChange={this.handleChangeVoyage}>
                                                <option selected={true}>Select Voyage....</option>
                                                {this.props.reservations.map(row=>{
                                                        return  <option value={row.voyage.id}>{row.voyage.nom}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Date</label>
                                                <input type='date' className='form-control' onChange={this.handleChangeDate}/>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Nombre De Place</label>
                                                <input type='number' className='form-control' onChange={this.handleChangeNombrePlace} />
                                            </div>
                                        </div>
                                    </div>




                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.Ajouter}>Ajouter Resrvation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ModalAjouter