var express = require("express");
var router = express.Router();
const emprendedor = require("../models/emprendedor");

router.get("/", function(req, res, next) {
    emprendedor.findAll().then( emprendedor => {
        if(emprendedor){
            //console.log(emprendedor);
            res.json(emprendedor);
        }else{
        res.send("No existe ningún emprendedor con ese id");}
    }).catch(err => {
        res.send("Error: " + err);
    })
})

router.get("/:id", function(req, res, next) {
    emprendedor.findOne({
        where: {
            id: req.params.id
        }
    }).then( emprendedor => {
        if(emprendedor){
            res.json(emprendedor);
        }else{
            res.send("No existe ningún emprendedor con ese id");        }
    }).cathc(err => {
        res.send("Error: " + err);
    })
})
module.exports = router;