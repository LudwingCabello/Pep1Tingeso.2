import axios from "axios";

const VEHICULOS_URL = "http://localhost:8080/vehiculos";
const HISTORIAL_URL = "http://localhost:8080/HistorialReparaciones";

function CrearVehiculo(vehiculo) {
    console.log("Saving vehicle:", vehiculo);
    return axios.post(`${VEHICULOS_URL}/savevehiculo`, vehiculo);
  }

export default {CrearVehiculo}

function ResgitroReparaciones(reparacion){
    return axios.post(`${HISTORIAL_URL}/savehistorial`, reparacion);
}