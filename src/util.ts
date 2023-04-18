import _ from 'lodash';
import { GameScores, Scores } from './models/DataModels';


export const ReturnDataToDisplayableData = (scores: GameScores[]) => {
  let scoresToShow: Scores[] = []
  _.forEach(scores, function(game: GameScores) {
    const newScore: Scores = {
      teamName: game.teamName,
      puzzle: game.puzzle,
      time: game.minutes + ':' + game.seconds,
      members: game.members
    }
    scoresToShow.push(newScore)
  })
  scoresToShow.sort((a, b) => a.puzzle > b.puzzle ? 1 : -1)
  return scoresToShow
}

export const combineTeamMemberes = (members: string[]) => {
  const noEmptryStrings = members.filter((member) => member !== "")
  return noEmptryStrings.join(", ")
}
