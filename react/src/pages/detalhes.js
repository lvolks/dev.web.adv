import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';
import "./detalhes.css";

const filmes = [{
    "nome": "Vingadores",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 2",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 3",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    const filmeEscolhido = filmes.filter(f =>
        f.nome === filme
    );

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />


            <div className="container1">
                <div className="poster">
                    <img className="poster1" src={'/assets/images/vingadores.png'} />
                </div>
                <div className="detalhes">
                    <div className="container text-center">
                        <div className="titulo">
                        <h1>Informações do filme selecionado</h1>
                        </div>
                        <div className="informacoes">
                        <p>Filme: {filmeEscolhido[0].nome}</p>
                        <p>{filmeEscolhido[0].duracao}</p>
                        <p>{filmeEscolhido[0].genero}</p>
                        <p>{filmeEscolhido[0].descricao}</p>
                        <p>Nota: {filmeEscolhido[0].nota}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
            <Comments filme={filmeEscolhido[0].nome} />
            </div>
        </div>
    )
}

export default Detalhes;