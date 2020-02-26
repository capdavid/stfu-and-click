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
import ScoreWrapper from '../components/ScoreWrapper';
import Text from '../components/Text';
import { Click } from 'MyTypes';

interface RouterParams {
  teamName: string;
}

interface ActiveGameProps extends RouteComponentProps {}

const ActiveGame: React.FC<ActiveGameProps> = props => {
  useEffect(() => {
    console.log('ActiveGame mounted');
    const sessionId = uuidv4();
    dispatch(actions.setSession(sessionId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const counterStore = useSelector((state: RootState) => state.game.clicksCounter);
  const { myClicks, teamClicks } = counterStore;
  const sessionId = useSelector((state: RootState) => state.game.sessionId);

  const dispatch = useDispatch();
  const onClickSend = (clickData: Click) => dispatch(actions.sendClickAsync.request(clickData));

  const teamName = useParams<RouterParams>().teamName;

  const handleClick = () => {
    const clickData = {
      teamName,
      sessionId
    };
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
      </GameWrapper>
    </Fragment>
  );
};

export default ActiveGame;
