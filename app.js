const express = require('express');
const app = express();
app.use(express.json());

// Importacion del Router de Libros
const librosRouter = require('./routes/libros');

// Importacion del Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');
app.use('/libros', librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

//Se pide el errorhandler
const errorHandler = require("./middleware/errorHandler")
app.use(errorHandler);

//Aqui pedimos la nueva libreria "express-oauth2-jwt-bearer" (de seguridad)
const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middleware/errorHandler");

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
audience: "http://localhost:3000/api/productos",
issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
tokenSigningAlg: "RS256",
});
const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

//Configuramos el middleware de autenticacion
app.use("/libros", autenticacion, librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});


