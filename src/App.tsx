import React, { useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import {useState} from 'react';
import InputForm from './InputForm';
import Scoreboard from './Scoreboard';
import { GameScores } from './models/DataModels';
// import axios from 'axios'

const testData: [GameScores] = [
	{
		"teamName": "test",
		"puzzle": "testPuz",
		"minutes": "45",
		"seconds": "45",
		"member1": "Pat",
		"member2": "Ted",
		"member3": "Det",
		"member4": null,
		"member5": null,
		"member6": null
	}
]

function App() {
  // //uncomment to open live service
  // const submitHandler = () => {
  //   console.log('handler');
    
  //   fetch('https://sheet.best/api/sheets/7f2bc952-adb6-4eef-a2c0-abe76058e523')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  const [showScores, setShowScores] = useState(false);
  const emptyData: GameScores[] = []
  const [data, setData] = useState(emptyData);

  useEffect(() => {
    setData(testData)
  },[data])

  const onClick = () => {
    // submitHandler();
    setShowScores(showScores => !showScores);
  };

  // const onChange = (e: React.FormEvent<HTMLInputElement>, func: () => void) => {
  //   const newValue = e.currentTarget.value;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Record your game and see how you did!
        </p>
      </header>
      {!showScores && <InputForm />}
      <button onClick={onClick} >Show Scores</button>
      {showScores && <Scoreboard scores={data} />}
    </div>
  );
}

export default App;
