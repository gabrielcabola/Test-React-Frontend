import React, { useState, useContext } from "react";
import { GameContext } from "../provider/GameContext";
import { markBlock, unmarkBlock } from "../services/ArticlesApi";
import { ActionTypes } from '../reducers/AppReducer';
const statusList = {
  EMPTY: 'empty',
  SELECTED: 'selected',
  RED: 'red',
}

export default function Block(props) {
  const [state, dispatch] = useContext(GameContext);
  const serverStatus = props.status;
  const [status, setStatus] = useState(props.status);
  const [stage, setStage] = useState(null);
  const x = props.x;
  const y = props.y;
  const gameId = state.id;
  const payload = { x, y, gameId };
 
  const dispatchClick = (response) => {

    // Rule for the remove the last square and use the first whiteboard
    dispatch({
      type: ActionTypes.UPDATE_BOARD,
      payload: (response.board !== undefined) ? response.board : state.whiteboard,
    });
    dispatch({
      type: ActionTypes.UPDATE_AREA,
      payload: response.area,
    });
    setStage(null);
  }
  
  const toogle = (payload) => {
    const runningStage = stage;
    setStage('loading');
    if (runningStage !== 'loading') {
      const { x, y, gameId: game_id } = payload;
      switch (status) {
        case statusList.EMPTY:
          markBlock(x, y, game_id).then((response) => {
            setStatus((serverStatus === statusList.RED) ? statusList.RED : statusList.SELECTED);
            dispatchClick(response);
          }).catch((error) => {
            setStage(null);
          });
          break;
        case statusList.SELECTED:
        case statusList.RED:
          unmarkBlock(x, y, game_id).then((response) => {
            setStatus(statusList.EMPTY);
            dispatchClick(response);
          }).catch((error) => {
            setStage(null);
          });
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className={`${serverStatus} ${stage}`} status={ status } onClick={()=>toogle(payload)}>
    </div>
  );
}