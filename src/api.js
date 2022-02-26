export const getSeasons = () =>
  `soccer/trial/v4/en/competitions/sr:competition:202/seasons.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getAllResults = (season_id) =>
  `soccer/trial/v4/en/seasons/${season_id}/schedules.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getSeasonalStats = (season_id) =>
  `soccer/trial/v4/en/seasons/${season_id}/standings.json?api_key=${process.env.REACT_APP_SPORTRADAR_KEY}`;

export const getDetailedMatchStats = (match_id) =>
  `soccer/trial/v4/en/sport_events/${match_id}/fun_facts.json?api_key=qvhee5wyv427b3ue7kgp9cvb`;
