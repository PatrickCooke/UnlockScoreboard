import _ from 'lodash';
import { GameScores, Scores } from './models/DataModels';


export const ReturnDataToDisplayableData = (scores: GameScores[]) => {
  let scoresToShow: Scores[] = []
  _.forEach(scores, function(game: GameScores) {
    let teamMembers = game.member1
    if (game.member2 !== null) {
      teamMembers.concat('/n' + game.member2)
    }
    if (game.member3 !== null) {
      teamMembers.concat('/n' + game.member3)
    }
    if (game.member4 !== null) {
      teamMembers.concat('/n' + game.member4)
    }
    if (game.member5 !== null) {
      teamMembers.concat('/n' + game.member5)
    }
    if (game.member6 !== null) {
      teamMembers.concat('/n' + game.member6)
    }
    const newScore: Scores = {
      teamName: game.teamName,
      puzzle: game.puzzle,
      time: game.minutes + ':' + game.seconds,
      members: teamMembers
    }
    scoresToShow.push(newScore)
  })
  return scoresToShow
}