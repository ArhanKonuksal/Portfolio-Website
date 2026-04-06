import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";

// Eager load: Home page (critical for FCP)
import Home from "./pages/Home";

// Lazy load: Secondary pages (code splitting)
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Minimal loading fallback (pages load fast, so keep it simple)
const PageLoader = () => (
  <div style={{ 
    minHeight: '50vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <div style={{
      width: '32px',
      height: '32px',
      border: '3px solid var(--color-border)',
      borderTopColor: 'var(--color-accent)',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
  </div>
);

// Wrap lazy components with Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: withSuspense(Projects) },
      { path: "projects/:id", element: withSuspense(ProjectDetail) },
      { path: "about", element: withSuspense(About) },
      { path: "contact", element: withSuspense(Contact) },
      { path: "blogs", element: withSuspense(Blogs) },
      { path: "blogs/:id", element: withSuspense(BlogDetail) },
      { path: "*", element: withSuspense(NotFound) }
    ],
  },
]);

export default router;
