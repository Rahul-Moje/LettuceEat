import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomeScreen from './components/pages/HomeScreen';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup'
import Footer from './components/Footer'
import Profile from './components/pages/Userprofile'
import Editprofile from './components/pages/Editprofile';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route  path="/" element={<Profile/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/editprofile" element={<Editprofile/>}/>

        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
