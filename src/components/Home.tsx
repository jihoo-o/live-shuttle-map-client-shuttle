import { User } from 'App';
import React, { useState } from 'react';
import styled from 'styled-components';
import LocationService from './LocationService';
import SwitchButtons from './SwitchButtons';

interface HomeProps {
    user: User;
    handleLogout: any;
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Home = ({ user, handleLogout }: HomeProps) => {
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

    return (
        <Wrapper>
            <button
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                }}
                onClick={handleLogout}
            >
                차량 변경하기
            </button>
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
        </Wrapper>
    );
};

export default Home;
