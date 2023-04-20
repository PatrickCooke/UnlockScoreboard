import React, { useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import {useState} from 'react';
import InputForm from './InputForm';
import Scoreboard from './Scoreboard';
import { GameScores } from './models/DataModels';

const testData: GameScores[] = [
	{
		"teamName": "Go Team",
		"puzzle": "The Nautilus' Traps",
		"minutes": "20",
		"seconds": "45",
		"members": "Pat, Ted, Det",
	},
	{
		"teamName": "Go Team",
		"puzzle": "Sqeek & Sausage",
		"minutes": "50",
		"seconds": "48",
		"members": "Pat, Ted, Det",
	},
	{
		"teamName": "test",
		"puzzle": "The Nautilus' Traps",
		"minutes": "42",
		"seconds": "45",
		"members": "sam and jon",
	},
	{
		"teamName": "test",
		"puzzle": "The House on the Hill",
		"minutes": "45",
		"seconds": "45",
		"members": "sam and jon",
	}
]

function App() {
  // //uncomment to open live service
  // const retrieveData = () => {
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
  const [dataPulled, setDataPulled] = useState(false);

  useEffect(() => {
    if (!dataPulled) {
      setDataPulled(true);
      // retrieveData()
      setData(testData)
    }
  },[])

  const onClick = () => {
    setShowScores(showScores => !showScores);
  };

  const displayOptionButtonText =  showScores ? "Input Your Result" : 'Show Scores'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Record your game and see how you did!
        </p>
      </header>
      <button className='switchButton' onClick={onClick} >{displayOptionButtonText}</button>
      {!showScores && <InputForm />}
      {showScores && <Scoreboard scores={data} />}
    </div>
  );
}

export default App;
