import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactService from "../services/contactsService.js";
import { Card } from "../components/Card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const fetchAgenda = async (nombreAgenda) => {
		try {
			const data = await ContactService.getAgenda(nombreAgenda);
			dispatch({ type: 'getUserAgenda', payload: data.contacts })
		} catch (error) {
			console.log(error)
		}
	}
	const eliminarContacto = async (contactoid) => {
		try {
		  const actualizacionEliminar = await ContactService.eliminarContacto("Ramon", contactoid);
		  dispatch({ type: "getUserAgenda", payload: actualizacionEliminar.contacts });
		} catch (error) {
		  console.log(error);
		}
	  };
	useEffect(() => {

		fetchAgenda('Ramon')
	}, [])

	return (
		<div className=" mt-5">
			<div className="d-flex justify-content-center flex-wrap">

				{store.agenda?.map(el => <Card
					key={el.id}
					contactoid={el.id}
					name={el.name}
					phone={el.phone}
					email={el.email}
					address={el.address}
					eliminarContacto={eliminarContacto}
				/>
				)}
			</div>
		</div>
	)

}
