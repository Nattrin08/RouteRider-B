// importación del módulo mongoose
const mongoose = require('mongoose');

// dirección de la base de datos en MongoDb


// conexión a la base de datos
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => console.log('Conexión exitosa a la base de datos'))
// .catch(err => console.error('Error al conectar a la base de datos', err));

// creación del esquema
const commentSchema = new mongoose.Schema({
    userEmail: {type: String, required: true},
    userComment: {type: String, required: true},
    commentRoute: {type: String, required: true},
    commentDate: {type: Date, required: true}
});

// exportación del esquema a la colección en la base de datos
module.exports = mongoose.model('comments', commentSchema);