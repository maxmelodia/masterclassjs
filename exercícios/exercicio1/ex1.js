const sql = "create table author (id number, name string, age number, city string, state string, country string)";

//Extraia o nome da tabela e armazene em uma variável chamada "tableName".

//let regExp = 

//g = RegExp.prototype.global

//const tableName = sql.match(/(\w+)/g)
const tableName = sql.match(/a/)



//const tableName = sql.split(' ')[2];
console.log(tableName);

//Extraia as colunas da tabela e armazene em uma variável chamada "columns".
//let regExp = /[\(]/;
//const colums = regExp.exec(sql);
//console.log(colums);




//Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.