<<<<<<< HEAD

//ts-check

import React from 'react';
import './App.css';
import snare from './snare.mp3'
import bass from './bass-drum.mp3'
import cymbal from './cymbal.wav'
import tom1 from './hi-tom.mp3'
import tom2 from './mid-tom.mp3'
import tom3 from './low-tom.mp3'
import closed from './closed.wav'
import clap from './clap.mp3'
import ride from './ride.mp3'
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
>>>>>>> upstream/master


// Create an object that defines each button's information

const data = [
<<<<<<< HEAD
  { id: 'Snare', letter: 'Q', src: snare },
  { id: 'Bass Drum', letter: 'W', src: bass },
  { id: 'Cymbal', letter: 'E', src: cymbal },
  { id: 'Tom Hi', letter: 'A', src: tom1 },
  { id: 'Tom Mid', letter: 'S', src: tom2 },
  { id: 'Tom Low', letter: 'D', src: tom3 },
  { id: 'High hat', letter: 'Z', src: closed },
  { id: 'Clap', letter: 'X', src: clap },
  { id: 'Ride', letter: 'C', src: ride },
=======
  { id: 'Snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'Bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'Cymbal', letter: 'E', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/95[kb]DR110OHT.wav.mp3" },
  { id: 'Tom Hi', letter: 'A', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/16[kb]ETOM_H.aif.mp3" },
  { id: 'Tom Mid', letter: 'S', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/18[kb]ETOM_M.aif.mp3" },
  { id: 'Tom Low', letter: 'D', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/27[kb]ETOM_L.aif.mp3" },
  { id: 'High hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'Clap', letter: 'X', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/57[kb]DR110CLP.wav.mp3" },
  { id: 'Ride', letter: 'C', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/116[kb]DR110CYM.wav.mp3"  },
>>>>>>> upstream/master
]

// Create the drum machine component

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'Hit Me!'
    }
  }
  
//   Display Handler
  
  handleDisplay = display => this.setState({ display })
  
  render() {
    return <div id='drum-machine'>
      <h1 id='title'>React Drum Machine</h1>
      <div id='display'>{this.state.display}</div>
      <div id='drum-pads'>
      {data.map(d => (
      <DrumPad 
        id={d.id}
        letter={d.letter}
        src={d.src}
        handleDisplay={this.handleDisplay}
        />
      ))}
      </div> 
      <p id='attribution'>By Adam Wright</p>
    </div>
  }
}

// Create the button component

class DrumPad extends React.Component {
  
//   Functions to connect Keyboard to buttons
  
  componentDidMount() {
    document.addEventListener('keydown',this.handleKeyDown)
    window.focus()
  }
  
  componentWillUnmount(){
    document.removeEventListener('keydown',this.handleKeyDown)
  }
  
  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()){
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
  
//   Button's clickhandler function
  
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render(){
    return (
      <div 
        className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
        >
<<<<<<< HEAD
        <h3 id='button-letter'>{this.props.letter}</h3>
=======
        <h2>{this.props.letter}</h2>
>>>>>>> upstream/master
        <audio
          ref={ref => this.audio = ref}
          className='clip'
          src={this.props.src}
          id={this.props.letter}>
        </audio>
      </div>
    );
  }
}

export default App;
