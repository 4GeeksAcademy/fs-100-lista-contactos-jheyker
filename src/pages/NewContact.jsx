import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ContactService from "../services/contactsService"

export const NuevoContacto = () => {

    const navigate = useNavigate()

    const [informacion, setInformacion] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",

    })

    const guardarCambios = (e) => {
        setInformacion({ ...informacion, [e.target.name]: e.target.value })
    }
    const resetearFormulario = (e) => {
        e.preventDefault();
        setInformacion({
            name: "",
            phone: "",
            email: "",
            address: "",
        });
    };

    const cancelarCambios = (e) => {
        e.preventDefault()
        navigate('/')
    }
    const guardarinformacion = async (e) => {
        try {
            e.preventDefault();
            const resp = await ContactService.crearContacto(informacion)
            console.log(resp);
            navigate('/')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="text-center">
            <form className="form-control" onSubmit={guardarinformacion}>
                <h2>Nuevo contacto</h2>
                <input className="form-control mb-1" type="text" placeholder="Name" name="name" value={informacion.name} onChange={guardarCambios} required/>
                <input className="form-control mb-1" type="text" placeholder="Phone" name="phone" value={informacion.phone} onChange={guardarCambios} required/>
                <input className="form-control mb-1" type="email" placeholder="Email" name="email" value={informacion.email} onChange={guardarCambios} required/>
                <input className="form-control mb-1" type="text" placeholder="Address" name="address" value={informacion.address} onChange={guardarCambios} required/>
                <input type="submit" className="btn btn-success m-2" />
                <button className="btn btn-warning m-2" onClick={resetearFormulario}>Restablecer</button>
                <button className="btn btn-danger m-2" onClick={cancelarCambios}>Cancelar</button>
            </form>
        </div>
    )
}