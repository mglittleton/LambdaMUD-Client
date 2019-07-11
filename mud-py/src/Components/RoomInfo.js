import React from 'react';
import { Button } from '@material-ui/core';

function RoomInfo(props) {
  return (
    <div>
      {props.currentRoom.title} <br />
      {props.currentRoom.description}
      {props.currentRoom.players ? (
        <div>
          Players who are in the room with you:{' '}
          {props.currentRoom.players.map((player, index) => {
            return <div key={index}>{player}</div>;
          })}
        </div>
      ) : (
        <div>There are no players in sight</div>
      )}
    </div>
  );
}

export default RoomInfo;
