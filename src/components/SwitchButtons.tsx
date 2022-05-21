import React from 'react';
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
    width: 400px;
    height: 5rem;
    text-align: center;
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
                <span>위치 등록하기</span>
                <Switch
                    checked={gettingPosition}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleUpdateGettingPosition(event.target.checked);
                    }}
                    size="medium"
                />
            </li>
        </StyledList>
    );
};

export default SwitchButtons;
