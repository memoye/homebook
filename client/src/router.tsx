/* eslint react-refresh/only-export-components: 0 */
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";

// pages
import HomePage from "@/pages/common/HomePage";

const AboutPage = lazy(() => import("./pages/common/AboutPage"));
const ContactPage = lazy(() => import("./pages/common/ContactPage"));
const AgentsPage = lazy(() => import("./pages/common/AgentsPage"));
const LoginPage = lazy(() => import("./pages/common/LoginPage"));
const SignUpPage = lazy(() => import("./pages/common/SignUpPage"));
const PropertiesPage = lazy(() => import("./pages/common/PropertiesPage"));
const PropertyPage = lazy(() => import("./pages/common/PropertyPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "agents", element: <AgentsPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "properties", element: <PropertiesPage /> },
      { path: "properties/:id", element: <PropertyPage /> },
    ],
  },
]);
