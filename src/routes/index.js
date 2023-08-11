import { Routes, Route } from "react-router-dom";
import HomePage from "../page/home-page";
import ShoppPage from "../page/shop";
import Contact from "../page/contact";
import Feedback from "../page/feedback";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShoppPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}
