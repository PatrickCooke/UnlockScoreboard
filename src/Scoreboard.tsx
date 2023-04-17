import React, {useMemo} from 'react';
import './App.css';
import {GameScores, Scores} from './models/DataModels';
import {ReturnDataToDisplayableData} from './util';

interface scoreboardInterface {
  scores: GameScores[];
}

const Scoreboard = ({scores}: scoreboardInterface) => {
  const data = useMemo(() => ReturnDataToDisplayableData(scores), []);
  const printScores = () => {
    console.log(data)
  }
  return (
    <div className='Scoreboard'>
      <label className='ScoreboardText'>
        ScoreBoard
      </label>
      <tbody>
          <tr>
            <th>TeamName</th>
            <th>Puzzle</th>
            <th>Time</th>
            <th>Team Members</th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.teamName}</td>
              <td>{item.puzzle}</td>
              <td>{item.time}</td>
              <td>{item.members}</td>
            </tr>
          ))}
    </tbody>
      {/* <button onClick={printScores}>Print</button> */}
    </div>
  )
}

export default Scoreboard;
