import './Produto.css'

/* Interface padrão pros Produtos */
interface ProdutoProps {
    id: number; // Index
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    categoria: string; // Volume, Adesivo ou Poster
    quantidade: number;
}

const Produto: React.FC<ProdutoProps> = ({ id, nome, descricao, preco, imagem, categoria, quantidade }) => {
    return (
        <div className="produto-card">
            <img src={imagem} alt={nome} className="produto-imagem" />

            <div className="produto-info">
                <h2 className="produto-nome">{nome}</h2>
                {/* <p className="produto-id">{id}</p> */}
                {/* <p className="produto-descricao">{descricao}</p> */}
                <p className="produto-preco">R$ {preco.toFixed(2)}</p>
                <p className="produto-categoria">{categoria}</p>
                {/* <p className="produto-quantidade">Quantidade: {quantidade}</p> */}
                <button className="produto-button">Ver Mais</button>
            </div>
        </div>
    );
}

export default Produto;