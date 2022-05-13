import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.div`
    width: 80%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(213, 213, 213, 0.3);
    border-radius: 10px;
    padding: 20px;
`;

const FormItem = styled.div`
    margin-bottom: 20px;
`;

const Input = styled.input`
    height: 35px;
    width: 100x;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
`;

const Title = styled.p`
    font-size: 15px;
    margin: 0;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const LoginForm = ({ handleLogin }: any) => {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <Wrapper>
            <Form>
                <FormItem>
                    <Title>
                        <Bold>차량번호</Bold>를 입력해주세요
                    </Title>
                    <Input ref={idRef} type={'text'} />
                </FormItem>
                <FormItem>
                    <Title>
                        <Bold>비밀번호</Bold>를 입력해주세요
                    </Title>
                    <Input ref={passwordRef} type={'password'} />
                </FormItem>
                <button
                    style={{
                        width: '80px',
                    }}
                    onClick={() => {
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
                        handleLogin({ id, password });
                    }}
                >
                    로그인
                </button>
            </Form>
        </Wrapper>
    );
};

export default LoginForm;
