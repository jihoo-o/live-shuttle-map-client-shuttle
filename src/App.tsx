import Home from 'components/Home';
import LoginForm from 'components/LoginForm';
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
                width: '100%',
                height: '100vh',
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
