import "./comments.css";

const commentarios = [{
    "filme": "Vingadores", "comentarios": [{
        "usuario": "Lucas",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Pedro",
        "comentario": "Muito bom, gostei muito!"
    },
    {
        "usuario": "João",
        "comentario": "Muito bom, gostei!"
    }
    ]
},
{
    "filme": "Vingadores 2", "comentarios": [{
        "usuario": "Carlos",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Maria",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "filme": "Vingadores 3", "comentarios": [{
        "usuario": "Leticia",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "Victor",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(f =>
        f.filme === filme
    );
    return (
        <div className="container text-center">
            {comentariosFilme[0].comentarios.map((comment, i) => (
                <div className="row">
                    <div className="col-md-3" key={i.toString()}>
                        <p>Usuário: {comment.usuario}</p>
                    </div>
                    <div className="col-md-9" key={i.toString()}>
                    <p>Comentário: {comment.comentario}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}