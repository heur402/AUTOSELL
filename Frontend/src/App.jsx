
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Public components
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

// Public pages
import HomePage from "./page/HomePage";
import AboutUs from "./page/AboutUs";
import Product from "./page/Product";
import CarDetails from "./page/CarDetails";

// Admin components
import AdminLayout from "./component/admin/AdminLayout";

// Admin pages
import AdminLogin from "./page/admin/AdminLogin";
import AdminSignup from "./page/admin/AdminSignup";
import AdminDashboard from "./page/admin/AdminDashboard";
import ManageCars from "./page/admin/ManageCars";
import ManageSellers from "./page/admin/ManageSellers";
import ManageCategories from "./page/admin/ManageCategories";
import AdminSettings from "./page/admin/AdminSettings";

const PublicLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* PUBLIC WEBSITE */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          }
        />

        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutUs />
            </PublicLayout>
          }
        />

        <Route
          path="/product"
          element={
            <PublicLayout>
              <Product />
            </PublicLayout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <PublicLayout>
              <CarDetails />
            </PublicLayout>
          }
        />

        {/* ADMIN AUTHENTICATION */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

        {/* ADMIN PANEL */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={<Navigate to="/admin/dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="cars"
            element={<ManageCars />}
          />

          <Route
            path="sellers"
            element={<ManageSellers />}
          />

          <Route
            path="categories"
            element={<ManageCategories />}
          />

          <Route
            path="settings"
            element={<AdminSettings />}
          />
        </Route>

        {/* UNKNOWN ROUTES */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
