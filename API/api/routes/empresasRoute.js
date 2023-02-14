const { Router } = require('express')
const EmpresaController = require('../controllers/EmpresaController')

const router = Router()

router.get('/empresas', EmpresaController.pegaTodasAsEmpresas)
router.post('/empresa/insert', EmpresaController.criaEmpresa)
router.put('/empresa/update/:id', EmpresaController.atualizaEmpresa)
router.delete('/empresa/delete/:id', EmpresaController.apagaEmpresa)

module.exports = router