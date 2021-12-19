
function Perfil(props){
    const datos= props.datospersonales;

    return(
        <>
        <div className="col datosperfil rounded-3  ">
            <div className="card-header py-3">
                    <h4>Perfil</h4> 
                </div>
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-body infoperfil">
                        <form className="datosPersonales" form action="" method="post" enctype="multipart/form-data">
                        {datos.map((dp) => (
                            <>
                                <div className="row">
                                <div className="bio-row">
                                    <label for="">Nombre </label>
                                    <input type="text" name="nombre" id="nombre" value={dp.nombre} size="29" disabled />
                                </div>
                                <div className="bio-row">
                                    <label for="apellido">Apellido </label>
                                    <input type="text" name="apellido" id="apellido" value={dp.apellido} size="29"  disabled />
                                </div>
                                <div className="bio-row">
                                    <label for="id">Identificacion</label>
                                    <input type="text" name="id" id="id" value={dp.identificacion} size="29"  disabled />
                                </div>
                                <div className="bio-row">
                                    <label for="telefono">Telefono</label>
                                    <input type="text" name="telefono" id="telefono" size="29"  value={dp.telefono} disabled />
                                </div>
                                <div className="bio-row">
                                    <label for="nacimiento">Fecha Nacimiento</label>
                                    <input type="text" name="nacimiento" id="nacimiento" value={dp.nacimiento} size="29"  disabled />
                                </div>
                    
                                <div className="bio-row">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" id="email" value={dp.correo} size="29"  disabled />
                                </div>
                                </div> 
                                <div className="bio-row">
                                <button type="submit" className="w-100 btn btn-lg py-4 " value={dp.nombre} id="btnGuardar" >Modificar</button>
                                
                                </div>
                            </>
                            ))}
                        </form>
                    </div>
                </div>
            </div> 
        </>
        
    );
}
export default Perfil;