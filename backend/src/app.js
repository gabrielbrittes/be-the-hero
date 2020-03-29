/* Métodos HTTP
GET: Buscar uma informação no back-end
POST: Criar um informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end 
*/

/* Tipos de parâmetros: 

Query: Parametros nomeaos na rota após "?" (Filtros, paginação)
Route Params: Parametros utilizados para identificas recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
NoSql: MongoDB, CouchDB, etc
*/

/*
Driver: SELECT * FROM users
Query builder: table('users')
*/
const express = require('express');
const routes = require ('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;