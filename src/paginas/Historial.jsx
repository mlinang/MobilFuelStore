import FilasTabla from "./FilasTabla";


function Historial(props){
    const datosTransacciones = props.transacciones;
    const listaTransacciones = datosTransacciones.map(p=>(
        <FilasTabla {...p}/>
    ));

    return(
        <div className="historial rounded-3 shadow-sm ">
            <div className="panel-body bio-graph-info">
                <div   div className="container opciones ">

                    <div className="busqueda py-3">
                        <div className="row">
                            <div className="col-md">
                    
                                <label for="desde">Desde</label>
                                <input className="btn btn-outline-primary"  type="date" name="desde" />
                                <label for="hasta">Hasta</label>
                                <input className="btn btn-outline-primary"  type="date" name="hasta" />
                                <button className="btn btn-danger ">filtrar</button>
                                
                                <button className="btn btn-outline-danger ">Descargar</button>
                    
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive thistorial">
                    <table className="table table-striped">
                        <tbody>
                            <tr className="titulos">
                            <td className="fecha">Fecha</td>
                            <td className="tipo">Tipo Transaccion</td>
                            <td className="medida">Galones</td>
                            <td className="valor">Valor</td>
                            <td className="transaccion">No Transaccion</td>
                            <td className="dinero">Dinero</td>
                            <td className="puntos">Puntos</td>
                            </tr>
                            
                            { listaTransacciones }
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Historial;