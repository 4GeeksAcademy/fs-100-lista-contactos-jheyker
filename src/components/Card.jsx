import { useNavigate } from "react-router-dom";
import ContactService from "../services/contactsService";

export const Card = (props) => {

  const navigate = useNavigate();

  const eliminar = async () => {
    try {
      await props.eliminarContacto(props.contactoid)

    } catch (error) {
      console.log(error);

    }
  }


  const editarContacto = (e) => {
    e.preventDefault()
    navigate('/edit/' + props.contactoid)
  }

  return (
    <div className="card m-2 col-md-5" style={{ maxWidth: '540px' }}>
      <div className="row">
        <div className="col-md-4">
          <img src="https://img.freepik.com/vector-premium/icono-membresia-plateado-icono-perfil-avatar-defecto-icono-miembros-imagen-usuario-redes-sociales-ilustracion-vectorial_561158-4195.jpg?semt=ais_hybrid&w=740" className="img-fluid rounded-start" alt={props.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">{props.phone}</p>
            <p className="card-text">{props.email}</p>
            <p className="card-text">{props.address}</p>
          </div>
          <div className="d-flex flex-row-reverse">
            <span className="m-2" onClick={eliminar}><i className="fa-solid fa-trash fs-3"></i></span>
            <span className="m-2" onClick={editarContacto}><i className="fa-solid fa-pen fs-3"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}