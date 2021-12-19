
import FilasTabla from "./FilasTabla";

function Vehiculos(props){
    const vehiculos= props.vehiculos;
    const listaVehiculos = vehiculos.map(p=>(
        <FilasTabla {...p}/>
        ));
    return(
        <div className="col rounded-3 shadow-sm">
            <div className="card mb-4 rounded-3 shadow-sm ">
                <div className="card-header py-3">
                    <h4>Mis Vehiculos</h4> 
                </div>

                <div className="card-body vehiculos">
                    <i className="fa fa-car fa-3x  py-3" aria-hidden="true"></i>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                {listaVehiculos}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div className="bio-row btn-group">
                <button type="submit" className="w-100 btn btn-lg btn-accion" value="" id="btnGuardar" >Agregar</button>
                <button type="submit" className="w-100 btn btn-lg " value="" id="btnGuardar" >Quitar</button>
            </div>
        </div>  
    );
}
export default Vehiculos;

