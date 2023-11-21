import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './pages/AdminLogin';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Grades from './pages/Grades';
import Subjets from './pages/Subjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/grades/:id" element={<Grades />} />
        <Route path="/subjets/:grade" element={<Subjets />} />
      </Routes>
    </Router>
  );
}

export default App;
