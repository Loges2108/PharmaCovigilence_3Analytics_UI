// Import necessary components and styles
import { Component, MouseEvent } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define a class component for the HomePage
class HomePage extends Component {
  render() {
    const images = [
      "https://opisresearch.com/wp-content/uploads/2020/09/20201001_OPIS_Pharmacovigilance.jpg",
      "https://careers.iconplc.com/img/T1jiC8KhLU_c2QjadgdpUA/DSA.jpg?v=5eba175b3780a9fa523d02fa748c43d7",
      "https://t3.ftcdn.net/jpg/05/09/83/86/360_F_509838637_R2bzIu3JY7TNTuZr4zKjsWWB4aQx3Dsi.jpg",
      "https://www.uppsalareports.org/media/ng1nju0p/ur-lucie-illustration-5-web.jpg",
      "https://www.shutterstock.com/image-illustration/box-different-pills-tablets-warning-600nw-2314410701.jpg",
    ];
    // Configuration settings for the slider
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <FaChevronRight />,
      prevArrow: <FaChevronLeft />,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    // Component for the previous arrow in the slider
    const PrevArrow = ({
      onClick,
    }: {
      onClick: (event: MouseEvent<HTMLDivElement>) => void;
    }) => {
      return (
        <div
          style={{ position: "absolute", top: "50%", left: "15px", zIndex: 1 }}
        >
          <FaChevronLeft
            onClick={onClick as React.MouseEventHandler<HTMLDivElement>}
          />
        </div>
      );
    };
    // Component for the next arrow in the slider
    const NextArrow = ({
      onClick,
    }: {
      onClick: (event: MouseEvent<HTMLDivElement>) => void;
    }) => {
      return (
        <div
          style={{ position: "absolute", top: "50%", right: "15px", zIndex: 1 }}
        >
          <FaChevronRight
            onClick={onClick as React.MouseEventHandler<HTMLDivElement>}
          />
        </div>
      );
    };

    return (
        // Main content of the HomePage component
      <Box sx={{ paddingBottom: "100px" }}>
        <Box
          sx={{
            backgroundImage:
              "url('https://www.paho.org/sites/default/files/styles/top_hero/public/2023-03/14372312193c266106cebk.jpg?h=a1e1a043&itok=SorR8g7b')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            height: "400px",
            paddingBottom: "50px",
          }}
        >
          <Container
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <Typography variant="h3" textAlign="center" color="white">
              Home
            </Typography>
          </Container>
        </Box>
         {/* Container for the slider */}
        <Container sx={{ marginTop: 4 }}>
          <Slider
            {...sliderSettings}
            prevArrow={<PrevArrow onClick={FaChevronLeft} />}
            nextArrow={<NextArrow onClick={FaChevronRight} />}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`carousel-image-${index}`}
                  style={{
                    width: "80%",
                    height: "500px",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </Slider>
        </Container>
      </Box>
    );
  }
}

export default HomePage;
