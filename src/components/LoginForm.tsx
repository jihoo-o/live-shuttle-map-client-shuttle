import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import LoginFormButton from './LoginFormButton';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
`;

const FormItem = styled.div`
    margin-bottom: 10px;
    width: 100%;
    max-width: 300px;
`;

const Input = styled.input`
    height: 50px;
    width: 100%;
    border-radius: 5px;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const Title = styled.p`
    font-size: 15px;
    margin-bottom: 3px;
`;

const LoginForm = ({ handleLogin }: any) => {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleClickLogin = () => {
        const id = String(idRef.current && idRef.current.value);
        const password = String(
            passwordRef.current && passwordRef.current.value
        );
        if (!id) {
            window.alert('차량번호를 입력해주세요.');
            return;
        }
        if (!password) {
            window.alert('비밀번호를 입력해주세요.');
            return;
        }
        if (!id.match(/^[0-9]*$/g)) {
            window.alert('차량번호는 숫자만 입력해주세요.');
            return;
        }
        handleLogin({ id, password });
    };

    return (
        <Form>
            <FormItem>
                <Title>
                    <b>차량번호</b>
                </Title>
                <Input
                    ref={idRef}
                    type={'text'}
                    placeholder={'숫자만 입력해주세요. ex) 바1234 -> 1234'}
                    maxLength={10}
                />
            </FormItem>
            <FormItem>
                <Title>
                    <b>비밀번호</b>
                </Title>
                <Input
                    ref={passwordRef}
                    type={'password'}
                    placeholder={'1234'}
                    maxLength={16}
                />
            </FormItem>
            <FormItem>
                <LoginFormButton
                    content={'로그인'}
                    onClick={handleClickLogin}
                />
            </FormItem>
        </Form>
    );
};

export default LoginForm;
