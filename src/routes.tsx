import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import UserPage from './pages/User';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/User/:id" element={<UserPage />} />
        </Routes>
    )
}