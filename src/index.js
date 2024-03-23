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
  console.log(`Server has been started in <http://localhost:${port}>`);
});

//ENDPOINTS

//GET
app.get("/api/recetas", async (req, res) => {
  const paramSearch = req.query.search ? `%${req.query.search}%` : "%";

  try {
    const connection = await getConnection();
    const queryGetTasks = `
    SELECT * FROM recetas WHERE ingredientes LIKE ?;
  `;
    const todasRecetas = await connection.query(queryGetTasks, [paramSearch]);
    const [results] = todasRecetas;

    connection.end();

    res.json({
      info: { count: results.length },
      results: results,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Ha ocurrido un problema ${error}`,
    });
  }
});

app.get("/api/recetas/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const connection = await getConnection();
    const queryGetId = `SELECT * FROM recetas WHERE id = ?`;
    const [receta] = await connection.query(queryGetId, [id]);

    connection.end();

    if (receta.length === 0) {
      res.status(404).json({ success: false, message: "Receta no encontrada" });
    } else {
      res.json(receta[0]);
    }
  } catch (error) {
    res.json({
      success: false,
      message: `Ha ocurrido un problema ${error}`,
    });
  }
});

//POST
app.post("/api/recetas", async (req, res) => {
  const { nombre, ingredientes, instrucciones } = req.body;

  if (!nombre || !ingredientes || !instrucciones) {
    return res
      .status(400)
      .json({ success: false, error: "Todos los campos son obligatorios" });
  }
  try {
    const connection = await getConnection();
    const insertReceta = `INSERT INTO recetas (nombre, ingredientes, instrucciones) VALUES (?,?,?)`;
    const [resultadoReceta] = await connection.execute(insertReceta, [
      nombre,
      ingredientes,
      instrucciones,
    ]);

    connection.end();

    res.json({
      success: true,
      id: [resultadoReceta.insertId],
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Ha ocurrido un problema ${error}`,
    });
  }
});

//PUT
app.put("/api/recetas/:id", async (req, res) => {
  const id = req.params.id;

  const { nombre, ingredientes, instrucciones } = req.body;
  if (!nombre || !ingredientes || !instrucciones) {
    return res
      .status(400)
      .json({ success: false, error: "Todos los campos son obligatorios" });
  }

  try {
    const connection = await getConnection();
    const updateReceta = `UPDATE recetas SET nombre = ?, ingredientes = ?, instrucciones = ? WHERE id = ?`;
    await connection.execute(updateReceta, [
      nombre,
      ingredientes,
      instrucciones,
      id,
    ]);

    connection.end();

    res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Ha ocurrido un problema ${error}`,
    });
  }
});

//DELETE
app.delete("/api/recetas/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const connection = await getConnection();
    const deleteReceta = `DELETE FROM recetas WHERE id = ?`;
    await connection.execute(deleteReceta, [id]);

    connection.end();

    res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Ha ocurrido un problema ${error}`,
    });
  }
});
