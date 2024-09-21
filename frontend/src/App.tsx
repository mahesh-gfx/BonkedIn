import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { JobsPage } from "./pages/Jobs";
import { MessagesPage } from "./pages/Messages";
import { MainLayout } from "./components/layout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
