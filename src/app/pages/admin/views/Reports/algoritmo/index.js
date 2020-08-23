function agrupar(arregloEmprendimientos){
    let grupos = [] 
    let ids = []
    arregloEmprendimientos.forEach(a => {
        let indice = grupos.indexOf(a.sectoEconomico)
        if(indice === -1){
            indice = grupos.push(a.sectoEconomico) - 1
            ids.push([])   
        }
        ids[indice].push(a.idEmprendimiento)
    })
    //console.log({grupos, ids})
    return {grupos, ids}
}
function filtrarPorFechas(ganancias, fechaInicio, fechaFin){
    console.log(fechaInicio, fechaFin);
    let res = []
    ganancias.forEach(e => {
        let fechaGan = new Date(e.fechaGanancia);
        if(fechaInicio <= fechaGan && fechaGan <= fechaFin){
            res.push(e);
        }
    })
    //console.log(res)
    return res
}
function tabularGrupos(datos, fechasFiltradas){
    let nDatos = {grupos:[],totales:[]}
    //console.log("Llegan",fechasFiltradas)
    for(let i in datos.grupos){
        if(!nDatos.grupos.includes(datos.grupos[i])){
            nDatos.grupos.push(datos.grupos[i]);
            nDatos.totales.push(0)
        }
        datos.ids[i].forEach(id => {
            fechasFiltradas.forEach( gan => {
                if( id === gan.idEmprendimiento ){
                    nDatos.totales[i] = nDatos.totales[i] + gan.gananciaGenerada
                }
            })
        })
    }
    let pros = []
    for(let j in nDatos.grupos){
        pros.push({"grupo": nDatos.grupos[j], "total": nDatos.totales[j]})
    }
    console.log(pros);
    return pros
}
export {agrupar, filtrarPorFechas, tabularGrupos};