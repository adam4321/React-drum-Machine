/****************************************************************
**  DrumPad button component
****************************************************************/

import React, { useEffect, useRef } from 'react';
import './App.css';

function DrumPad(props) {

    const audioRef = useRef(null);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        window.focus();

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    /* Create overlapping samples ------------------------------------------ */
    const Channel = (audio_uri) => {
        let sample = new Audio(audio_uri);
        sample.play();
    };

    const Switcher = (audio_uri, num) => {
        let channels = [];
        let index = 0;

        for (let i = 0; i < num; i++) {
            channels.push(Channel(audio_uri));
        }

        Switcher.play = () => {
            channels[index++].play();
            index = index < num ? index : 0;
        };
    };

    /* Play sound on keyboard button press --------------------------------- */
    function handleKeyDown(e) {
        if (e.keyCode === props.code) {
            Switcher(props.src, 1);
            audioRef.current.currentTime = 0;
            props.handleDisplay(props.id);
        }
    };

    /* Play sound on mouse click ------------------------------------------- */
    function handleClick() {
        Switcher(props.src, 1);
        audioRef.current.currentTime = 0;
        props.handleDisplay(props.id);
    };

    return (
        <div
            className="drum-pad"
            id={props.id}
            onClick={handleClick}
        >
            <h3 id="button-letter">{props.button}</h3>
            
            <audio
                ref={audioRef}
                className="clip"
                src={props.src}
                id={props.button}
                type="audio/wav"
            />
        </div>
    );
    
}

export default DrumPad;
