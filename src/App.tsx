
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import PlayerProfile from "./pages/PlayerProfile";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="player/:id" element={<PlayerProfile />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;