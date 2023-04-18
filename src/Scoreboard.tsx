import React, { useMemo } from "react";
import "./App.css";
import { GameScores, Scores } from "./models/DataModels";
import { ReturnDataToDisplayableData } from "./util";
import { unlockedGames } from "./unlockedGames";

interface scoreboardInterface {
  scores: GameScores[];
}

const Scoreboard = ({ scores }: scoreboardInterface) => {
  const data = useMemo(() => ReturnDataToDisplayableData(scores), []);
  const printScores = () => {
    console.log(data);
  };
  return (
    <div className="Scoreboard">
      <label className="ScoreboardText">ScoreBoard</label>
      <table>
        <thead>
          <tr>
            <td className="tableHeader">Puzzle</td>
            <td className="tableHeader">Team Name</td>
            <td className="tableHeader">Time</td>
            <td className="tableHeader">Team Members</td>
          </tr>
        </thead>
        <tbody>
          {data.map((record, i) => (
            <tr key={i}>
              <td>{record.teamName}</td>
              <td>{record.puzzle}</td>
              <td>{record.time}</td>
              <td>{record.members}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={printScores}>Print</button> */}
    </div>
  );
};

export default Scoreboard;
