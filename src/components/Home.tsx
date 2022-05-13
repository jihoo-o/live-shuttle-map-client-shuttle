import React, { useState } from 'react';
import styled from 'styled-components';
import LocationService from './LocationService';
import SwitchComponent from './SwitchComponent';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Home = ({ handleLogout }: any) => {
    const [checked, setChecked] = useState<boolean>(false);
    const handleUpdateChecked = (checked: boolean) => {
        setChecked(checked);
    };

    // currentPosition

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
            <SwitchComponent
                checked={checked}
                handleUpdateChecked={handleUpdateChecked}
            />
            <LocationService isRunning={checked} />
        </Wrapper>
    );
};

export default Home;
