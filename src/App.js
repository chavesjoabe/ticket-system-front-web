import * as React from "react";
import MainTemplate from "./pages/main-template";
import LoginTemplate from "./pages/login-template/login.template";
import TicketRegistration from "./pages/ticket-registration/ticket.registration";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/auth.context";
import { URL_CONSTANTS } from "./constants/url.constants";
import TicketDetailsPage from "./pages/ticket-details/ticket.details";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="*" element={<LoginTemplate />} />
          <Route path={URL_CONSTANTS.LOGIN} element={<LoginTemplate />} />
          <Route path={URL_CONSTANTS.HOME} element={<MainTemplate />} />
          <Route
            path={URL_CONSTANTS.TICKET_REGISTRATION}
            element={<TicketRegistration />}
          />
          <Route
            path={URL_CONSTANTS.TICKET_DETAILS}
            element={<TicketDetailsPage />}
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
