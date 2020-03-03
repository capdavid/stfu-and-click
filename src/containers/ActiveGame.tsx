import React, { Fragment, useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { debounce } from 'lodash';

import { v4 as uuidv4 } from 'uuid';

import { Click } from 'MyTypes';

import * as actions from '../store/actions/gameActions';
import ClickButton from '../components/ClickButton';
import GameWrapper from '../components/GameWrapper';
import Heading from '../components/Heading';
import Leaderboards from '../components/Leaderboards';
import ScoreWrapper from '../components/ScoreWrapper';
import Text from '../components/Text';
import withError from '../hoc/withError';

interface RouterParams {
  teamName: string;
}

interface ActiveGameProps extends RouteComponentProps {}

let activeFetchIntervalId: NodeJS.Timeout | null;

const ActiveGame: React.FC<ActiveGameProps> = React.memo(props => {
  const counterStore = useSelector((state: RootState) => state.game.clicksCounter);
  const { myClicks, teamClicks } = counterStore;
  const sessionId = useSelector((state: RootState) => state.game.sessionId);
  const leaderboardData = useSelector((state: RootState) => state.game.leaderboardData);

  const dispatch = useDispatch();
  const onClickSend = (clickData: Click) =>
    dispatch(actions.sendClickAsync.request(clickData));
  const onSetSession = () => dispatch(actions.setSession(uuidv4()));
  const onSetInitialTeamScore = (teamScore: number) =>
    dispatch(actions.setInitialTeamScore(teamScore));
  const onFetchLeaderboard = () => dispatch(actions.fetchLeaderboardAsync.request());

  const teamName = useParams<RouterParams>().teamName;

  const FETCH_INTERVAL_INACTIVE = 300000;
  const FETCH_INTERVAL_ACTIVE = 900;
  const INTERVAL_ACTIVE_CLEAR_DELAY = 1000;

  const clickData = {
    teamName,
    sessionId
  };

  useEffect(() => {
    onSetSession();
    onFetchLeaderboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const inactiveFetchIntervalId = setInterval(
      () => onFetchLeaderboard(),
      FETCH_INTERVAL_INACTIVE
    );
    return () => clearInterval(inactiveFetchIntervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const debouncedClearInterval = useRef(
    debounce(() => {
      clearInterval(activeFetchIntervalId!);
      activeFetchIntervalId = null;
    }, INTERVAL_ACTIVE_CLEAR_DELAY)
  ).current;

  const handleClick = () => {
    if (!activeFetchIntervalId) {
      activeFetchIntervalId = setInterval(
        () => onFetchLeaderboard(),
        FETCH_INTERVAL_ACTIVE
      );
    }
    onClickSend(clickData);

    debouncedClearInterval();
  };

  const makeNumPretty = (num: number): string => {
    return num.toLocaleString('cs-CZ');
  };

  const teamPositionIndex = leaderboardData.findIndex(el => el.team === teamName);
  const initialTeamScore = leaderboardData[teamPositionIndex]?.clicks;

  if (!teamClicks && initialTeamScore) {
    onSetInitialTeamScore(initialTeamScore);
  }

  const formattedMyClicks = makeNumPretty(myClicks);
  const formattedTeamClicks = makeNumPretty(teamClicks);

  return (
    <Fragment>
      <Heading>
        Clicking for team <strong>{teamName}</strong>
      </Heading>
      <Text>Too lazy to click? Let your pals click for you:</Text>
      <GameWrapper>
        <ClickButton large onClick={handleClick} />
        <ScoreWrapper myScore={formattedMyClicks} teamScore={formattedTeamClicks} />
        <Leaderboards
          leaderboard={leaderboardData}
          teamPositionIndex={teamPositionIndex}
        />
        <Text withPadding>Want to be top? STFU and click!</Text>
      </GameWrapper>
    </Fragment>
  );
});

export default withError(ActiveGame);
