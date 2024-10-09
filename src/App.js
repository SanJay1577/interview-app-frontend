import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/DashBoard";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Addnotes from "./Components/AddNotes";
import EditPage from "./Components/EditNotes";
import UserPage from "./Components/UserPage";
import { useState } from "react";
import ProtectedRoute from "./Auth/ProtectedRoute";

function App() {
  const [userData, setUserData] = useState([]);
  return (
    <div className="App">
      <Routes>
        {/* Route Protection  */}
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/procted" element={<Dashboard />} />
        </Route>

        <Route exact path="/" element={<Dashboard />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/add/:token"
          element={<Addnotes userData={userData} setUserData={setUserData} />}
        />

        <Route
          path="/edit/:id/:token"
          element={<EditPage userData={userData} setUserData={setUserData} />}
        />

        <Route
          path="/user"
          element={<UserPage userData={userData} setUserData={setUserData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
