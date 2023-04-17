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
  member1: String,
  member2: String | null,
  member3: String | null,
  member4: String | null,
  member5: String | null,
  member6: String | null,
}

export interface Scores {
  teamName: String,
  puzzle: String,
  time: String,
  members: String,
}