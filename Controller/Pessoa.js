import { openDb } from '../configDB.js';

export default async function creatTable(){
    openDb() .then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}