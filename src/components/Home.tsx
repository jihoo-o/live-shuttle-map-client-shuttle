import { User } from 'App';
import React, { useState } from 'react';
import styled from 'styled-components';
import LocationService from './LocationService';
import LoginFormButton from './LoginFormButton';
import Profile from './Profile';
import SwitchButtons from './SwitchButtons';

interface HomeProps {
    user: User;
    onLogout: any;
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = ({ user, onLogout }: HomeProps) => {
    const [gettingPosition, setGettingPosition] = useState<boolean>(false);
    const [watchingPosition, setWatchingPosition] = useState<boolean>(false);

    const handleUpdateGettingPosition = (gettingPosition: boolean) => {
        if (gettingPosition) setWatchingPosition(false);
        setGettingPosition(gettingPosition);
    };

    const handleUpdateWatchingPosition = (watchingPosition: boolean) => {
        if (watchingPosition) setGettingPosition(false);
        setWatchingPosition(watchingPosition);
    };

    const handleLogout = () => {
        onLogout();
        handleUpdateGettingPosition(false);
    };

    return (
        <Wrapper>
            {/* <Profile id={user.id} /> */}
            <SwitchButtons
                gettingPosition={gettingPosition}
                watchingPosition={watchingPosition}
                handleUpdateGettingPosition={handleUpdateGettingPosition}
                handleUpdateWatchingPosition={handleUpdateWatchingPosition}
            />
            <LocationService
                user={user}
                gettingPosition={gettingPosition}
                watchingPosition={watchingPosition}
            />
            <LoginFormButton content={'차량 변경하기'} onClick={handleLogout} />
        </Wrapper>
    );
};

export default Home;
