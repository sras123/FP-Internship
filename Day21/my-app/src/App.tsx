import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  const isAuthenticated = Boolean(localStorage.getItem("auth_token"));
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Protected isSignedIn={isAuthenticated}>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

function Protected({
  isSignedIn,
  children,
}: {
  isSignedIn: boolean;
  children: JSX.Element;
}) {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default App;
