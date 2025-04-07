
import './App.css';

import Header from './assets/components/Header/Header';
import Carrossel from './assets/components/Carrossel/Carrossel';
import Sobre from './assets/components/Sobre/Sobre';


function App() {
  return (
    <>
      <Header/>
      
      <Carrossel/>
      <section id="sobre">
        {/* Conteúdo da seção */}
        <Sobre/>
      </section>
      
      <section id="origem">

        {/* Conteúdo da seção */}
      </section>
      
      <section id="produtos">

        {/* Conteúdo da seção */}
      </section>
      
      <section id="contato">

        {/* Conteúdo da seção */}
      </section>
    </>
  );
}

export default App;