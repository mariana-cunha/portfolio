import React from "react";
import "./Styles.scss";
import { Trampos } from "./Trampos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <section className="bio">
        <div className="icon">
          <img
            src="./icon.png"
            alt="ícone que representa a Mariana, uma mulher branca de cabelos cacheados curtos, fundo lilás, desenhado pela artista Momorsa"
          />
          <h1>Mariana Cunha</h1>
          <p>Front-end dev, jornalista</p>
    
    <div className="redes-sociais">
      <a href="mailto:mari.marques26@gmail.com"><i>mari.marques26@gmail.com</i></a>
      <a href="https://www.linkedin.com/in/mariana--cunha/" target="_blank" rel="noopener noreferrer"><i>linkedin</i></a>
    </div>
        </div>
        <div className="descricao">
          <p>Minha trajetória é de fato única. Trabalho na <a href="https://www.thoughtworks.com/pt-br" target="_blank" rel="noopener noreferrer"> <b>Thoughtworks Brasil</b></a> como consultora de software front-end desde 2021. Antes, estive no <a target="_blank" rel="noopener noreferrer" href="https://www.estadao.com.br/infograficos"><b>Estadão</b></a> desenvolvendo histórias que combinavam informação, design e programação, além de oferecer suporte à redação com layout e componentes interativos em especiais. Passei um curto período também na <a target="_blank" rel="noopener noreferrer" href="https://www.newton.ag/"><b>Newton Agência</b></a>.
          </p>
          <p>Clique nos cards abaixo para conhecer o meu trabalho. Adicionei um ícone de premiação <FontAwesomeIcon size="1x" alt="ícone de premiação" icon={faAward}
            /> nos itens que tive reconhecimento em alguma premiação. É possível que alguns links estejam disponíveis apenas para assinantes do Estadão, <del>infelizmente</del>.
          </p>
        </div>
       
      </section>

      <section className="cards">
        <Trampos />
      </section>

      <footer>
        Mariana Cunha ≈ <a href="https://youtu.be/vXskkLrIWkE" target="_blank" rel="noopener noreferrer">vivendo a utopia de um Brasil feliz</a> em 2023
      </footer>
    </div>
  );
}

export default App;
