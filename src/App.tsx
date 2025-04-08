
import './App.css';

import Header from './components/Header/Header';
import Carrossel from './components/Carrossel/Carrossel';
import Sobre from './components/Sobre/Sobre';
import Origem from './components/Origem/Origem';
import Footer from './components/Footer/Footer';
import ProdutosLista from './components/ProdutosLista/ProdutosLista';


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
        <ProdutosLista/>
      </section>
      
      <section id="contato">
        <Footer/>
      </section>
    </>
  );
}

export default App;