import React from 'react';
import './styles/form.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faPhone, faMapMarkerAlt,faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import {List} from './components/List'


function App() {


  return (
    <main>
      <div className="row-1">
        <h4>DIRECCION DE ENVIO</h4>
        <hr />
        <form className="form-register">
          
          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faUser}/></span>
            <input type="text" placeholder="Nombre" className="field"/>
          </div>

          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faUser}/></span>
            <input type="text" placeholder="Apellidos" className="field"/>
          </div>
            
          <div className="form-group">
            <div className="fondo"></div>
            <span className="icon"><FontAwesomeIcon icon ={faEnvelope}/></span>
            <input type="email" placeholder="Correo Electronico" className="field"/>
          </div>  

          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faPhone}/></span>
            <input type="text" placeholder="Numero de telefono" className="field"/>
          </div>

          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faMapMarkerAlt}/></span>
            <input type="text" placeholder="Codigo Postal" className="field"/>
          </div>

          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faMapMarkerAlt}/></span>
            <input type="text" placeholder="Colonia" className="field"/>
          </div>

          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faMapMarkerAlt}/></span>
            <input type="text" placeholder="Estado/Region" className="field"/>
          </div>

          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faMapMarkerAlt}/></span>
            <input type="text" placeholder="Ciudad" className="field"/>
          </div>

          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faMapMarkerAlt}/></span>
            <input type="text" placeholder="Delegacion o municipio" className="field"/>
          </div>

          <div className="form-group">
            <span className="icon"><FontAwesomeIcon icon ={faMapMarkedAlt}/></span>
            <input type="text" placeholder="Calle" className="field"/>
          </div>
        </form>

        <div className="buttons">
            <button type="submit" className="btn-libretas">Libreta de direcciones</button>

            <button type="submit" className="btn-guardar">Guardar</button>
            <div className="check">
              <label><input type="checkbox" />Utilizar como direccion de facturacion</label>
            </div>
        </div>
      </div>

      <div className="row-2">
        <List/>
      </div>
    </main>
  );
}

export default App;
