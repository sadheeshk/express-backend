/*let players = [
  { _id: 1, vname: "Sachin", runs: "18426" },
  { _id: 2, vname: "Dhoni", runs: "10500" },
  { _id: 3, vname: "Virat", runs: "10843" }
];
module.exports = players;*/

'use strict';

const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=D:\\learn\\msaccess\\mydb2.mdb;Persist Security Info=False;');

let players=[];
  /*  connection
      .query('SELECT * FROM Users')
      .then(data => {
        players=JSON.stringify(data);
        console.log("v---"+players);
      })
      .catch(error => {
        console.error(error);
      });


  console.log("expo");
  module.export=players; */
  async function query() {
    try {
      const users = await connection.query('SELECT * FROM Users');

      console.log(JSON.stringify(users, null, 2));
    } catch (error) {
      console.error(error);
    }
  }

  query();
