import React from 'react';
//import logo from './logo.svg';
import './App.css';
import StandardNotationDisplay from './StandardNotationDisplay';

function App() {
  
  let scales = [
    {
      intervals: [2, 2, 1, 3, 1, 2, 1],
      root: 0,
      tones: 12,
      names: ['Ionian sharp 5', 'Ionian Augmented']
    },
    {
      "intervals": [
          2, 
          1, 
          2, 
          2, 
          2, 
          1, 
          2
      ], 
      "root": 0, 
      "names": [
          "G.Phrygian", 
          "M.Dorian", 
          "M.Hypomixolydian", 
          "Kafi That", 
          "Mela Kharaharapriya", 
          "Raga Bageshri", 
          "Bhimpalasi", 
          "Nayaki Kanada", 
          "Sriraga", 
          "Ritigaula", 
          "Huseni", 
          "Kanara", 
          "Mischung 5", 
          "Gregorian nr.8", 
          "Eskimo Heptatonic", 
          "Yu: China", 
          "Hyojo", 
          "Oshikicho", 
          "Banshikicho: Japan", 
          "Nam: Vietnam"
      ], 
      "tones": 12
  }
  ];

  let useFlats = false;
  let startingNote = 0;

  return (
    <div className="App">
      <div id="musicScales">
        {scales.map((scale) =>
          <div>
            <StandardNotationDisplay
              scale={scale}
              startingNote={startingNote}
              useFlats={useFlats}
            />
            {scale.names.map((name) => <div>{name}</div>)}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
