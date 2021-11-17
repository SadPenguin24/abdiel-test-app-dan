import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";

const App = () => {
  return (
    <main className="py-3">
      <Container>
        <Routes>
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<LoginScreen />} exact />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
