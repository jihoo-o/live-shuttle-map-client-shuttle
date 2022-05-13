import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';

interface SwitchButtonsProps {
    gettingPosition: boolean;
    watchingPosition: boolean;
    handleUpdateGettingPosition: any;
    handleUpdateWatchingPosition: any;
}

const StyledList = styled.ul`
    padding-left: 0;
    list-style-type: none;
    width: 100%;
    height: 5rem;
`;

const SwitchButtons = ({
    gettingPosition,
    watchingPosition,
    handleUpdateGettingPosition,
    handleUpdateWatchingPosition,
}: SwitchButtonsProps) => {
    return (
        <StyledList>
            <li>
                <span>5초 간격으로 전송하기</span>
                <Switch
                    checked={gettingPosition}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleUpdateGettingPosition(event.target.checked);
                    }}
                    size="medium"
                />
            </li>
            <li>
                <span>자동 갱신으로 전송하기</span>
                <Switch
                    checked={watchingPosition}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleUpdateWatchingPosition(event.target.checked);
                    }}
                    size="medium"
                />
            </li>
        </StyledList>
    );
};

export default SwitchButtons;
