// Criar a pagina para adicionar e alterar um funcionario
import React, { Component } from 'react';
import ClienteService from '../services/ClienteService.js';
class CreateClienteComponent extends Component {
constructor(props) {
super(props)
this.state = {
id: this.props.match.params.id,
primeiroNome: '',
ultimoNome: '',
emailId: ''
}
this.changePrimeiroNomeHandler = this.changePrimeiroNomeHandler.bind(this);
this.changeUltimoNomeHandler = this.changeUltimoNomeHandler.bind(this);
this.saveOrUpdateCliente = this.saveOrUpdateCliente.bind(this);
this.changeEmailHandler = this.changeEmailHandler.bind(this);
}
componentDidMount(){
if(this.state.id === '_add'){
return
}else{
ClienteService.getClienteById(this.state.id).then( (res) =>{
let cliente = res.data;
this.setState({primeiroNome: cliente.primeiroNome,
ultimoNome: cliente.ultimoNome,
emailId : cliente.emailId
});
});
}
}
saveOrUpdateCliente = (e) => {
e.preventDefault();let cliente = {primeiroNome: this.state.primeiroNome, ultimoNome: this.state.ultimoNome, emailId:
this.state.emailId};
console.log('cliente => ' + JSON.stringify(cliente));
if(this.state.id === '_add'){
ClienteService.createCliente(cliente).then(res =>{
this.props.history.push('/cliente');
});
}else{
ClienteService.updateCliente(cliente, this.state.id).then( res => {
this.props.history.push('/cliente');
});
}
}
changePrimeiroNomeHandler= (event) => {
this.setState({primeiroNome: event.target.value});
}
changeUltimoNomeHandler= (event) => {
this.setState({ultimoNome: event.target.value});
}
changeEmailHandler= (event) => {
this.setState({emailId: event.target.value});
}
cancel(){
this.props.history.push('/cliente');
}
getTitle(){
if(this.state.id === '_add'){
return <h3 className="text-center">Inserir Cliente</h3>
}else{
return <h3 className="text-center">Alterar Dados Cliente</h3>
}
}
render() {
return (
<div>
<br></br>
<div className = "container">
<div className = "row">
<div className = "card col-md-6 offset-md-3 offset-md-3">
{
this.getTitle()
}
<div className = "card-body">
<form>
<div className = "form-group">
<label> Primeiro Nome: </label>
<input placeholder="Primeiro Nome" name="primeiroNome" className="formcontrol"
value={this.state.primeiroNome}
onChange={this.changePrimeiroNomeHandler}/>
</div>
<div className = "form-group">
<label> Último Nome: </label>
<input placeholder="Ultimo Nome" name="ultimoNome" className="form-control"
value={this.state.ultimoNome} onChange={this.changeUltimoNomeHandler}/>
</div>
<div className = "form-group">
<label> E-mail: </label>
<input placeholder="Email" name="emailId" className="form-control"
value={this.state.emailId} onChange={this.changeEmailHandler}/>
</div>
<button className="btn btn-success"
onClick={this.saveOrUpdateCliente}>Salvar</button>
<button className="btn btn-danger" onClick={this.cancel.bind(this)}
style={{marginLeft: "10px"}}>Cancelar</button>
</form>
</div>
</div>
</div>
</div>
</div>
)
}
}
export default CreateClienteComponent