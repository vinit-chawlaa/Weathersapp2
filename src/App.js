// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
import BlogList from './Components/BlogList';
import BlogPost from './Components/BlogPost';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>  {/* Change Switch to Routes */}
                    <Route path="/" element={<BlogList />} />  {/* Change component prop to element */}
                    <Route path="/post/:id" element={<BlogPost />} /> {/* Change component prop to element */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
