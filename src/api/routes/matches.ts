import { Request, Response, Router } from "express";
import * as MatchesController from "../controllers/matches";
import { FilterFixturesDTO } from "../dto/matches.dto";

const matchesRouter = Router();

matchesRouter.get("/", async (req: Request, res: Response) => {
  const filters: FilterFixturesDTO = req.body;

  const results = await MatchesController.getAll(filters);
  return res.status(200).send(results);
});

export default matchesRouter;
