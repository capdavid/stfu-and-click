import React, { Fragment, useRef } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

import GameWrapper from '../components/GameWrapper';
import Leaderboards from '../components/Leaderboards';
import Quote from '../components/Quote';
import TeamForm from '../components/TeamForm';
import Text from '../components/Text';

const GameMenu: React.FC<RouteComponentProps> = props => {
    const leaderboardData = useSelector((state: RootState) => {
        return state.game.leaderboard;
    });

    const teamNameInputRef = useRef<HTMLInputElement>(null);

    const handleGameStart = (e: React.FormEvent) => {
        e.preventDefault();
        props.history.push({ pathname: '/' + teamNameInputRef.current!.value });
    };

    console.log(leaderboardData);
    return (
        <Fragment>
            <Quote author="anonymous">It's really simple, you just need to click as fast as you can.</Quote>

            <GameWrapper>
                <TeamForm onGameStart={handleGameStart} teamNameRef={teamNameInputRef} />
                <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>TOP 10 CLICKERS</h2>
                <Leaderboards leaderboard={leaderboardData} />
                <Text>Want to be top? STFU and click!</Text>
            </GameWrapper>
        </Fragment>
    );
};

export default GameMenu;
