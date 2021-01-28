/***********************************************************************
**  Author:       Adam Wright
**  Description:  Drum machine built with JavaScript and React
***********************************************************************/

import React, {useState} from 'react';
import './App.css';
import DrumPad from './DrumPad.js';


/* Import sound samples ---------------------------------------------------- */

import snare from './wav/snare-sample.wav';
import bass from './wav/kick-sample.wav';
import cymbal from './wav/crash-sample.wav';
import tom1 from './wav/hi-tom-sample.wav';
import tom2 from './wav/mid-tom-sample.wav';
import tom3 from './wav/low-tom-sample.wav';
import closed from './wav/hh-sample.wav';
import china from './wav/china-sample.wav';
import ride from './wav/ride-sample.wav';


// @ts-check

/* Object that defines each button's properties ---------------------------- */
const buttons = [
  { id: 'Snare',     label: 'Shift', code: 16, src: snare },
  { id: 'Bass Drum', label: 'Space', code: 32, src: bass },
  { id: 'High hat',  label: 'Enter', code: 13, src: closed },
  { id: 'Tom Hi',    label: 'A',     code: 65, src: tom1 },
  { id: 'Tom Mid',   label: 'S',     code: 83, src: tom2 },
  { id: 'Tom Low',   label: 'D',     code: 68, src: tom3 },
  { id: 'Crash',     label: 'Q',     code: 81, src: cymbal },
  { id: 'China',     label: 'W',     code: 87, src: china },
  { id: 'Ride',      label: '\\',    code: 220, src: ride },
]

 
/* Drum machine component -------------------------------------------------- */

function App() {
    const [display, setDisplay] = useState('Hit Me!')

    const handleDisplay = (id) => {
        setDisplay(id);
    }

    return(
        <>
            <div id="gh-bar">
                <a 
                    id="gh-link" 
                    href="https://github.com/adam4321/React-drum-Machine" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <div>Open GitHub repo in a new tab</div>
                </a>
            </div>
            
            <div id="drum-machine">
                <h1 id="title">React Drum Machine</h1>

                <div id="display"> {display} </div>

                <div id="drum-pads">
                    {buttons.map(b => (
                        <DrumPad
                            key={b.id}
                            id={b.id}
                            code={b.code}
                            src={b.src}
                            button={b.label}
                            handleDisplay={handleDisplay}
                            value={display}
                        />
                    ))}
                </div>
                
                <p id="attribution">By Adam Wright</p>
            </div>
            
            <button id="back-button" onClick={() => window.history.back()}> Back </button>
        </>
    );
}

export default App;
