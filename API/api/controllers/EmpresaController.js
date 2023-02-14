const database = require('../models')

class EmpresaController {
    static async pegaTodasAsEmpresas(req, res) {
        try {
            const todasAsEmpresas = await database.Empresas.findAll()
            return res.status(200).json(todasAsEmpresas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaEmpresa(req, res) {
        const novaEmpresa = req.body
        try {
            const novaEmpresaCriada = await database.Empresas.create(novaEmpresa)
            return res.status(200).json(novaEmpresaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizaEmpresa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Empresas.update(novasInfos, { where: { id: Number(id) } })
            const empresaAtualizada = await database.Empresas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(empresaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async apagaEmpresa(req, res) {
        const { id } = req.params
        try {
            await database.Empresas.destroy( { where: { id: Number(id) } })
            return res.status(200).json({mensagem: `ID ${id} foi deletado.`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    
}

module.exports = EmpresaController