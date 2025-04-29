const ContactService = {}

ContactService.getAgenda = async (nombreAgenda) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${nombreAgenda}`)
        if (!resp.ok)
            return ContactService.crearAgenda(nombreAgenda)
        const data = await resp.json()
        return data
    }
    catch (error) {
        console.log(error);
    }
}
ContactService.crearAgenda = async (nombreAgenda) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${nombreAgenda}`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await resp.json()
        return data
    }
    catch (error) {
        console.log(error);

    }
}

ContactService.crearContacto = async (payload) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Ramon/contacts`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        const data = await resp.json()
        return ContactService.getAgenda('Ramon')
    }
    catch (error) {
        console.log(error);

    }
}
ContactService.eliminarContacto = async (nombreAgenda, id) => {
    try {
       await fetch(`https://playground.4geeks.com/contact/agendas/${nombreAgenda}/contacts/${id}` , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
  
        return ContactService.getAgenda(nombreAgenda)
    } catch (error) {
        console.log(error)
    }
}
ContactService.editarContacto = async (nombreAgenda, id, formData) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${nombreAgenda}/contacts/${id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        } )
         return ContactService.getAgenda(nombreAgenda)
     } catch (error) {
         console.log(error)
     }
}

export default ContactService
