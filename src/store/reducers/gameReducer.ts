import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { LeaderboardItem } from 'MyTypes';

import { registerClick, fetchLeaderboardAsync } from '../actions/gameActions';

const gameReducer = combineReducers({
    clicksCounter: createReducer(0 as number).handleAction(registerClick, (state, action) => {
        return state + 1;
    }),
    isLoading: createReducer(false as boolean)
        .handleAction([fetchLeaderboardAsync.request], (state, action) => true)
        .handleAction([fetchLeaderboardAsync.success, fetchLeaderboardAsync.failure], (state, action) => {
            console.log('changing loading');
            return false;
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
        return action.payload.data;
    })
});

export default gameReducer;
