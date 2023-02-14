const database = require('../models')

class LicencaController {
    static async pegaTodasAsLicencas(req, res) {
        try {
            const todasAsLicencas = await database.Licencas.findAll()
            return res.status(200).json(todasAsLicencas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaLicenca(req, res) {
        const novaLicenca = req.body
        try {
            const novaLicencaCriada = await database.Licencas.create(novaLicenca)
            return res.status(200).json(novaLicencaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizaLicenca(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Licencas.update(novasInfos, { where: { id: Number(id) } })
            const licencaAtualizada = await database.Licencas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(licencaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagaLicenca(req, res) {
        const { id } = req.params
        try {
            await database.Licencas.destroy( { where: { id: Number(id) } })
            return res.status(200).json({mensagem: `ID ${id} foi deletado.`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = LicencaController