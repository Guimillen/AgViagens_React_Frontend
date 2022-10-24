// Componente para listar os funcionarios
import React, { Component } from 'react';
import ClienteService from '../services/ClienteService.js';
class ListClienteComponent extends Component {
constructor(props) {
super(props)
this.state = {
cliente: []
}
this.addCliente = this.addCliente.bind(this);
this.editCliente = this.editCliente.bind(this);
this.deleteCliente = this.deleteCliente.bind(this);
}
deleteCliente(id){
ClienteService.deleteCliente(id).then( res => {
this.setState({cliente: this.state.cliente.filter(cliente => cliente.id !== id)});
});
}
viewCliente(id){
this.props.history.push(`/view-cliente/${id}`);
}
editCliente(id){
this.props.history.push(`/add-cliente/${id}`);
}
componentDidMount(){
ClienteService.getCliente().then((res) => {
this.setState({ cliente: res.data});
});
}
addCliente(){
this.props.history.push('/add-cliente/_add');
}
render() {
return (
<div>
<h2 className="text-center">Confira a lista de clientes abaixo:</h2>
<div className = "row">
<button className="btn btn-primary" onClick={this.addFuncionario}> Adicionar Cliente</button>
</div>
<br></br>
<div className = "row">
<table className = "table table-striped table-bordered">
<thead>
<tr>
<th> Primeiro Nome Cliente</th>
<th> Último Nome Cliente</th>
<th> E-mail Cliente</th>
<th> Editar</th>
</tr>
</thead>
<tbody>
{
this.state.funcionarios.map(
funcionario =>
<tr key = {funcionario.id}>
<td> {funcionario.primeiroNome}</td>
<td> {funcionario.ultimoNome}</td>
<td> {funcionario.emailId}</td>
<td>
<button onClick={ () => this.editFuncionario(funcionario.id)}
className="btn btn-info">Alterar </button>
<button style={{marginLeft: "10px"}} onClick={ () =>
this.deleteFuncionario(funcionario.id)} className="btn btn-danger">Apagar </button>
<button style={{marginLeft: "10px"}} onClick={ () =>
this.viewFuncionario(funcionario.id)} className="btn btn-info">Visualizar </button>
</td>
</tr>
)
}
</tbody>
</table>
</div>
</div>
)
}
}
export default ListClienteComponent