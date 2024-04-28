# API SERVER RECIPES 

Este ejercicio consiste en desarrollar un API que permita insertar, modificar, listar y eliminar recetas de cocina.

El servidor está implementado utilizando Node.js y Express, y se conecta a una base de datos MySQL para almacenar y recuperar la información de las recetas y los usuarios.

He utilizado la aplicación Postman para realizar los tests de los endpoints.

Para realizar el ejercicio, he configurado previamente el servidor y he instalando e importando las siguientes bibliotecas:

- express
- cors
- mysql2
- dot env


### Tecnologías utilizadas 🛠️

- JavaScript
- Node.js
- MYSQL
- MYSQL Workbench
- Json


### Link de Render 🔗

https://modulo-4-evaluacion-final-bpw-saraszcr.onrender.com

## Guía de incio rápido 📖

Esta guía te permite tener una copia del ejercicio y ejecutarlo

**Nota** Necesitas tener instalado [Node JS] (https://nodejs.org/)

### Instalación y ejecución 🚀

Ejecuta estos comandos en la Terminal:

1. **Clona el repositorio**:
  https://github.com/Adalab/modulo-4-evaluacion-final-bpw-SaraSzCr.git

2. **Instala las _dependecias locales_**:
   `npm install`

3. **Arranca el proyecto**
   `npm run dev`

La API estará funcionando en http://localhost:4000


## Ejemplos de los diferentes endpoints

El metodo GET se puede probar en el navegador. Para el resto de metodos es necesario usar Postman o cualquier otro metodo para testear api endpoints.

**Obtener todas las recetas**
 ```
 GET /api/recetas
 ```

 **Obtener una receta según su id**
 ```
 GET /api/recetas/3
 ```

**Obtener una receta por ingrediente**
```
GET /api/recetas/ingrediente/patata
```

 **Añadir receta**
 ```
 POST /api/recetas
 ```

 **Actualizar una receta existente por su id**
```
 PUT /api/recetas/:id
 ```

 **Eliminar una receta por su id**
```
 DELETE /api/recetas/:id
 ```


## Autora 👩🏻‍💻

Sara Sánchez Crespo

[Github] (https://github.com/SaraSzCr)
[Linkedin] (www.linkedin.com/in/sara-sanchez-crespo)
[email] (scresposara@gmail.com)
