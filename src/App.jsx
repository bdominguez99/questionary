import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import GraduatedPage from "./pages/GraduatedPage";
import MainPage from "./pages/MainPage";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/student" element={<StudentPage />}></Route>
        <Route path="/teacher" element={<TeacherPage />}></Route>
        <Route path="/graduated" element={<GraduatedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
