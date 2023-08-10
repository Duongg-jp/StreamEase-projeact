import { Routes, Route } from "react-router-dom";
import HomePage from "../page/home-page";
import Contact from "../components/contact";
import Feedback from "../components/feedback";
import Error from "../page/404";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/*" element={<Error /> }></Route>
    </Routes>
  );
}
