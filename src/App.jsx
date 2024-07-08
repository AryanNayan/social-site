import Login from "./pages/login/login";
import "./app.css";
import Register from "./pages/register/register";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Leftbar from "./components/leftbar.jsx";
import Home from "./pages/home/home.jsx";
import Rightbar from "./components/rightbar.jsx";
import Profile from "./pages/profile/profile.jsx";

function App() {
  const currentUser = true;
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };
  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
