import * as express from "express";
const router = express.Router();

import db from "../db";

// // REST API
router.get("/:id?", async (req, res) => {
    try {
        const id = req.params.id;

        if (id) {
            const message = await db.Reviews.oneRewiew(id);
            res.json(message);
        } else {
            const messages = await db.Reviews.allReviews();
            res.json(messages);
        }
    } catch (error) {
        console.log(error);
    }
});

// Create
router.post("/", async (req, res) => {
    try {
        const body = req.body;

        const reviewPost = await db.Reviews.insert(body.name, body.review);
        res.status(200).json(reviewPost);
    } catch (error) {
        console.log(error)
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const removeRewiew = await db.Reviews.remove(id);

        res.status(200).json(removeRewiew);
    } catch (error) {
        console.log(error);
    }
});

// Update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const review = req.body.content;

        const reviewUpdate = await db.Reviews.edit(id, review);

        res.status(200).json(reviewUpdate);
    } catch (error) {
        console.log(error)
    }
});


export default router;