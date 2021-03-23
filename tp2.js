nuevoArray = funcion(nombres)
console.log(JSON.stringify(nuevoArray))

function funcion(nombres){
  const resultado = nombres.map(function(nombre) {
                obj = {
                        "nombre": nombre,
                        "longitud": nombre.length
                      }     
                return obj   
})
return resultado
}