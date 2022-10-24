// Criar rodapé
import React, { Component } from 'react'
class FooterComponent extends Component {
constructor(props) {
super(props)
this.state = {
}
}
render() {
return (
<div>
<footer className = "footer">
<span className="text-muted">Atividade Prática RecodePro 2022 por Guilherme Millen Azevedo</span>
</footer>
</div>
)
}
}
export default FooterComponent