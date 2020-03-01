import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { LeaderboardItem } from 'MyTypes';

import {
  fetchLeaderboardAsync,
  sendClickAsync,
  setSession
} from '../actions/gameActions';

interface clicksCounterReducer {
  myClicks: number;
  teamClicks: number;
}

const gameReducer = combineReducers({
  isLoading: createReducer(false as boolean)
    .handleAction(fetchLeaderboardAsync.request, (state, action) => true)
    .handleAction(
      [fetchLeaderboardAsync.success, fetchLeaderboardAsync.failure],
      (state, action) => {
        return false;
      }
    ),

  error: createReducer(false as boolean)
    .handleAction(
      [fetchLeaderboardAsync.failure, sendClickAsync.failure],
      (state, action) => true
    )
    .handleAction(
      [fetchLeaderboardAsync.success, sendClickAsync.success],
      (state, action) => false
    ),

  sessionId: createReducer('' as string).handleAction(
    setSession,
    (state, action) => action.payload
  ),

  clicksCounter: createReducer({
    myClicks: 0,
    teamClicks: 0
  } as clicksCounterReducer).handleAction(sendClickAsync.success, (state, action) => {
    return {
      myClicks: action.payload.your_clicks,
      teamClicks: action.payload.team_clicks
    };
  }),

  leaderboardData: createReducer([] as LeaderboardItem[]).handleAction(
    fetchLeaderboardAsync.success,
    (state, action) => {
      return action.payload;
    }
  )
});

export default gameReducer;
