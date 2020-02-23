import { put, call, takeEvery, all } from 'redux-saga/effects';
import { fetchLeaderboardAsync } from '../actions/gameActions';
import axios from '../../axios';

export function* getLeaderboardSaga(action: ReturnType<typeof fetchLeaderboardAsync.request>): Generator {
    try {
        const response = yield call(axios.get, '/leaderboard');
        console.log(response);
        yield put(fetchLeaderboardAsync.success(response as any));
    } catch (error) {
        yield put(fetchLeaderboardAsync.failure(error));
    }
}

export function* watchGame() {
    yield all([takeEvery(fetchLeaderboardAsync.request, getLeaderboardSaga)]);
}
