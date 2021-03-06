import { createAction, createAsyncAction } from 'typesafe-actions';
import { LeaderboardItem, Click, ClickResponse } from 'MyTypes';

export const fetchLeaderboardAsync = createAsyncAction(
  'FETCH_LEADERBOARD_REQUEST',
  'FETCH_LEADERBOARD_SUCCESS',
  'FETCH_LEADERBOARD_FAILURE'
)<undefined, LeaderboardItem[], Error>();

export const sendClickAsync = createAsyncAction(
  'SEND_CLICK_REQUEST',
  'SEND_CLICK_SUCCESS',
  'SEND_CLICK_FAILURE'
)<Click, ClickResponse, Error>();

export const setSession = createAction('SET_SESSION')<string>();
export const setInitialTeamScore = createAction('SET_INITIAL_TEAM_SCORE')<number>();
export const resetScore = createAction('RESET_SCORE')();
