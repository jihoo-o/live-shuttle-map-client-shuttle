import axios from 'axios';
import Home from 'components/Home';
import LoginForm from 'components/LoginForm';
import React, { useState, useEffect } from 'react';

export interface User {
    id: string;
}

interface LoginForm {
    id: string;
    password: string;
}

function App() {
    const [user, setUser] = useState<User | null>();
    const [loginForm, setLoginForm] = useState<LoginForm | null>(null);

    const handleLogin = async ({ id, password }: LoginForm) => {
        try {
            const tmp = await axios.post(
                'https://2022bufscapstone.kr:8080/markers/shuttlebus',
                {
                    busid: id,
                    lat: 0,
                    lng: 0,
                }
            );
            console.log(tmp);
            setUser({ id });
        } catch (e: any) {
            throw new Error(e);
        }
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div
            className="App"
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '768px',
                height: '100%',
                marginLeft: '50%',
                transform: 'translate(-50%, 0)',
            }}
        >
            {!user ? (
                <LoginForm handleLogin={handleLogin} />
            ) : (
                <Home user={user} onLogout={handleLogout} />
            )}
        </div>
    );
}

export default App;
