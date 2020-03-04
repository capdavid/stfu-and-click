import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { LeaderboardItem } from 'MyTypes';

import {
  fetchLeaderboardAsync,
  sendClickAsync,
  setSession,
  setInitialTeamScore,
  resetScore
} from '../actions/gameActions';

interface clicksCounterReducer {
  myClicks: number;
  teamClicks: number;
}

const gameReducer = combineReducers({
  error: createReducer(false as boolean)
    .handleAction(
      [fetchLeaderboardAsync.failure, sendClickAsync.failure],
      (state, action) => true
    )
    .handleAction(
      [fetchLeaderboardAsync.success, sendClickAsync.success],
      (state, action) => (state === false ? false : true)
    ),

  sessionId: createReducer('' as string)
    .handleAction(setSession, (state, action) => action.payload)
    .handleAction(resetScore, (state, action) => ''),

  clicksCounter: createReducer({
    myClicks: 0,
    teamClicks: 0
  } as clicksCounterReducer)
    .handleAction(sendClickAsync.success, (state, action) => ({
      myClicks: action.payload.your_clicks,
      teamClicks: action.payload.team_clicks
    }))
    .handleAction(resetScore, (state, action) => ({
      myClicks: 0,
      teamClicks: 0
    }))
    .handleAction(setInitialTeamScore, (state, action) => ({
      ...state,
      teamClicks: action.payload
    })),

  leaderboardData: createReducer([] as LeaderboardItem[])
    .handleAction(fetchLeaderboardAsync.success, (state, action) => action.payload)
    .handleAction(resetScore, (state, action) => [])
});

export default gameReducer;
