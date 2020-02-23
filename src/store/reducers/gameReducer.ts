import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { registerClick } from '../actions/gameActions';

type LeaderboardItem = {
    order: number;
    team: string;
    clicks: number;
};

const gameReducer = combineReducers({
    clicksCounter: createReducer(0 as number).handleAction(registerClick, (state, _) => state + 1),
    leaderboard: createReducer([
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
    ] as LeaderboardItem[])
});

export default gameReducer;
