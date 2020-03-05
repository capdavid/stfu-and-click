import React, { Fragment, useRef, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';

import * as actions from '../store/actions/gameActions';

import GameWrapper from '../components/UI/GameWrapper';
import Leaderboards from '../components/Leaderboard/Leaderboards';
import Quote from '../components/UI/Quote';
import Ribbon from '../components/UI/Ribbon';
import TeamForm from '../components/TeamForm';
import Text from '../components/UI/Text';
import withError from '../hoc/withError';

const GameMenu: React.FC<RouteComponentProps> = props => {
  const dispatch = useDispatch();
  const leaderboardData = useSelector((state: RootState) => state.game.leaderboardData);

  const onFetchLeaderboard = () => dispatch(actions.fetchLeaderboardAsync.request());
  const onResetScore = () => dispatch(actions.resetScore());
  const trimmedLeaderboardData = leaderboardData.slice(0, 10);
  const teamNameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onFetchLeaderboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGameStart = (e: React.FormEvent) => {
    e.preventDefault();
    onResetScore();
    props.history.push({
      pathname: '/' + teamNameInputRef.current!.value
    });
  };

  return (
    <Fragment>
      <Quote author="anonymous">
        It's really simple, you just need to click as fast as you can.
      </Quote>

      <GameWrapper>
        <TeamForm onGameStart={handleGameStart} teamNameRef={teamNameInputRef} />
        <Ribbon>TOP 10 Clickers</Ribbon>
        <Leaderboards leaderboard={trimmedLeaderboardData} trimmed />
        <Text withPadding>Want to be top? STFU and click!</Text>
      </GameWrapper>
    </Fragment>
  );
};

export default withError(GameMenu);
