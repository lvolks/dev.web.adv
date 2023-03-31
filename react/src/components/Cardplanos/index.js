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

  export default function Cardplanos() {

    return (
        
            <div className="container text-center">
      <div className="row">
        {planos.map((planos, i) => (
          <div className="col" key={i}>
            <div className="planos">
              <div className="planos-body">
                <h5 className="planos-title">{planos.nome}</h5>
                <p className="planos-text">{planos.preco}</p>
                <p>{planos.detalhes}</p>
                <a
                  href={`/detalhes/${planos.nome}`}
                >
                  <div className="btn btn-primary">
                    Adquirir
                  </div>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
    )
}