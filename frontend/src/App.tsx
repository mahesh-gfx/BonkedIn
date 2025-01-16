import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { JobsPage } from './pages/Jobs';
import { MessagesPage } from './pages/Messages';
import { NetworkPage } from './pages/Network';
import { MainLayout } from './components/layout/MainLayout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/network" element={<NetworkPage />} />
        </Route>
      </Routes>
    </Router>
  );
}