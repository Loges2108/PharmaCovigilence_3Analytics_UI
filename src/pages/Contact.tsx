// Import necessary components and icons from Material-UI

import { Box, Container, IconButton, Link, Typography } from "@mui/material";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { Grid, Divider } from "@mui/material";

// Functional component for Contact section
function Contact() {
  return (
    <Box>
      {/* Section with a background image */}
      <Box
        sx={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/copyright-patent-concept-intellectual-property-600nw-1846992976.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "400px",
          paddingBottom: "50px",
        }}
      >
        {/* Container for the title */}
        <Container
          sx={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <Typography variant="h3" textAlign="center" color="white">
            Contact Us
          </Typography>
        </Container>
      </Box>
      {/* Container for contact information */}
      <Container maxWidth="lg" sx={{ marginY: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={3 }>
            <Typography
              variant="subtitle1"
              color="text.primary"
              gutterBottom
              fontWeight="bold"
              fontSize="20px"
              textAlign="center"
              justifyContent={"flex-start"}
              padding={1}
            >
              ADDRESS
            </Typography>
            <Box textAlign={"center"}>
              <Typography>Mariamman Kovil street</Typography>
              <Typography>Keelsathambur</Typography>
              <Typography>Namakkal</Typography>
              <Typography>637207</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={1}>
            <Divider orientation="vertical" />
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              gutterBottom
              fontWeight="bold"
              fontSize="20px"
              textAlign="center"
            >
              CONTACT
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography display={"flex"} sx={{ rowGap: 3 }}>
                <Phone color="warning" sx={{ marginRight: 1 }} /> 9876543210
              </Typography>
              <Typography display={"flex"}>
                <Email color="warning" sx={{ marginRight: 1 }} />{" "}
                tamtree@gmail.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={1}>
            <Divider orientation="vertical" />
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              gutterBottom
              fontWeight="bold"
              fontSize="20px"
              textAlign="center"
            >
              SOCIAL MEDIA
            </Typography>
            <Box display={"flex"} flexDirection={"row"} justifyContent="center" gap={5}>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton size="medium" aria-label="Facebook" color="inherit">
                  <Facebook />
                </IconButton>
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton size="medium" aria-label="Twitter" color="inherit">
                  <Twitter />
                </IconButton>
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton size="medium" aria-label="Instagram" color="inherit">
                  <Instagram />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Section for displaying Google Maps */}
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62630.473516726466!2d78.00811292530568!3d11.157649658998636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babd253c4618cef%3A0x90b44ec7da7cc3f3!2sKilsathambur%2C%20Tamil%20Nadu%20637207!5e0!3m2!1sen!2sin!4v1704642732839!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{border:0}}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}

export default Contact;
