import * as React from 'react';
import MainTemplate from './pages/main-template';
import LoginTemplate from './pages/login-template/login.template';
import TicketRegistration from './pages/ticket-registration/ticket.registration';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/context/auth.context';

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LoginTemplate />} />
                    <Route path="/Home" element={<MainTemplate />} />
                    <Route
                        path="/TicketRegistration"
                        element={<TicketRegistration />}
                    />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
