import React, { Component } from 'react'

export class ModalModifier extends Component {

  constructor(props) {
    super(props);
     this.state = {
       id:'',
      nom:'',
      prenom: '',
      telephone: '',
      nationalite: ''

    }
  }
   
  componentWillReceiveProps(props){
    this.setState({
      id:props.client.id,
      nom: props.client.nom,
      prenom :  props.client.prenom,
      telephone: props.client.telephone,
      nationalite : props.client.nationalite

    });
  }

  handleChangeNom = (event) => {
    this.setState({nom:event.target.value});
  }

  handleChangePrenom = (event) => {
    this.setState({prenom:event.target.value});
  }

  handleChangeTelephone = (event) => {
    this.setState({telephone:event.target.value});
  }


  handleChangeNationalite = (event) => {
    this.setState({nationalite:event.target.value});
  }

  Modifier = () =>{
    var objClient = {
      nom:this.state.nom,
      prenom: this.state.prenom,
      telephone: this.state.telephone,
      email: this.state.email,
      nationalite: this.state.nationalite
    }
  
    this.props.Modifier(objClient,this.state.id);
  }
  render() {
    return (
        <div>
        {/* Modal */}
        <div className="modal fade" id="ModalModifierClient" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modifier Clien</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {/*Modal Body */}
              <div className="modal-body">
              <form>
                    <input type='hidden' value={this.state.id} />
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className=" mb-3">
                                <label htmlFor="tx_nom1" className="form-label">Nom</label>
                                <input type="text" className="form-control" value={this.state.nom} onChange={this.handleChangeNom} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className=" mb-3">
                                <label htmlFor="tx_prenom1" className="form-label">Prenom</label>
                                <input type="text" className="form-control" value={this.state.prenom} onChange={this.handleChangePrenom} />
                            </div>
                        </div>
                       
                    
                      
                    </div>
                    <div className='row'>
                    <div className='col-md-6'>
                            <div className=" mb-3">
                                <label htmlFor="tx_telephone1" className="form-label">Telephone</label>
                                <input type="text" className="form-control" value={this.state.telephone} onChange={this.handleChangeTelephone} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className=" mb-3">
                                <label htmlFor="tx_nationalite1" className="form-label">nationalite</label>
                                <input type="text" className="form-control" value={this.state.nationalite} onChange={this.handleChangeNationalite} />
                            </div>
                        </div>
                  
                    </div>
                   
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">cancel</button>
                <button type="button" className="btn btn-primary" id='btn_ajouterClient' onClick={this.Modifier}>Modifier Client</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalModifier