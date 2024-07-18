import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ChooseRole from './components/ChooseRole';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
const App = () => {
 
  const status = 0;

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<ChooseRole status={status} />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    
  </Router>
  );
};

export default App;
