import { Router } from "express";
import calendarRouter from "./calendar";
import matchesRouter from "./matches";

const router = Router();

router.use("/matches", matchesRouter);
router.use("/calendar", calendarRouter);

export default router;
