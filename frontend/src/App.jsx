import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Adjust path if you didn't use a pages folder
import Analytics from './pages/Analytics';
import Team from './pages/Team';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* "/" means the home/default page */}
                <Route path="/" element={<Dashboard />} />

                <Route path="/analytics" element={<Analytics />} />

                <Route path="/team" element={<Team />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
