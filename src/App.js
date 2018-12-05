
//ts-check

import React from 'react';
import './App.css';
import snare from './snare-sample.wav'
import bass from './kick-sample.wav'
import cymbal from './crash-sample.wav'
import tom1 from './hi-tom-sample.wav'
import tom2 from './mid-tom-sample.wav'
import tom3 from './low-tom-sample.wav'
import closed from './hh-sample.wav'
import clap from './china-sample.wav'
import ride from './ride-sample.wav'


// Create an object that defines each button's information

const data = [
  { id: 'Snare', letter: 'Q', src: snare },
  { id: 'Bass Drum', letter: 'W', src: bass },
  { id: 'Cymbal', letter: 'E', src: cymbal },
  { id: 'Tom Hi', letter: 'A', src: tom1 },
  { id: 'Tom Mid', letter: 'S', src: tom2 },
  { id: 'Tom Low', letter: 'D', src: tom3 },
  { id: 'High hat', letter: 'Z', src: closed },
  { id: 'China', letter: 'X', src: clap },
  { id: 'Ride', letter: 'C', src: ride },
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
    return <div>
    <div id='drum-machine'>
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
    <button id='back-button'><a href='https://adamjwright.com'>Back</a></button>
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
        <h3 id='button-letter'>{this.props.letter}</h3>
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
