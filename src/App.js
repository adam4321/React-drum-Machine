/***********************************************************************
**  Author:       Adam Wright
**  Description:  Drum machine built with JavaScript and React
***********************************************************************/

// @ts-check

import React from 'react';
import './App.css';
import DrumPad from './DrumPad.js';


/* Import sound samples ---------------------------------------------------- */

// @ts-ignore
import snare from './mp3_samples/snare-sample.mp3';
// @ts-ignore
import bass from './mp3_samples/kick-sample.mp3';
// @ts-ignore
import cymbal from './mp3_samples/crash-sample.mp3';
// @ts-ignore
import tom1 from './mp3_samples/hi-tom-sample.mp3';
// @ts-ignore
import tom2 from './mp3_samples/mid-tom-sample.mp3';
// @ts-ignore
import tom3 from './mp3_samples/low-tom-sample.mp3';
// @ts-ignore
import closed from './mp3_samples/hh-sample.mp3';
// @ts-ignore
import clap from './mp3_samples/china-sample.mp3';
// @ts-ignore
import ride from './mp3_samples/ride-sample.mp3';


/* Object that defines each button's properties ---------------------------- */
const data = [
  { id: 'Snare', button: 'Shift', code: 16, src: snare },
  { id: 'Bass Drum', button: 'Space', code: 32, src: bass },
  { id: 'High hat', button: 'Enter', code: 13, src: closed },
  { id: 'Tom Hi', button: 'A', code: 65, src: tom1 },
  { id: 'Tom Mid', button: 'S', code: 83, src: tom2 },
  { id: 'Tom Low', button: 'D', code: 68, src: tom3 },
  { id: 'Crash', button: 'Q', code: 81, src: cymbal },
  { id: 'China', button: 'W', code: 87, src: clap },
  { id: 'Ride', button: '\\', code: 220, src: ride },
]

 
/* Drum machine component -------------------------------------------------- */

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Hit Me !'
        };
    }

    handleDisplay = display => this.setState({display});

    render() {
        return (
            <div>
                <div id="drum-machine">
                    <h1 id="title">React Drum Machine</h1>
                    <div id="display"> {this.state.display} </div>
                    <div id="drum-pads">
                        {data.map(d => (
                            <DrumPad
                                id={d.id}
                                code={d.code}
                                src={d.src}
                                button={d.button}
                                handleDisplay={this.handleDisplay}
                            />
                        ))}
                    </div>
                    <p id="attribution">By Adam Wright</p>
                </div>
                <button id="back-button" onClick={() => window.history.back()}> Back </button>
            </div>
        );
    }
}

export default App;
