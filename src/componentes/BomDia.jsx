// Componentes com Parâmetros

import React from "react";

// por convenção utilizamos props no lugar das propriedades
export default props => 
  <div>
    <h1>Bom dia {props.nome}!</h1>
    <h2>Até breve!</h2>
  </div>
  // caso não queira dois elementos dentro de uma div podemos utilizar </React.Fragment>
  // também podemos utilizar um array, mas precisamos de uma 'key=' para que facilite o React achar esses elementos