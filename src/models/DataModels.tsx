export interface GamePlayed {
  teamName: String,
  puzzle: String,
  minutes: Number,
  seconds: Number,
  member1: String,
  member2?: String,
  member3?: String,
  member4?: String,
  member5?: String,
  member6?: String,
}

export interface GameScores {
  teamName: String,
  puzzle: String,
  minutes: String,
  seconds: String,
  members: String,
}

export interface Scores {
  teamName: String,
  puzzle: String,
  time: String,
  members: String,
}