import React, { Fragment, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';

import { v4 as uuidv4 } from 'uuid';

import * as actions from '../store/actions/gameActions';

import ClickButton from '../components/ClickButton';
import GameWrapper from '../components/GameWrapper';
import Heading from '../components/Heading';
import Leaderboards from '../components/Leaderboards';
import ScoreWrapper from '../components/ScoreWrapper';
import Text from '../components/Text';
import { Click } from 'MyTypes';

interface RouterParams {
  teamName: string;
}

interface ActiveGameProps extends RouteComponentProps {}

const ActiveGame: React.FC<ActiveGameProps> = props => {
  const counterStore = useSelector((state: RootState) => state.game.clicksCounter);
  const { myClicks, teamClicks } = counterStore;
  const sessionId = useSelector((state: RootState) => state.game.sessionId);
  const leaderboardData = useSelector((state: RootState) => state.game.leaderboardData);

  const dispatch = useDispatch();
  const onClickSend = (clickData: Click) =>
    dispatch(actions.sendClickAsync.request(clickData));
  const onSetSession = () => dispatch(actions.setSession(uuidv4()));
  const onFetchLeaderboard = () => dispatch(actions.fetchLeaderboardAsync.request());

  const teamName = useParams<RouterParams>().teamName;

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
    sessionId && onClickSend(clickData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const handleClick = () => {
    onClickSend(clickData);
  };

  const makeNumPretty = (num: number): string => {
    return num.toLocaleString('cs-CZ');
  };

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
        <ScoreWrapper personalScore={formattedMyClicks} teamScore={formattedTeamClicks} />
        <Leaderboards leaderboard={leaderboardData} teamName={teamName} />
        <Text withPadding>Want to be top? STFU and click!</Text>
      </GameWrapper>
    </Fragment>
  );
};

export default ActiveGame;
