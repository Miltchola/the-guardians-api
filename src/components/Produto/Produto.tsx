import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Produto.css';

interface ProdutoProps {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    categoria: string;
    quantidade: number;
}

const Produto: React.FC<ProdutoProps> = ({ /*id, */ nome, descricao, preco, imagem, categoria, quantidade }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="produto-card">
                <img src={imagem} alt={nome} className="produto-imagem" />

                <div className="produto-info">
                    <h2 className="produto-nome">{nome}</h2>
                    <p className="produto-preco">R$ {preco.toFixed(2)}</p>
                    <p className="produto-categoria">{categoria}</p>
                    <button 
                        className="produto-button"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Ver Mais
                    </button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="produto-modal-container">
                    <div className="produto-modal">
                        <div className="produto-modal-imagem-container">
                            <img src={imagem} alt={nome} className="produto-modal-imagem" />
                        </div>
                        <div className="produto-modal-info">
                            <h2 className="produto-modal-nome">{nome}</h2>
                            <p className="produto-modal-categoria">{categoria}</p>
                            <p className="produto-modal-descricao">{descricao}</p>
                            <p className="produto-modal-preco">R$ {preco.toFixed(2)}</p>
                            <p className="produto-modal-quantidade">Disponíveis: {quantidade}</p>
                            <div className="produto-modal-buttons">
                                <button className="produto-modal-button-comprar">
                                    Comprar Agora
                                </button>
                                <button 
                                    className="produto-modal-button-fechar"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Produto;