/****************************************************************
**  DrumPad button component
****************************************************************/

import React from 'react';
import './App.css';

class DrumPad extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        window.focus();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    /* Create overlapping samples ------------------------------------------ */
    Channel = (audio_uri) => {
        this.sample = new Audio(audio_uri);
        this.sample.play();
    };

    Switcher = (audio_uri, num) => {
        this.channels = [];
        this.num = num;
        this.index = 0;

        for (let i = 0; i < num; i++) {
            this.channels.push(this.Channel(audio_uri));
        }

        this.Switcher.play = () => {
            this.channels[this.index++].play();
            this.index = this.index < this.num ? this.index : 0;
        };
    };

    /* Play sound on keyboard button press --------------------------------- */
    handleKeyDown = e => {
        if (e.keyCode === this.props.code) {
            this.Switcher(this.props.src, 1);
            this.audio.currentTime = 0;
            this.props.handleDisplay(this.props.id);
        }
    };

    /* Play sound on mouse click ------------------------------------------- */
    handleClick = () => {
        this.Switcher(this.props.src, 1);
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
    };

    render() {
        return (
            <div
                className="drum-pad"
                id={this.props.id}
                onClick={this.handleClick}
            >
                <h3 id="button-letter">{this.props.button}</h3>
                
                <audio
                    ref={ref => (this.audio = ref)}
                    className="clip"
                    src={this.props.src}
                    id={this.props.button}
                    type="audio/wav"
                />
            </div>
        );
    }
}

export default DrumPad;
