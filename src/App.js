import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/DashBoard';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Addnotes from './Components/AddNotes';
import EditPage from './Components/EditNotes';
import UserPage from './Components/UserPage';

function App() {
  return (
    <div className="App">
         <Routes>

       <Route exact path ="/"
       element={<Dashboard/>}/>

       <Route path="/login"
        element={<LoginPage/>}
       />

      <Route path="/signup"
        element={<SignupPage/>}
       /> 

    <Route path="/add"
        element={<Addnotes/>}
       />

        <Route path="/edit"
        element={<EditPage/>}
       />

      <Route path="/user"
        element={<UserPage/>}
       />

         </Routes>
    </div>
  );
}

export default App;
