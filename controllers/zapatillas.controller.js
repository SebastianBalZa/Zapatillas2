const {request , response} = require("express");
const {zapatillas} = require("../zapatillas");

const getZapa = (req= request, res=response)=>{
    return res.json({
        status:true,
        zapatillas,
        statusCode:200
    });
}
const getZapaById=(req= request, res=response)=>{
    let id = req.params.id;

    if(!req.params.id){
        return res.json({
            msg:"Debe agregar un id para realizar la busqueda"
        })
    }
    let zapaABuscar ="";

    zapaABuscar = zapatillas.find((zapatillas)=>{
        return zapatillas.id ===id
    });
    if(zapaABuscar){
        return res.json({
            ok:true,
            zapaABuscar,
            statusCode:200
        })
    }else{
        return res.json({
            ok:false,
            msg:"No hay zapatillas con ese id",
            statusCode:404
        })
    }
}
module.exports={
    getZapa,
    getZapaById
}