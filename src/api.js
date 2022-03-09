export const getSeasons = () =>
  `https://api.sportradar.us/soccer/trial/v4/en/competitions/sr:competition:202/seasons.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getAllResults = (season_id) =>
  `https://api.sportradar.us/soccer/trial/v4/en/seasons/${season_id}/schedules.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getSeasonalStats = (season_id) =>
  `https://api.sportradar.us/soccer/trial/v4/en/seasons/${season_id}/standings.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getDetailedMatchStats = (match_id) =>
  `https://api.sportradar.us/soccer/trial/v4/en/sport_events/${match_id}/summary.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getDetailedMatchLineUp = (match_id) =>
  `https://api.sportradar.us/soccer/trial/v4/en/sport_events/${match_id}/lineups.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getSeasonLeaders = () =>
  `https://api.sportradar.us/soccer/trial/v4/en/seasons/sr:season:84320/leaders.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getFactsAboutMatch = (match_id) =>
  `  https://api.sportradar.us/soccer/trial/v4/en/sport_events/${match_id}/fun_facts.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;
