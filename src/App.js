import * as React from 'react';
import MainTemplate from './templates/main-template';
import LoginTemplate from './templates/login-template/login.template';
import TicketRegistration from './templates/ticket-registration/ticket.registration';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginTemplate />} />
            <Route path="/Home" element={<MainTemplate />} />
            <Route
                path="/TicketRegistration"
                element={<TicketRegistration />}
            />
        </Routes>
    );
}

export default App;
