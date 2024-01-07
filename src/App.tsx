import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "../src/pages/Home";
import AboutUs from "../src/pages/AboutUs";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { AboutUsData } from "./seeddata/aboutus";
import { IAboutUs } from "./interface/interface";
import ContactUs from "./pages/Contact";
import OurServices from "./pages/OurServices";
import Products from "./pages/Products";
import Footer from "./common/Footer";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  const AboutUsVar: IAboutUs[] = AboutUsData;
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Router>
        <Box>
          <Navbar />
          <Box>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/home" Component={Home} />
              <Route path="/products" Component={Products} />
              <Route path="/services" Component={OurServices} />
              <Route path="/aboutus" element={<AboutUs whyChooseUs={AboutUsVar} />}
              />
              <Route path="/contactus" Component={ContactUs} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
