import React from 'react';
import Details from './Details';

function Player() {
    return (
        <div className="player">
            <h4>Playing Now</h4>
            <Details />
              <audio 
                className="player__audio"
                src=""
                controls
              >
              </audio>
              <p>
                  Next Up: 
                  <span>
                      Next Song
                  </span>
              </p>
        </div>
    );
}

export default Player
