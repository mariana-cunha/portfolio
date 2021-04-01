import React from 'react';
import './App.css';
import { Trampos } from './Trampos'

function App() {
  return (
    <section className="App">
      <div className="bio">
        <h1>Mariana Cunha</h1>
        <p>Jornalista e front-end.<br></br></p>
        <p>Trabalho no <a target="_blank" rel="noopener noreferrer" href="https://www.estadao.com.br/infograficos" ><b>Estadão</b></a> em diversas histórias combinando informação, design e programação. Comecei minha carreira como desenvolvedora front-end na <a target="_blank" rel="noopener noreferrer" href="https://www.newton.ag/"><b>Newton Agência</b></a></p>
        
      </div>
      <section className="cards">
        <Trampos />
      </section>  
    </section>
  );
}

export default App;
