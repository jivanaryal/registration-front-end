import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import RegistrationPage from "./Components/Pages/RegistrationPage";
import OurStudent from "./Components/Pages/OurStudent";
import SingleUser from "./Components/Pages/SingleUser";
import EditStudent from "./Components/Pages/EditStudent";
import { Helmet } from "react-helmet";
import Signup from "./Components/LoginandSignup/Signup";
import LoginPage from "./Components/LoginandSignup/Login";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>registration-system</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Testing icons and title" />
      </Helmet>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/registration" element={<RegistrationPage />} />
          <Route exact path="/student" element={<OurStudent />} />
          <Route exact path="/edit/:id" element={<EditStudent />} />
          <Route exact path="/single/:id" element={<SingleUser />} />
          <Route exact path="/register" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
