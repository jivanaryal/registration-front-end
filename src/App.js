import React from "react";
import Layout from "./Hoc/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import RegistrationPage from "./Components/Pages/RegistrationPage";
import OurStudent from "./Components/Pages/OurStudent";
import SingleUser from "./Components/Pages/SingleUser";
import EditStudent from "./Components/Pages/EditStudent";
import { Helmet } from "react-helmet";
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
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/student" element={<OurStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
            <Route path="/single/:id" element={<SingleUser />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
