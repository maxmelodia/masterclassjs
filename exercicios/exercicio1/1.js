const sql = "create table author (id number, name string, age number, city string, state string, country string)";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parseStatement = sql.match(regexp);
const tableName = parseStatement[1];
let collumns =  parseStatement[2];
collumns = collumns.split(", ");
console.log(tableName);
console.log(collumns);
