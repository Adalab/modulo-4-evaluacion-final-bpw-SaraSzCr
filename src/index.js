// IMPORTAR BIBLIOTECAS
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2/promise");

//CREAR VARIABLES
const app = express();
const port = 4000;

//CONFIGURACIÓN EXPRESS
app.use(cors());
app.use(express.json({ limit: "25Mb" }));

//CONFIGURACIÓN MYSQL

const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_SCHEMA || "recetas_db",
  });

  
  await connection.connect();

  console.log(
    `Conexión establecida en la base de datos (identificador=${connection.threadId})`
  );

  return connection;
};

//ARRANCAR

app.listen(port, () => {
  console.log(`Server has been started in <http://localhost:${port}`);
});

//ENDPOINTS

//GET

app.get('/api/recetas', async (req, res) => {

  const paramSearch = req.query.search ? `%${req.query.search}%` : '%';

  const connection = await getConnection();

  const queryGetTasks = `
    SELECT * FROM recetas WHERE ingredientes LIKE ?;
  `;


  const severalReceipes = await connection.query(queryGetTasks, [paramSearch]);

  const [results] = severalReceipes;

  res.json(results);

  

  });

//   app.get ('api/recetas/:id', async (req, res) => {

//    const connectionID = await getConnection();

//    const queryGetReceipes = `SELECT * FROM recetas WHERE id LIKE ?;
//   // `;

//    const [resultsID] = await connectionID.query(queryGetReceipes);

//   res.json(resultsId);
// });

//POST

//PUT

//DELETE
