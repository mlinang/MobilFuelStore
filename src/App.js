import Perfil from "./paginas/Perfil";
import Historial from "./paginas/Historial";
import Puntos from "./paginas/Puntos";
import Saldos from "./paginas/Saldos";
import Vehiculos from "./paginas/Vehiculos";
import NavBar from "./paginas/NavBar";

function App() {
  const listaTransacciones=[
    
    {id:"1", identificacion:" 86081726", fecha:"01/11/2021",dato:"Compra",galones:"8",valor:"$72.000",numeroTransaccion:"10003554112",dinero:"$5.005.890",puntos:"1141"},
    {id:"2", identificacion:" 86081726", fecha:"01/11/2021",dato:"Compra",galones:"8.5",valor:"$77.000",numeroTransaccion:"10003554112",dinero:"$5.005.890",puntos:"1141"},
    {id:"3", identificacion:" 86081726", fecha:"01/11/2021",dato:"Compra",galones:"9",valor:"$82.000",numeroTransaccion:"10003554112",dinero:"$5.005.890",puntos:"1141"},
    {id:"4", identificacion:" 86081726", fecha:"01/11/2021",dato:"Compra",galones:"9.3",valor:"$91.000",numeroTransaccion:"10003554112",dinero:"$5.005.890",puntos:"1141"},
    {id:"5", identificacion:" 86081726", fecha:"01/11/2021",dato:"Compra",galones:"11",valor:"$110.000",numeroTransaccion:"10003554112",dinero:"$5.005.890",puntos:"1141"},
    {id:"6", identificacion:" 86081726", fecha:"01/11/2021",dato:"Compra",galones:"4",valor:"$30.000",numeroTransaccion:"10003554112",dinero:"$5.005.890",puntos:"1141"},
    {id:"7", identificacion:" 86081726", fecha:"01/11/2021",dato:"Compra",galones:"5",valor:"$45.000",numeroTransaccion:"10003554112",dinero:"$5.005.890",puntos:"1141"}

  ]
  const datosPersonales =[
    {id:"1", nombre:"Pablo Hernando ",apellido:"Leon Diaz",identificacion:"86.081.726",telefono:"321 347 6036",nacimiento:"03/12/1983",correo:"realpleon@gmail.com"},
  ]
  const listaVehiculos=[
    { id:"1", identificacion:" 86081726", dato:"UCO 611"},
    { id:"2", identificacion:" 86081726", dato:"RAG 611"},
    { id:"3", identificacion:" 86081726", dato:"ZGC 825"},
    { id:"4", identificacion:" 86081726", dato:"ADZ 611"},
    { id:"5", identificacion:" 86081726", dato:"ADZ 611"},
  ]

  const resultadosaldos=[
    { id:"1", identificacion:" 86081726", saldo:"4.890.000"}
  ]
  const resultadopuntos=[
    { id:"1", identificacion:" 86081726", puntos:"1.350"}
  ]

  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />
        <header>
          <div className="pricing-header p-2 pb-md-4 mx-auto text-center">
              <h2 className="display-6 fw-normal titulo">Informacion Personal</h2>
          </div>
        </header>
        <div className="row row-cols-1 row-cols-md-4 mb-4 text-center">
          <Perfil datospersonales = {datosPersonales} />
          <Puntos puntos ={resultadopuntos}/>
          <Saldos saldos ={resultadosaldos}/>
          <Vehiculos vehiculos ={listaVehiculos}/>
        </div>

        <div className="pricing-header pb-md-4 mx-auto text-center">
          <h2 className="display-6 fw-normal titulo">Historial</h2>
        </div>
          <Historial transacciones = {listaTransacciones}/>
      </div>
    </div>

  );
}


export default App;