const bodyParser = require('body-parser')
const empresas = require('./empresasRoute')
const licencas = require('./licencasRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        empresas,
        licencas
    )
}
