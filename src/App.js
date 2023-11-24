import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Courses from './pages/Courses';
import Grades from './pages/Grades';
import Subjets from './pages/Subjects';
import ViewSubject from './pages/ViewSubject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/grades/:id" element={<Grades />} />
        <Route path="/subjects/:id/:grade" element={<Subjets />} />
        <Route path="/viewsubject/:id/:id" element={<ViewSubject />} />
      </Routes>
    </Router>
  );
}

export default App;
