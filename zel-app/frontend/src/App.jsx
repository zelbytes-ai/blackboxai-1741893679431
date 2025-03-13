import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Polyhouse from './pages/Polyhouse';
import ZelTrade from './pages/ZelTrade';
import ZelBasket from './pages/ZelBasket';
import Auth from './pages/Auth';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, py: 3, px: { xs: 2, md: 4 } }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/polyhouse" element={<Polyhouse />} />
            <Route path="/zeltrade" element={<ZelTrade />} />
            <Route path="/zelbasket" element={<ZelBasket />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ErrorBoundary>
  );
}

export default App;
