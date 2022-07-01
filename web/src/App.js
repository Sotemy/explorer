import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavigationBar from './components/Navbar';


import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavigationBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>

        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
