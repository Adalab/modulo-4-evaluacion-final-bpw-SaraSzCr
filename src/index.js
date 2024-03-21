// IMPORTAR BIBLIOTECAS
const express = require('express');
const cors = require('cors');
//
const mysql = require('mysql2/promise');


//CREAR VARIABLES
const app = express();
const port = 4000;


//CONFIGURACIÓN EXPRESS
app.use(cors());
app.use(express.json({limit: '25Mb'}));



//CONFIGURACIÓN MYSQL




//ARRANCAR

app.listen(port, () => {
  console.log(`Server has been started in <http://localhost:${port}`);
})



//ENDPOINTS

// app.get('/', (req, res) =>{
//   res.send ('Holis!')
// })

