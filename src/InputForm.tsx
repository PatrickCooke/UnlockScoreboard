import React, { useState } from "react";
import { unlockedGames } from "./unlockedGames";
import { GameScores } from "./models/DataModels";
import { combineTeamMemberes } from "./util";

function InputForm() {
  const [teamName, setTeamName] = useState("");
  const [puzzle, setpuzzle] = useState(unlockedGames["Sqeek & Sausage"]);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [member4, setMember4] = useState("");
  const [member5, setMember5] = useState("");
  const [member6, setMember6] = useState("");

  const onClick = () => {
    const record: GameScores = {
      teamName: teamName,
      puzzle: puzzle,
      minutes: String(minutes),
      seconds: String(seconds),
      members: combineTeamMemberes([member1, member2, member3, member4, member5, member6])
    }
    console.log(record)
  };

  return (
    <div>
      <label className="text">
        Puzzle:
        <select name="selectedPuzzle" defaultValue={puzzle} >
          {createGameOption(unlockedGames['Sqeek & Sausage'])}
          {createGameOption(unlockedGames['The House on the Hill'])}
          {createGameOption(unlockedGames["The Nautilus' Traps"])}
        </select>
      </label>
      <form className="text">
        <label>Time:</label>
        <input
          type="number"
          id="min"
          name="minutes"
          min="0"
          max="60"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.currentTarget.value))}
        />
        <input
          type="number"
          id="sec"
          name="seconds"
          min="0"
          max="59"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.currentTarget.value))}
        />
      </form>
      <form className="text">
        <label>Team Name:</label>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.currentTarget.value)}
        />
      </form>
      <form className="text">
        <label>Player 1:</label>
        <input
          type="text"
          value={member1}
          onChange={(e) => setMember1(e.currentTarget.value)}
        />
      </form>
      <form className="text">
        <label>Player 2:</label>
        <input
          type="text"
          value={member2}
          onChange={(e) => setMember2(e.currentTarget.value)}
        />
      </form>
      <form className="text">
        <label>Player 3:</label>
        <input
          type="text"
          value={member3}
          onChange={(e) => setMember3(e.currentTarget.value)}
        />
      </form>
      <form className="text">
        <label>Player 4:</label>
        <input
          type="text"
          value={member4}
          onChange={(e) => setMember4(e.currentTarget.value)}
        />
      </form>
      <form className="text">
        <label>Player5:</label>
        <input
          type="text"
          value={member5}
          onChange={(e) => setMember5(e.currentTarget.value)}
        />
      </form>
      <form className="text">
        <label>Player 6:</label>
        <input
          type="text"
          value={member6}
          onChange={(e) => setMember6(e.currentTarget.value)}
        />
      </form>
      <button onClick={onClick}>Save</button>
    </div>
  );

  function createGameOption(title: unlockedGames) {
    return <option
      value={title}
      onChange={() => setpuzzle(title)}
    >
      {title}
    </option>;
  }
}

export default InputForm;
