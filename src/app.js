//import {openDb} from './configDB.js';
import { createTable } from './Controller/Pessoa.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();



app.get('/', function(req, res){
    res.send("hello world");
})

app.post('/pessoa', function(req, res){
     console.log(req.body);
     res.json({
        "statusCode": 200
     })
});

app.listen(3000, ()=> console.log("api rodando."))