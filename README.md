***Tecnologias utilizadas para o desenvolvimento:***
- Visual Studio Code;
- NodeJS, versão 18.13.0;
- Body-Parser, versão ^1.20.1;  
- Express, versão ^4.18.2;
- Sequelize, versão ^5.21.7;
- Sequelize-Cli, versão ^5.5.1;
- Nodemon, versão ^2.0.20;
- MySQL, versão ^3.1.2;
- MYSQL Command Liner Client, versão 8.0;
- Postman, versão web.

## Download e Instalação dos Programas:

***Visual Studio Code***
```
https://code.visualstudio.com/
```

***NodeJS***
```
https://nodejs.org/en/
```

***MySQL (Servidor de Desenvolvimento)***
```
https://www.mysql.com/
```

***Postman***
```
https://www.postman.com/
```

## Na linha de comando do diretório API/api:


***Instalação do express***
```
npm install express
```

***Instalação do body-parser***
```
npm install body-parser
```

***Instalação do MySQL***
```
npm install mysql2
```

***Instalações do sequelize e sequelize-cli***
```
npm install sequelize@5.21.7 sequelize-cli@5.5.1
```

## Na linha de comando do MYSQL:

***Fazer login***
```
mysql -h localhost -u root -p
```

***Criar o Banco de Dados:***
```
create database cadastro;
```

***Usar de fato o Banco de Dados:***
```
use cadastro;
```

## No Visual Studio Code:

- Na pasta API\api\config alterar o arquivo config.json
- "username": (aqui colocar o seu usuário entre aspas duplas seguido de virgula)
- "password": (aqui colocar a sua senha entre aspas duplas seguido de senha ou null caso não houver senha)

## Na linha de comando do diretório API/api:

***Para dar inicio a API:***
```
node index.js
```

***Para criar as tabelas no Banco de Dados:***
```
npx sequelize db:migrate
```

***Para popular as tabelas com dados:***
```
npx sequelize db:seed:all
```

## Para testar as rotas da API via Postman:

***Rotas GET***

***Para retornar um JSON com todas as empresas cadastradas:***
```
http://localhost:3000/empresas
```

***Para retornar um JSON com todas as licenças cadastradas:***
```
http://localhost:3000/licencas
```

***Rotas POST***

***Para criar uma nova empresa:***
```
http://localhost:3000/empresa/insert
```
***Tipo de código esperado:***
```
{
    "razaosocial": "XXXXXXXXXX",
    "cnpj": "XXXXXXXXXX",
    "cep": "XXXXXXXXXX",
    "cidade": "XXXXXXXXXX",
    "estado": "XXXXXXXXXX",
    "bairro": "XXXXXXXXXX",
    "complemento": "XXXXXXXXXX"
}
```

***Para criar uma nova licença (só será possível se houver uma empresa já criada):***
```
http://localhost:3000/licenca/insert
```
***Tipo de código esperado:***
```
{
    "numero": "XXXXXXXXXX",
    "orgaoambiental": "XXXXXXXXXX",
    "emissao": "YYYY-MM-DD",
    "validade": "YYYY-MM-DD",
    "licenca_id": (ID da empresa relacionada)
}
```

***Rotas PUT***

***Para atualizar uma empresa específica (:id é o id da empresa):***
```
http://localhost:3000/empresa/update/:id
```
***Tipo de código esperado (pode ser uma ou mais informações de uma vez):***
```
{
    "razaosocial": "XXXXXXXXXX",
    "cnpj": "XXXXXXXXXX",
    "cep": "XXXXXXXXXX",
    "cidade": "XXXXXXXXXX",
    "estado": "XXXXXXXXXX",
    "bairro": "XXXXXXXXXX",
    "complemento": "XXXXXXXXXX"
}
```

***Para atualizar uma licença específica (:id é o id da licença):***
```
http://localhost:3000/licenca/update/:id
```
***Tipo de código esperado (pode ser uma ou mais informações de uma vez):***
```
{
    "numero": "XXXXXXXXXX",
    "orgaoambiental": "XXXXXXXXXX",
    "emissao": "YYYY-MM-DD",
    "validade": "YYYY-MM-DD",
    "licenca_id": (ID da empresa relacionada)
}
```

***Rotas DELETE***

***Para deletar uma empresa específica (:id é o id da empresa):***
```
http://localhost:3000/empresa/delete/:id
```
Obs: só será possível deletar uma empresa se não possuir nenhuma licença atrelada.


***Para deletar uma licença específica (:id é o id da licença):***
```
http://localhost:3000/licenca/delete/:id
```
