import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    height: 50px;
    width: 100%;
    margin-top: 80px;
    border: none;
    border-radius: 5px;
    background-color: #f6ca46;
`;

interface LoginFormButton {
    content: string;
    onClick: any;
}

const LoginFormButton = ({ content, onClick }: LoginFormButton) => (
    <Button onClick={onClick}>
        <b>{content}</b>
    </Button>
);

export default LoginFormButton;
