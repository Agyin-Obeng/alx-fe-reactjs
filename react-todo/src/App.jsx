import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Forms
import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.js";

// React Query
import PostsComponent from "./components/PostsComponent.jsx";

// Todo List
import TodoList from "./components/TodoList.jsx"; // ✅ added import

// Routing
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Custom auth hook
import useAuth from "./hooks/useAuth.js";

// Create QueryClient
const queryClient = new QueryClient();

function App() {
  const { isAuthenticated, login } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1>Full React Demo App</h1>

          {/* ----------------- CONTROLLED FORM ----------------- */}
          <section style={{ marginBottom: "40px" }}>
            <h2>Controlled Form</h2>
            <RegistrationForm />
          </section>

          {/* ----------------- FORMik FORM ----------------- */}
          <section style={{ marginBottom: "40px" }}>
            <h2>Formik Form</h2>
            <FormikForm />
          </section>

          {/* ----------------- REACT QUERY ----------------- */}
          <section style={{ marginBottom: "40px" }}>
            <h2>React Query Posts</h2>
            <PostsComponent />
          </section>

          {/* ----------------- TODO LIST ----------------- */}
          <section style={{ marginBottom: "40px" }}>
            <h2>Todo List</h2>
            <TodoList /> {/* ✅ rendered TodoList */}
          </section>

          {/* ----------------- ROUTING ----------------- */}
          <section style={{ marginBottom: "40px" }}>
            <h2>Advanced Routing</h2>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Protected Profile route */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              >
                {/* Nested routes */}
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>

              {/* Dynamic route */}
              <Route path="/blog/:id" element={<BlogPost />} />

              {/* Login route */}
              <Route path="/login" element={<Login onLogin={login} />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
