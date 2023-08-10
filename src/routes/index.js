import { Routes, Route } from "react-router-dom";
import HomePage from "../components/home-page";

export default function AppRoutes(params) {
  return (
    <Routes>
      <Route path="/" element={HomePage} />
    </Routes>
  );
}
