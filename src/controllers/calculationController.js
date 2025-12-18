import Client from '../models/clientModel.js'


export const getStep = async (req, res) => {

    try {

        const { id, step } = req.params

        const client = await Client.findById(id)
        if (!client) return res.status(404).json ({ message: 'Cliente no encontrado' })

        const data = client.calculations?.get(step) || {}
        return res.json (data)

    } catch (error) {

        return res.status(500).json ({ message: 'Error al obtener el paso' })

    }
}


export const updateStep = async (req, res) => {

    try {

        const { id, step } = req.params

        const client = await Client.findById(id)
        if (!client) return res.status(404).json ({ message: 'Cliente no encontrado' })

        client.calculations.set (step, req.body)
        await client.save()

        return res.json ({ message: 'Paso guardado correctamente' })

    } catch (error) {

        return res.status(500).json ({ message: 'Error al guardar el paso' })

    }
}
