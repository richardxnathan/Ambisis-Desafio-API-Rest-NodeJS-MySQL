const { Router } = require('express')
const LicencaController = require('../controllers/LicencaController')

const router = Router()

router.get('/licencas', LicencaController.pegaTodasAsLicencas)
router.post('/licenca/insert', LicencaController.criaLicenca)
router.put('/licenca/update/:id', LicencaController.atualizaLicenca)
router.delete('/licenca/delete/:id', LicencaController.apagaLicenca)

module.exports = router