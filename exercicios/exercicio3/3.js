
const database = {
    tables: {},
    createTable(statement) {
        const regexp = /create table ([a-z]+) \((.+)\)/;
        const parseStatement = statement.match(regexp);
        const tableName = parseStatement[1];

        this.tables[tableName] = {
            columns: {},
            data: []
        };
       
        let columns =  parseStatement[2];
        columns = columns.split(", ");

        for (let column of columns) {
            column = column.split(" ");
            const name =  column[0];
            const type = column[1];
            this.tables[tableName].columns[name] = type;
        }
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement);
        }
        throw new Error("Inválid Command")
    }
}

database.execute("create table author (id number, name string, age number, city string, state string, country string)");
console.log(JSON.stringify(database, undefined, " "));
