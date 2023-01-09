import React from "react";
import Layout from "./Hoc/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import RegistrationPage from "./Components/Pages/RegistrationPage";
import OurStudent from "./Components/Pages/OurStudent";
import SingleUser from "./Components/Pages/SingleUser";
import EditStudent from "./Components/Pages/EditStudent";
const App = () => {
  return (
    <div>
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
