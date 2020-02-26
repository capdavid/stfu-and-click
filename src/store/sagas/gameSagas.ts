import { put, call, takeEvery, all } from "redux-saga/effects";
import { fetchLeaderboardAsync, sendClickAsync } from "../actions/gameActions";
import { LeaderboardItem, ClickResponse } from "MyTypes";
import axios from "../../axios";
// import { AxiosResponse } from "axios";

export function* fetchLeaderboardSaga(
  action: ReturnType<typeof fetchLeaderboardAsync.request>
): Generator {
  try {
    const response: any = yield call(axios.get, "/leaderboard");
    //TODO fix response type
    yield put(fetchLeaderboardAsync.success(response.data as LeaderboardItem[]));
  } catch (error) {
    yield put(fetchLeaderboardAsync.failure(error));
  }
}

export function* sendClickSaga(action: ReturnType<typeof sendClickAsync.request>): Generator {
  try {
    console.log("sendClick");
    const { teamName, sessionId } = action.payload;

    const response: any = yield call(axios.post, "/klik", {
      team: teamName,
      session: sessionId
    });

    yield put(sendClickAsync.success(response.data as ClickResponse));
  } catch (error) {
    yield put(sendClickAsync.failure(error));
  }
}

export function* watchGame() {
  yield all([
    takeEvery(fetchLeaderboardAsync.request, fetchLeaderboardSaga),
    takeEvery(sendClickAsync.request, sendClickSaga)
  ]);
}
