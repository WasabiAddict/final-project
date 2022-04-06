// This is an example of what would go in this file. Feel free to delete/overwrite these contents and rename the file. Remember to make a seperate file for each database table!

import { Query } from "./index";

const allprices = () => Query("select * from admissioncategories join landfills on landfills.id = admissioncategories.landfillid");

const filteredPrices = (landfillid) => Query("select * from admissioncategories where admissioncategories.landfillid = ?", [landfillid]);

// const destroy = (id) => Query("delete from chirps where chirps.id = ?", [id]);

// const insert = (userid, content, location) => Query("insert into chirps (userid, content, location) values (?, ?, ?)", [userid, content, location]);

// const edit = (id, content) => Query("UPDATE chirps SET content = ? WHERE chirps.id = ?", [content, id]);

// // this becomes chirps in db/index.js and routes/chirps.js
export default {
    allprices,
    filteredPrices
    // destroy,
    // insert,
    // edit
}