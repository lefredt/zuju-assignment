# zuju-assignment

### Pre-Requisite

MySQL v8.0.31  
NodeJS v18.12.1

### Database

#### Config

Configurations can be set in `.env` file  
Current Settings:

```
MYSQL_HOST="127.0.0.1"
MY_SQL_DATABASE="zujudb"
MYSQL_USERNAME="user"
MYSQL_PASSWORD="password"
```

#### Sample Data

```
INSERT INTO `zujudb`.`tournaments` (`name`, `createdAt`, `updatedAt`) VALUES ('SPL', '2022-01-01', '2022-01-01');
```

```
INSERT INTO `zujudb`.`teams` (`name`, `createdAt`, `updatedAt`) VALUES
    ('Lion City', '2022-01-01', '2022-01-01'),
    ('Hougang', '2022-01-01', '2022-01-01'),
    ('Tampines', '2022-01-01', '2022-01-01'),
    ('Balestier', '2022-01-01', '2022-01-01');
```

```
INSERT INTO `zujudb`.`match_detail` (`matchDate`, `homeTeamId`, `awayTeamId`, `tournamentId`, `createdAt`, `updatedAt`, `homeTeamScore`, `awayTeamScore`) VALUES
    ('2022-06-01', '1', '2', '1', '2022-06-01', '2022-06-01', '1', '0'),
    ('2022-06-02', '4', '3', '1', '2022-06-01', '2022-06-01', '1', '3'),
    ('2022-06-06', '3', '1', '1', '2022-06-01', '2022-06-01', '2', '2'),
    ('2022-06-06', '2', '4', '1', '2022-06-01', '2022-06-01', '0', '2'),
    ('2022-06-10', '4', '1', '1', '2022-06-01', '2022-06-01', NULL, NULL),
    ('2022-06-10', '3', '2', '1', '2022-06-01', '2022-06-01', NULL, NULL),
    ('2022-06-12', '2', '1', '1', '2022-06-01', '2022-06-01', NULL, NULL),
    ('2022-06-13', '3', '4', '1', '2022-06-01', '2022-06-01', NULL, NULL),
    ('2022-06-15', '1', '3', '1', '2022-06-01', '2022-06-01', NULL, NULL),
    ('2022-06-16', '4', '2', '1', '2022-06-01', '2022-06-01', NULL, NULL),
    ('2022-06-20', '1', '4', '1', '2022-06-01', '2022-06-01', NULL, NULL),
    ('2022-06-20', '2', '3', '1', '2022-06-01', '2022-06-01', NULL, NULL);
```

### Local Test

#### Start App

`npm run local-exec`  
Starting the app will automatically build the database tables.

### API Documentation

#### Fixtures Listing

```
GET /api/v1/matches/
Request Body
{
  offset?: number; Database offset
  limit?: number; Maximumn number of retrieved records (Defaults: 5)
  lastMatchId?: number; Fixture ID. Use in conjunction with lastMatchDate field as an alternate pagination approach
  lastMatchDate?: Date; Last retrieved date. For pagination
}


Response Body
{
  id: number; Fixture ID
  tournamentName: string; Tournament Name
  matchDate: Date; Match Date
  homeTeam: string; Home Team name
  awayTeam: string; Away Team name
  homeTeamScore?: number; Home team result
  awayTeamScore?: number; Away team result
}
```

Sample

```
Input:
{
    "limit": 3,
    "lastMatchId": 2,
    "lastMatchDate": "2022-06-02"
}

Output:
[
    {
        "id": 4,
        "tournamentName": "SPL",
        "matchDate": "2022-06-06T00:00:00.000Z",
        "homeTeam": "Hougang",
        "awayTeam": "Balestier",
        "homeTeamScore": 0,
        "awayTeamScore": 2
    },
    {
        "id": 3,
        "tournamentName": "SPL",
        "matchDate": "2022-06-06T00:00:00.000Z",
        "homeTeam": "Tampines",
        "awayTeam": "Lion City",
        "homeTeamScore": 2,
        "awayTeamScore": 2
    },
    {
        "id": 6,
        "tournamentName": "SPL",
        "matchDate": "2022-06-10T00:00:00.000Z",
        "homeTeam": "Tampines",
        "awayTeam": "Hougang",
        "homeTeamScore": null,
        "awayTeamScore": null
    }
]
```

#### Fixtures Calendar

```
GET /api/v1/calendar/matchDates
Request Body
{
  start: Date; Starting date
  end?: Date; Ending date
}


Response Body:
{
  uniqueDates: Date[]; Array of distinct dates (YYYY-MM-DD)
}
```

Sampple

```
Input:
{
    "start": "2022-06-12"
}

Output:
{
    "uniqueDates": [
        "2022-06-12",
        "2022-06-13",
        "2022-06-15",
        "2022-06-16",
        "2022-06-20"
    ]
}
```

### Unit Test

`npm run test`  
Prerequisite:  
MySQL running with sample data
