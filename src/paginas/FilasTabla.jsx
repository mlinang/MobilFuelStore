function FilasTabla(props){
  
    return(
        <tr>
            <td className="fecha">{props.fecha}</td>
            <td className="tipo"> {props.dato}</td>
            <td className="medida">{props.galones}</td>
            <td className="valor">{props.valor}</td>
            <td className="transaccion"> {props.numeroTransaccion}</td>
            <td className="dinero">{props.dinero}</td>
            <td className="puntos">{props.puntos}</td>
        </tr>
        
    );
}
export default FilasTabla;