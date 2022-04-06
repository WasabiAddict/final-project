// This is an example of what would go in this file. Feel free to delete/overwrite these contents and rename the file. Remember to make a seperate file for each database table!
import * as express from "express";
const router = express.Router();

import db from "../db";

// // REST API
router.get("/:id?", async (req, res) => {
    try {
        const landfillid = req.params.id;

        if (landfillid) {
            const time = await db.Hours.filteredHours(landfillid);
            res.json(time);
        } else {
            const times = await db.Hours.allHours();
            res.json(times);
        }
    } catch (error) {
        console.log(error);
    }
});


export default router;