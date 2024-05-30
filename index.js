const express = require("express");
const app = express();
const port = 3001;
const { getZapa, getZapaById } = require("./controllers/zapatillas.controller");

app.get("/",getZapa);
app.get("/:id",getZapaById)


app.listen(port,()=>{
    
    console.log("Ahora siiiiiii");
    console.log(`Conectado existosamente en el puerto`);
})