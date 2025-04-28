import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import ContactService from "../services/contactsService"


export const EditarContacto = () => {
    const params = useParams()
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const [informacion, setInformacion] = useState()
    
    
    
    useEffect(() => {
        store.agenda && setInformacion(store.agenda.find(el => el.id == params.id));
      }, [store.agenda, params.id]);


    const guardarCambios = e => {
        setInformacion({ ...informacion, [e.target.name]: e.target.value })
    }

    const cancelarCambios = e => {
        e.preventDefault();
        navigate('/')
    }

    const resetearFormulario = (e) => {
        e.preventDefault()
        store.agenda && setInformacion(store.agenda.find(el => el.id == params.id));
    }

    const guardarinformacion = async (e) => {
        try {
            e.preventDefault()
            console.log(informacion)
            const resp = await ContactService.editarContacto('Ramon', params.id, informacion)
            console.log(resp);
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    if (!informacion) {
        return <div>Cargando contacto...</div>;
    }

    return (
        <div className="text-center">
            <form className="form-control" onSubmit={guardarinformacion}>
                <h2>Editar contacto</h2>
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