import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import DisplayRockets from './components/DisplayRockets';
import NavBar from './components/NavBar';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import store from './redux/configureStore';
import { fetchMisions } from './redux/missions/missionsSlice';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchMisions());
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<DisplayRockets />} />
        <Route path="/rockets" element={<DisplayRockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
