function Puntos(props){
    const puntos = props.puntos;

    return(
        <>
            {puntos.map((p) => (
            <>
            <div className="col rounded-3 shadow-sm">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                    <h4>Mis Puntos</h4> 
                    </div>

                    <div className="card-body">
                    <i className="fa fa-star fa-3x py-3" aria-hidden="true"></i>
                    <ul className="list-unstyled ">
                        <li className="medio">Tus puntos son:</li>
                        <h2>
                        <li className="grande">{p.puntos}</li>
                        </h2>
                    </ul>
                    </div>
                </div>
            </div>
            </>
            ))}
        </>
    );
}
export default Puntos;