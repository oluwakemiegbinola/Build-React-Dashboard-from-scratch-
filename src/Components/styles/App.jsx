import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile'; // Corrected the import statement

import './App.css';
const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Content />
        <Profile /> {/* Corrected component name */}
      </div>
    </div>
  );
};

export default App;
