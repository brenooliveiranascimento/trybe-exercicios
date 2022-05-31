import React from "react";
import './App.css';
class Content extends React.Component{
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <>
        {conteudos.map((conteudo) => (
          <div className="divContent" id={conteudo.bloco}>
          <p><strong>O conteúdo é:</strong> {conteudo.conteudo}</p>
          <p><strong>status:</strong> {conteudo.status}</p>
          <p><strong>bloco:</strong> {conteudo.bloco}</p>
          </div>
        ))}
      </>
    )
  }
}

export default Content;