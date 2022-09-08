import React from 'react'
import ReactDOM from 'react-dom'
// o nome dos seus componentes precisam começar com letra maiuscula para diferenciar de divs normais
// vamos utilizar reactDOM para renderizar o primeiro elemento da nossa pagína

//Primeiro
// import Primeiro from './componentes/Primeiro'
// ReactDOM.render(<Primeiro/>, document.getElementById('root'))

//BomDia
// import BomDia from './componentes/BomDia'
// ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))

//Multiplos
// import BoaTarde, { BoaNoite } from './componentes/Multiplos'
// ReactDOM.render(
//   <div>
//     <BoaTarde nome="Ana" />
//     <BoaNoite nome="Bia" />
//   </div>
// , document.getElementById('root'))

//Saudação
// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//   <div>
//     <Saudacao tipo="Bom dia" nome="João"/>
//   </div>
// , document.getElementById('root'))

// Pai e Filho
//Aula 1
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    {/* Aula 1 */}
    <Pai nome="Paulo" sobrenome="Silva"/>

    {/* Aula 2: Como passar os componentes filhos aqui */}
    <Filho nome="Pedro" />
    <Filho nome="Paulo" />
    <Filho nome="Carla" />
  </div>
, document.getElementById('root'))

