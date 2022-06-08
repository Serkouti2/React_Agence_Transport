import React, { Component } from 'react'

export class ModalModifier extends Component {

    state = {
        matricule : '',
        capacite : 0
    }

    componentWillReceiveProps = (props) =>{
        this.setState({
            matricule : props.vehicule.matricule,
            capacite : props.vehicule.capacite
        })
    }

    handleChangeMatricule = (event) =>{
        this.setState({matricule:event.target.value});
    }

    handleChangeCapacite = (event) =>{
        this.setState({capacite:event.target.value});
    }

    Modifier = () =>{
        var objVehicule = {
            matricule : this.state.matricule,
            capacite : this.state.capacite
        }

        this.props.Modifier(objVehicule,this.props.vehicule.id)
    }
  render() {
    return (
        <div>
        {/* Modal */}
        <div className="modal fade" id="ModalModifierVehicule" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modifier Vehicule</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.handleSumbit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className=" mb-3">
                                        <label htmlFor="tx_nom" className="form-label" >Matricule</label>
                                        <input type='text' className='form-control' value={this.state.matricule} onChange={this.handleChangeMatricule} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className=" mb-3">
                                        <label htmlFor="tx_nom" className="form-label" >Capacite</label>
                                        <input type='number' className='form-control' value={this.state.capacite} onChange={this.handleChangeCapacite} />
                                    </div>
                                </div>

                            </div>
     
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.Modifier}>Modifier Vehicule</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default ModalModifier