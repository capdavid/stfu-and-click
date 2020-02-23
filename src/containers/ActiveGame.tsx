import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'typesafe-actions';
import * as actions from '../store/actions/gameActions';

import ClickButton from '../components/ClickButton';
import GameWrapper from '../components/GameWrapper';
import Heading from '../components/Heading';
import Text from '../components/Text';

interface MatchParams {
    teamName: string;
}

interface ActiveGameProps extends RouteComponentProps<MatchParams> {}

const ActiveGame: React.FC<ActiveGameProps> = props => {
    const dispatch = useDispatch();
    const counterStore = useSelector((state: RootState) => {
        return state.game.clicksCounter;
    });

    const onRegisterClick = () => dispatch(actions.registerClick());
    console.log(props.match.params.teamName);
    return (
        <Fragment>
            <Heading>
                Clicking for team <strong>{props.match.params.teamName}</strong>
            </Heading>
            <Text>Too lazy to click? Let your pals click for you:</Text>
            <GameWrapper>
                <ClickButton large onClick={onRegisterClick} />
                <Heading>Counter: {counterStore}</Heading>
            </GameWrapper>
        </Fragment>
    );
};

export default ActiveGame;
