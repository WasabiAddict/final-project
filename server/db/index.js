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

import Landfills from "./landfills";
import Landfilltypes from "./landfilltypes";
import Hours from "./hours";
import Prices from "./prices";
import Reviews from "./reviews";

// // this becomes db object in routes/chirps.js
export default {
    Landfills,
    Landfilltypes,
    Hours,
    Prices,
    Reviews
}