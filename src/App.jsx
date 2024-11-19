import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blogs from "./pages/BlogsPage.jsx";
import Projects from "./pages/Projects.jsx";
import BlogDetail from "./utils/BlogDetail.jsx";
import ProjectFetch from "./utils/ProjectFetch.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectFetch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
