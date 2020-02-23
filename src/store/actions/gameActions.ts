import { createAction, createAsyncAction } from 'typesafe-actions';
import { LeaderboardItem } from 'MyTypes';

export const registerClick = createAction('REGISTER_CLICK')();

export const fetchLeaderboardAsync = createAsyncAction(
    'FETCH_LEADERBOARD_REQUEST',
    'FETCH_LEADERBOARD_SUCCESS',
    'FETCH_LEADERBOARD_FAILURE'
    //FIX
)<undefined, any, Error>();
