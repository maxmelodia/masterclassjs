const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parseStatement = statement.match(regexp);
const tableName = parseStatement[1];
let columns =  parseStatement[2];
columns = columns.split(", ");

const database = {
    tables: {
       [tableName]: {
            columns: {},
            data: []
       }
    }
}

for (let column of columns) {
    column = column.split(" ");
    const name =  column[0];
    const type = column[1];
    database.tables[tableName].columns[name] = type;
}

console.log(JSON.stringify(database, undefined, " "));
