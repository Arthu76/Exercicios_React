import React, { Component } from "react";

export default class Saudacao extends Component {

  state = { // Valor inicial
    tipo: this.props.tipo,
    nome: this.props.nome
  }

  // Fazer com que o 'this' aponte para o componente atual(Saudacao)
  constructor(props) { // dentro de constructor, this aponta para Saudacao
    super(props)

    this.setTipo = this.setTipo.bind(this)
  }

  setTipo(e) { // Para mudar o valor
    this.setState({ tipo: e.target.value })
  }
  setNome(e) { 
    this.setState({ nome: e.target.value })
  }

  render() {
    const { tipo, nome } = this.state
    return (
      <div>
        <h1>{tipo} {nome}!</h1>
        <hr />
        <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>

        {/* caso não utilize o constructor podemos utilizar a função arrow, pois o this é contestualizado */}
        <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
      </div>
    )
  }
}