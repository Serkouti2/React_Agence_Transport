import axios from 'axios';
import React, { Component } from 'react'
import Swal from 'sweetalert2';
import swal from 'sweetalert2';
window.Swal = swal;
export class modalClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      telephone: '',
      nationalite: '',
    }
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


  handlAjouter = () => {
    var objClient = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      telephone: this.state.telephone,
      nationalite: this.state.nationalite
    }
    this.props.Ajouter(objClient);
  }

  render() {
    return (
      <div>

        {/* Modal */}
        <div className="modal fade" id="ModalAjouterClient" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ajouter Clien</h5>
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
                        <input type="text" className="form-control" value={this.state.nom} id="tx_nom" aria-describedby="emailHelp" onChange={this.handleChangeNom} />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className=" mb-3">
                        <label htmlFor="tx_prenom" className="form-label">Prenom</label>
                        <input type="text" className="form-control" value={this.state.prenom} id="tx_prenom" aria-describedby="emailHelp" onChange={this.handleChangePrenom} />
                      </div>
                    </div>


                   
                  </div>
                  <div className='row'>
                  <div className='col-md-6'>
                      <div className=" mb-3">
                        <label htmlFor="tx_telephone" className="form-label">Telephone</label>
                        <input type="text" className="form-control" value={this.state.telephone} id="tx_telephone" aria-describedby="emailHelp" onChange={this.handleChangeTelephone} />
                      </div>
                    </div>
                   
                    <div className='col-md-6'>
                      <div className=" mb-3">
                        <label htmlFor="tx_nationalite" className="form-label">nationalite</label>
                        <input type="text" className="form-control" value={this.state.nationalite} id="tx_nationalite" aria-describedby="emailHelp" onChange={this.handleChangeNationalite} />
                      </div>
                    </div>

                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">cancel</button>
                <button type="button" className="btn btn-primary" id='btn_ajouterClient' onClick={this.handlAjouter}>Ajouter client</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default modalClient