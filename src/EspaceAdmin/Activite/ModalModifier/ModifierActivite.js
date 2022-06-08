import React, { Component } from 'react'

export class ModifierActivite extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            nom : '',
            description : '',
            prix : ''
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            id : props.activite.id,
            nom : props.activite.nom,
            prix : props.activite.prix,
            description : props.activite.description
        })
    }

    handleChangeNom = (event) =>{
        this.setState({nom:event.target.value});
    }

    handleChangeDescription = (event) =>{
        this.setState({description:event.target.value});
    }

    handleChangePrix = (event) =>{
        this.setState({prix:event.target.value});
    }

    Modifier = () =>{
        var objActivite = {
            nom : this.state.nom,
            description : this.state.description,
            prix : this.state.prix
        };
        this.props.Modifier(objActivite,this.state.id);
    }
  render() {

    console.log(this.props.activite);
    return (
        <div>
        <div className="modal fade" id="ModalModifierActivite" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
               <div className="modal-dialog" role="document">
                   <div className="modal-content">
                       <div className="modal-header">
                           <h5 className="modal-title">Modifier Activite</h5>
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">×</span>
                           </button>
                       </div>
                       {/*body Modal*/}
                       <div className="modal-body">
                           <form onSubmit={this.handleSumbit}>
                           <div className='row'>
                                        <div className='col-md-8'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Nom Activite</label>
                                                <input type="text" className="form-control" value={this.state.nom}  onChange={this.handleChangeNom} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Prix</label>
                                                <input type="number" className="form-control" value={this.state.prix} onChange={this.handleChangePrix} />
                                            </div>
                                        </div>
                                      
                                    </div>
                                    <div className='row'>
                                    <div className='col-md-12'>
                                            <div className=" mb-3">
                                                <label htmlFor="tx_nom" className="form-label">Description</label>
                                                <textarea className='form-control' value={this.state.description} cols='3' onChange={this.handleChangeDescription}></textarea>
                                            </div>
                                        </div>
                                    </div>
                       </form>
                       </div>
                       <div className="modal-footer">
                           <button type="button" className="btn btn-secondary" data-dismiss="modal">cancel</button>
                           <button type="button" className="btn btn-primary" id='btn_ajouterClient' onClick={this.Modifier}>Modifier Activite</button>
                       </div>
                   </div>
               </div>
           </div>
 </div>
    )
  }
}

export default ModifierActivite