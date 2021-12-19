function Saldos(props){
    const saldos= props.saldos;
    return(
    <div className="col rounded-3 shadow-sm">
        {saldos.map((dp) => (
        <>
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4>Mi Saldo</h4> 
                </div>

                <div className="card-body">
                    <i className="fa fa-usd fa-3x  py-3" aria-hidden="true"></i>
                    <ul className="list-unstyled ">
                    <li className="medio">Tu saldo es:</li>
                    <h2>
                        <li className="grande">COP: ${dp.saldo}</li>
                    </h2>
                    </ul>
                </div>
            </div>
            <div className="bio-row">
                <button type="submit" className="w-100 btn btn-lg " value="" id="btnGuardar" >Recarga Ahora</button>
            </div>   
        </>
            ))}

    </div>
    );
}
export default Saldos;