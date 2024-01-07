import NavBar from "./Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

// Functional component for the overall layout of the application
const Layout = () => {
  return (
    <>
      <NavBar/>
      <Box sx={{ marginTop: "30px" }}>
        {/* Outlet component from react-router for rendering nested routes */}
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;