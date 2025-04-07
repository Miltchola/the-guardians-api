
import './App.css';

import Header from './assets/components/Header/Header';
import Carrossel from './assets/components/Carrossel/Carrossel';
import Sobre from './assets/components/Sobre/Sobre';
import Origem from './assets/components/Origem/Origem';


function App() {
  return (
    <>
      <Header/>
      
      <Carrossel/>
      
      <section id="sobre">
        <Sobre/>
      </section>
      
      <section id="origem">
        <Origem/>
      </section>
      
      <section id="produtos">

      </section>
      
      <section id="contato">

      </section>
    </>
  );
}

export default App;