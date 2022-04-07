// This is an example of what would go in this file. Feel free to delete/overwrite these contents and rename the file. Remember to make a seperate file for each database table!
import * as express from "express";
const router = express.Router();

import db from "../db";

// // REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const location = await db.Landfills.oneLandfill(id);
            res.json(location);
        } else {
            const locations = await db.Landfills.allLandfills();
            res.json(locations);
        }
    } catch (error) {
        console.log(error);
    }
});


export default router;