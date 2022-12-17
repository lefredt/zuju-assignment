import { Request, Response, Router } from "express";
import * as MatchesController from "../controllers/calendar";
import { FilterCalendarDTO } from "../dto/matches.dto";

const calendarRouter = Router();

calendarRouter.get("/matchDates", async (req: Request, res: Response) => {
  const filters: FilterCalendarDTO = req.body;

  const results = await MatchesController.getAllDistDates(filters);
  return res.status(200).send(results);
});

export default calendarRouter;
