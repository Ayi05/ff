
const mongoose = require('mongoose');

const uri = "mongodb+srv://raw-list_35:Rawlist0904@fast-api.xnfff.mongodb.net/focus_store?retryWrites=true&w=majority";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options)
    .then(() => { 
        console.log('Connexion avec Atlas Établie!...') 
    },
    err => { 
        console.log('Erreur lors de la connexion:', err)
    });

require("../models/Task");