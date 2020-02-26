import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { LeaderboardItem } from 'MyTypes';

import { fetchLeaderboardAsync, sendClickAsync, setSession } from '../actions/gameActions';

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
        console.log('changing loading');
        return false;
      }
    ),

  error: createReducer('' as string),

  sessionId: createReducer('' as string).handleAction(
    setSession,
    (state, action) => action.payload
  ),

  clicksCounter: createReducer({
    myClicks: 1024,
    teamClicks: 65535
  } as clicksCounterReducer).handleAction(sendClickAsync.success, (state, action) => {
    console.log(action.payload);
    return {
      myClicks: action.payload.your_clicks,
      teamClicks: action.payload.team_clicks
    };
  }),

  leaderboardData: createReducer([
    {
      order: 1,
      team: 'Best_Team_Ever',
      clicks: 339
    },
    {
      order: 2,
      team: 'test-name',
      clicks: 1
    },
    {
      order: 3,
      team: 'tet645',
      clicks: 1
    }
  ] as LeaderboardItem[]).handleAction(fetchLeaderboardAsync.success, (state, action) => {
    console.log(action);
    return action.payload;
  })
});

export default gameReducer;
