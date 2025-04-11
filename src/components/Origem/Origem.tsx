import './Origem.css'
import img1 from './../../assets/images/Joshua Jones Remake.jpg'
import img2 from './../../assets/images/Just chilling.jpg'
import img3 from './../../assets/images/Jade fanart New Colors.jpg'


const Origem = () => {
    return (
        <div className="origem-section">
            {/* exatamente igual a parte do SOBRE */}
            <div className="section-title">
                <hr />
                <h1 className="origem-title">ORIGEM</h1>
            </div>

            <div className="section-1">
                <div className="section-1-left">
                    <img className='section-1-image' src={img1} alt="imagem" />
                </div>
                <div className="section-1-right">
                    <h3 className='section-1-title'>Como Começamos</h3>

                    <p className='section-1-paragraph'>
                        Essa ideia surgiu em 2018 por <strong>André Oliveira</strong>, com a proposta
                        de fazer uma animação de bonecos palitos lutando entre si. Com o tempo, a ideia amadureceu,
                        evoluindo para uma Webcomic, até que em 2020, primeiro rascunho
                        da história foi escrito.
                    </p>
                    <p className='section-1-paragraph'>
                        No final de 2021, após encontrar uma competição de quadrinhos, André
                        uniu um pequeno grupo de amigos para criar a primeira versão da história e
                        desenhar o <strong>Primeiro Capítulo</strong> para concorrer a competição.
                        "The Guardians - Protectors of Mankind" não venceu na competição, porém
                        o grupo decidiu continuar o projeto, postando capítulos na plataforma Webtoons em 2022.
                    </p>
                    <p className='section-1-paragraph'>
                        Após 16 capítulos postados e dois anos de produção, o grupo decidiu fazer uma pausa em
                        2024 para reescrever a história do zero
                        e melhorar a arte, com o objetivo de publicar uma versão aprimorada do
                        quadrinho para ser impressa.
                    </p>
                </div>
            </div>

            <div className="section-2">
                <div className="section-2-left">
                    <h3 className='section-2-title'>Desenvolvimento</h3>

                    <p className='section-2-paragraph'>
                        A nova versão da história começou a ser reescrita por <strong>André Oliveira</strong> em
                        2024, tendo seu Primeiro Volume com o roteiro concluído. Os capítulos começaram
                        a ser desenhados em Agosto, por <strong>Bernardo Oliveira</strong> como
                        Storyboarder, <strong>Milton Kiefer</strong> como artista de Personagem
                        e <strong>Henrique Lin</strong> como artista de Cenário.
                    </p>
                    <p className='section-2-paragraph'>
                        Os primeiros três capítulos já estão sendo produzidos paralelamente entre si,
                        sendo que os dois primeiros, respectivamente entitulados
                        de <strong>"Corruption"</strong> e <strong>"The Loser Boy"</strong> serão
                        lançados juntos até o final de 2025. 
                    </p>
                </div>
                <div className="section-2-right">
                    <img className='section-2-image' src={img2} alt="imagem" />
                </div>
            </div>

            <div className="section-3">
                <div className="section-3-left">
                    <img className='section-3-image' src={img3} alt="imagem" />
                </div>
                <div className="section-3-right">
                    <h3 className='section-3-title'>O que Esperar de nós</h3>

                    <p className='section-3-paragraph'>
                        Com Terceiro Capítulo, entitulado
                        de <strong>"What makes a Hero?"</strong>, previsto para ser publicado em 2026, nós
                        prevemos terminar o <strong>Volume 1 - The Hero</strong> até 2027 e continuar a 
                        história daqui pra frente, expandindo a equipe e o projeto.
                    </p>
                    <p className='section-3-paragraph'>
                        A Primeira Temporada está prevista para ter um total de 10 Volumes, e com
                        o tempo, nós esperamos conseguir a atenção de editoras para publicar os Volumes
                        e investidores para financiar o Projeto. Além disso, temos 
                        membros da Equipe também trabalham como animadores, trazendo a possibilidade
                        de escalar o projeto a ponto de torná-lo uma animação no futuro.
                    </p>
                    <p className='section-3-paragraph'>
                        Também planejamos aprimorar e expandir o nosso site, trazendo mais
                        informações sobre a história, os personagens presentes na obra
                        e o mundo de <strong>The Guardians</strong>. Além disso, seria possível criar novas seções
                        no site, onde mostraremos o desenvolvimento do projeto e 
                        um pouco mais da equipe por trás da obra.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Origem;