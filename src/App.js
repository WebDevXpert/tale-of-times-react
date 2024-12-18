import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/admin";
import CreateArticle from "./pages/admin/create";
import EditArticle from "./pages/admin/edit";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Blog from "./pages/Blog.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blog/create"
          element={
            <ProtectedRoute>
              <CreateArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blog/edit/:id"
          element={
            <ProtectedRoute>
              <EditArticle />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
