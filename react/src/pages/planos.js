import React from 'react';
import Title from './../components/Title/index';
import Cardplanos from './../components/Cardplanos/index';

const planos = [{
    "nome": "Plano A",
    "preco": "15R$",
    "detalhes": "Este plano dura 1 mês.",
  },
  {
    "nome": "Plano B",
    "preco": "30R$",
    "detalhes": "Este plano dura 2 meses.",
  },
  {
    "nome": "Plano C",
    "preco": "40R$",
    "detalhes": "Este plano dura 3 meses.",
  }
  ]
 
export default function Planos(){
    return (
        <div className="">
        <Title
        title={"Planos"}
        text={"Veja abaixo os planos disponíveis:"} /> 
        <Cardplanos />
        </div>
    )
}