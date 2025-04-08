import Produto from "../Produto/Produto.tsx";
import './ProdutosLista.css';

// Volume + Posters::
import img1 from '../../assets/Produtos/THE GUARDIANS CAPA (Remake).jpg';
import img2 from '../../assets/Produtos/Just Chilling.jpg';
import img3 from '../../assets/Produtos/Joshua Jones Poster.png';
import img4 from '../../assets/Produtos/Jade fanart Poster.jpg';
import img5 from '../../assets/Produtos/Joshua Jones J.J.jpg';
import img6 from '../../assets/Produtos/Joshua e Henrique.jpeg';


// Adesivos::
import ads1 from '../../assets/Produtos/Chibi Joshua.png';
import ads2 from '../../assets/Produtos/Chibi Henrique.png';
import ads3 from '../../assets/Produtos/Chibi Nicolas.png';
import ads4 from '../../assets/Produtos/Chibi Jade.png';
import ads5 from '../../assets/Produtos/Chibi Hércules.png';
import ads6 from '../../assets/Produtos/Chibi Elizabete.png';




const ProdutosLista: React.FC = () => {
    const produtos = [
        {
            id: 1,
            nome: "Volume 1 - The Hero",
            descricao: "Contém os Capítulos 1 a 6 da História + 1 Capítulo extra",
            preco: 30.90,
            imagem: img1,
            categoria: "Volume",
            quantidade: 40
        },
        {
            id: 2,
            nome: "Just Chilling",
            descricao: "Poster do Joshua Jones e Henrique Marques relaxando durante o dia",
            preco: 20.00,
            imagem: img2,
            categoria: "Poster",
            quantidade: 10
        },
        {
            id: 3,
            nome: "Joshua Jones Poster",
            descricao: "Poster do Joshua Jones em movimento/ação",
            preco: 20.00,
            imagem: img3,
            categoria: "Poster",
            quantidade: 10
        },
        {
            id: 4,
            nome: "Jade Queen Poster",
            descricao: "Poster da Jade Queen apreciando o pôr do sol",
            preco: 20.00,
            imagem: img4,
            categoria: "Poster",
            quantidade: 10
        },
        {
            id: 5,
            nome: "J.J. Poster",
            descricao: "Poster do J.J. (Joshua Jones)",
            preco: 20.00,
            imagem: img5,
            categoria: "Poster",
            quantidade: 10
        },
        {
            id: 6,
            nome: "Joshua e Henrique",
            descricao: "Poster do Joshua e Henrique juntos",
            preco: 20.00,
            imagem: img6,
            categoria: "Poster",
            quantidade: 10
        },
        {
            id: 7,
            nome: "Adesivo - Joshua",
            descricao: "Adesivo Chibi de Joshua Jones",
            preco: 5.00,
            imagem: ads1,
            categoria: "Adesivo",
            quantidade: 10
        },
        {
            id: 8,
            nome: "Adesivo - Henrique",
            descricao: "Adesivo Chibi de Henrique Marques",
            preco: 5.00,
            imagem: ads2,
            categoria: "Adesivo",
            quantidade: 10
        },
        {
            id: 9,
            nome: "Adesivo - Nicolas",
            descricao: "Adesivo Chibi de Nicolas dos Santos",
            preco: 5.00,
            imagem: ads3,
            categoria: "Adesivo",
            quantidade: 10
        },
        {
            id: 10,
            nome: "Adesivo - Jade",
            descricao: "Adesivo Chibi de Jade Queen",
            preco: 5.00,
            imagem: ads4,
            categoria: "Adesivo",
            quantidade: 10
        },
        {
            id: 11,
            nome: "Adesivo - Hércules",
            descricao: "Adesivo Chibi de Hércules Carneiro",
            preco: 5.00,
            imagem: ads5,
            categoria: "Adesivo",
            quantidade: 10
        },
        {
            id: 12,
            nome: "Adesivo - Elzabete",
            descricao: "Adesivo Chibi de Elizabete Valverde",
            preco: 5.00,
            imagem: ads6,
            categoria: "Adesivo",
            quantidade: 10
        }
    ];

    return (
        <div className="produtos-section">
            {/* exatamente igual a parte do SOBRE */}
            <div className="section-title">
                <hr />
                <h1 className="produtos-title">PRODUTOS</h1>

                {/* exceto essa parte */}
                <h6 className="produtos-subtitle">
                    Confira a seguir nosso catálogo de Produtos disponíveis para Venda!
                    <br></br>Todo lucro obtido com a venda dos produtos será revertido para o <strong>financiamento</strong> do projeto.
                </h6>
            </div>

            <div className="produtos-lista">
                {produtos.map(produto => (
                    <Produto key={produto.id} {...produto} />
                ))}
            </div>
        </div>
    );
}

export default ProdutosLista;