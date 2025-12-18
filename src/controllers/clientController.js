import Client from '../models/clientModel.js'


export const createClient = async (req, res) => {

    try {

        const { name, company } = req.body
        if (!name) return res.status(400).json ({ message: 'El nombre es obligatorio' })

        const client = new Client ({ name, company })
        await client.save()

        return res.status(201).json (client)

    } catch (error) {

        console.error (error)
        return res.status(500).json ({ message: 'Error del servidor' })

    }
    
}


export const listClients = async (req, res) => {

    try {

        const clients = await Client.find().sort ({ createdAt: -1 })
        return res.json (clients)

    } catch (error) {

        console.error (error)
        return res.status(500).json ({ message: 'Error del servidor' })
        
    }

}


export const getClient = async (req, res) => {

    try {

        const { id } = req.params
        const client = await Client.findById(id)

        if (!client) return res.status(404).json ({ message: 'Cliente no encontrado' })

        return res.json (client)

    } catch (error) {

        console.error (error)
        return res.status(500).json ({ message: 'Error del servidor' })

    }

}
