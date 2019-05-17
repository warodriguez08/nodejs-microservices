const express = require('express')
const app = express()


//Rutas
app.get('/', inicio)
app.post('/', inicioPost)



var vista2='Bienvenido a la pagina de inicio en <strong>Node de prueba Post</strong>'

//Funciones
function inicio(req, res) {
  res.send('Bienvenido a la pagina de inicio <strong>Node de prueba</strong>')
}

function inicioPost(req, res){
  res.send(vista2)
}

app.listen(3000)
