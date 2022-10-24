// Codigo para visualizar os funcionarios
import React, { Component } from 'react';
import ClienteService from '../services/ClienteService.js';
class ViewClienteComponent extends Component {
constructor(props) {
super(props)
this.state = {
id: this.props.match.params.id,
cliente: {}
}
}
componentDidMount(){
ClienteService.getClienteById(this.state.id).then( res => {
this.setState({cliente: res.data});
})
}
render() {
return (
<div>
<br></br>
<div className = "card col-md-6 offset-md-3">
<h3 className = "text-center"> Dados do Cliente</h3>
<div className = "card-body">
<div className = "row">
<label> Primeiro Nome: </label>
<div> { this.state.cliente.primeiroNome }</div>
</div>
<div className = "row">
<label> Último Nome: </label>
<div> { this.state.cliente.ultimoNome }</div>
</div>
<div className = "row">
<label> E-mail: </label>
<div> { this.state.cliente.emailId }</div>
</div>
</div>
</div>
</div>
)
}
}
export default ViewClienteComponent