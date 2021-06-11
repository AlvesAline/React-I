import friends from '../service/filmes'
import './style.css';

function PrimeiroProjeto () {
    return(
        <div>
            {friends.map(amigo => {
                return (
                    <div>
                        <h3 className="card-titulo">{amigo.title}</h3>
                        <p className="id-container" >{amigo.id}</p>
                        <img className="card-container" src={amigo.url} alt= {amigo.title}/>
                    </div>
                )
            })}
        </div>
    )
}

export default PrimeiroProjeto