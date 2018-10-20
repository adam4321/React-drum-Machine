import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Create an object that defines each button's information

const data = [
  { id: 'Snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'Bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'Cymbal', letter: 'E', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/95[kb]DR110OHT.wav.mp3" },
  { id: 'Tom Hi', letter: 'A', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/16[kb]ETOM_H.aif.mp3" },
  { id: 'Tom Mid', letter: 'S', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/18[kb]ETOM_M.aif.mp3" },
  { id: 'Tom Low', letter: 'D', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/kawai%20R50%20drumkit/27[kb]ETOM_L.aif.mp3" },
  { id: 'High hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'Clap', letter: 'X', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/57[kb]DR110CLP.wav.mp3" },
  { id: 'Ride', letter: 'C', src: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DR-110/116[kb]DR110CYM.wav.mp3"  },
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
        <h2>{this.props.letter}</h2>
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
