import React, { Fragment, useRef, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';

import * as actions from '../store/actions/gameActions';

import GameWrapper from '../components/GameWrapper';
import Leaderboards from '../components/Leaderboards';
import Quote from '../components/Quote';
import TeamForm from '../components/TeamForm';
import Text from '../components/Text';

const GameMenu: React.FC<RouteComponentProps> = props => {
    const dispatch = useDispatch();
    const leaderboardData = useSelector((state: RootState) => {
        return state.game.leaderboardData;
    });

    const trimmedLeaderboardData = leaderboardData.slice(0, 10);

    const onFetchLeaderboard = () => dispatch(actions.fetchLeaderboardAsync.request());

    useEffect(() => {
        onFetchLeaderboard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //TODO Add input validation (only letters, numbers, spaces, no longer than XX chars) + show error message

    const teamNameInputRef = useRef<HTMLInputElement>(null);

    const handleGameStart = (e: React.FormEvent) => {
        e.preventDefault();
        props.history.push({
            pathname: '/' + teamNameInputRef.current!.value
        });
    };

    return (
        <Fragment>
            <Quote author="anonymous">It's really simple, you just need to click as fast as you can.</Quote>

            <GameWrapper>
                <TeamForm onGameStart={handleGameStart} teamNameRef={teamNameInputRef} />
                <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>TOP 10 CLICKERS</h2>
                <Leaderboards leaderboard={trimmedLeaderboardData} />
                <Text>Want to be top? STFU and click!</Text>
            </GameWrapper>
        </Fragment>
    );
};

export default GameMenu;
