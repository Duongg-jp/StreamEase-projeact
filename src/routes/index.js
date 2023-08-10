import { Routes, Route } from "react-router-dom";
import HomePage from "../page/home-page";
import ShoppPage from "../page/shop";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShoppPage />} />
    </Routes>
  );
}
