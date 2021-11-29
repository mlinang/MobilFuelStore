import { useState } from 'react';

function FormLogin(props) {
    

    const proyectoLimpio = { 
            id:"", 
            nombre: "", 
            fecha: "", 
            descripcion: "", 
            director:"", 
            completado: true 
    }

    const onInputChange = function (evt) {
        const p = {...proyectoState};
        p[evt.target.name] = evt.target.value;

        //Aqui podemos implementar validaciones a nivel de cambio

        setProyectoState(p);
    }

    const onFormSubmit = function (evt) {
        evt.preventDefault();
        
        //Aqui podemos implementar validaciones a nivel de formulario.

        props.onGuardar(proyectoState);
        setProyectoState(proyectoLimpio);
    }

    const valorEstado = ( props.modo !=="nuevo" ? {...props.proyecto} : proyectoLimpio );
    const [ proyectoState, setProyectoState ] = useState(valorEstado);

    return (
    
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card-group mb-0">
                <div className="card p-4">
                    <div className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input className="form-control" type="text" name="nombre" placeholder="Username" value={ proyectoState.nombre }  onChange={onInputChange} />
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input className="form-control" type="password" name="password" placeholder="password" value={ proyectoState.director } onChange={onInputChange} /> 
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <button type="submit" className="btn btn-primary mr-1">Ingresar</button>
                        </div>
                        <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">Forgot password?</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card text-white bg-primary py-5 d-md-down-none" >
                    <div className="card-body text-center">
                    <div>
                        <h2>Sign up</h2>
                        <p>Lorem  </p>
                        <button type="button" className="btn btn-primary active mt-3">Register Now!</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

    );

}

export default FormLogin;    