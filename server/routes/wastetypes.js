// This is an example of what would go in this file. Feel free to delete/overwrite these contents and rename the file. Remember to make a seperate file for each database table!
import * as express from "express";
const router = express.Router();

import db from "../db";

// // REST API
router.get("/:id?", async (req, res) => {
    try {
        const landfillid = req.params.id;

        if (landfillid) {
            const type = await db.Landfilltypes.filteredTypes(landfillid);
            res.json(type);
        } else {
            const types = await db.Landfilltypes.allTypes();
            res.json(types);
        }
    } catch (error) {
        console.log(error);
    }
});


export default router;