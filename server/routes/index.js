import * as express from "express";
const router = express.Router();

import admissionRouter from "./admission";
import locationRouter from "./locations";
import wastetypesRouter from "./wastetypes";
import timesRouter from "./times";

// // localhost:3000/api/chirps/
router.use("/admission", admissionRouter);
router.use("/locations", locationRouter);
router.use("/wastetypes", wastetypesRouter);
router.use("/times", timesRouter);

export default router;