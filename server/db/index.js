import * as mysql from "mysql";

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: "dumpsite",
    user: 'team5',
    password: 'team5admin'
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
}

import landfills from "./landfills";
import landfilltypes from "./landfilltypes";
import hours from "./hours";
import prices from "./prices";

// // this becomes db object in routes/chirps.js
export default {
    landfills,
    landfilltypes,
    hours,
    prices
}