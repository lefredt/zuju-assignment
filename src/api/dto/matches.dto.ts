export type FilterFixturesDTO = {
  offset?: number;
  limit?: number;
  lastMatchId?: number;
  lastMatchDate?: Date;
};

export type FilterCalendarDTO = {
  start: Date;
  end?: Date;
};
