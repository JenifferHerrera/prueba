const express = require('express');
const app = express();


//setting
app.set('port', 8081);

//routes
app.get('/',(req, res)=> {
    res.send('hola mundo')

    res.json(validacionCedula);
})

// El Servidor esta escuchando
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });
