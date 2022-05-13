import Home from 'components/Home';
import LoginForm from 'components/LoginForm';
import { relative } from 'path';
import React, { useState, useEffect } from 'react';

interface User {
    id: string;
}

interface LoginForm {
    id: string;
    password: string;
}

function App() {
    const [user, setUser] = useState<User | null>();
    const [loginForm, setLoginForm] = useState<LoginForm | null>(null);

    useEffect(() => {
        setUser({ id: 'temp' });
    }, []);

    const handleLogin = ({ id, password }: LoginForm) => {
        // 서버로 전송하기
        setUser({ id });
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
                height: '100vh',
                marginLeft: '50%',
                transform: 'translate(-50%, 0)',
            }}
        >
            {!user ? (
                <LoginForm handleLogin={handleLogin} />
            ) : (
                <Home handleLogout={handleLogout} />
            )}
        </div>
    );
}

export default App;
