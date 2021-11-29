import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './bootstrap.css';
import FormLogin from './components/FormLogin';

function App() {
  const datos_empresa = {
    compania: "Mobil",
    division: "Fuel Store",
    direccion: "Av 000 No. 000 - 000",
    telefono: "+57 5 000 0000",
    ciudad: "Valledupar - Colombia",
  
  }

  return (
    <div>
      <NavBar />
      <FormLogin />
      <Footer {...datos_empresa} />
    </div>
  );
}


export default App;