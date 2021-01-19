import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';

const PlayerControl = (props) => {
    return (
        <div className='c-player-controls'>
            <button className='skip-btn'>
<FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>

            </button>
            <button className='play-btn' onClick={()=> props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}></FontAwesomeIcon>
            </button>
            <button className='skip-btn'>
<FontAwesomeIcon icon={faForward}></FontAwesomeIcon>

            </button>
        </div>
    )
}

export default PlayerControl
