
// Import necessary components and data
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import { IAboutUs } from '../interface/interface'; 
import  Animate  from 'react-awesome-reveal';// Import animation component
import { keyframes } from '@emotion/react';

interface IProps {
  whyChooseUs: IAboutUs[];
}

// Define keyframe animation for fade-in effect
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


// Functional component for displaying information about the company
export default function AboutUs(props: IProps) {
  const { whyChooseUs } = props;

  return (
    <Box>
        <Box
      sx={{
        backgroundImage: "url('https://www.paho.org/sites/default/files/styles/top_hero/public/2023-05/untitled-1500-540-px-9_0.jpg?itok=EQHe7EBh')", // Add your background image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '400px', 
        paddingBottom:"50px"
      }}
    >
      <Container sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <Typography variant="h3" textAlign="center" color="white">
          About Us
        </Typography>
      </Container>
    </Box>
    <Container sx={{paddingY:"50px"}}>
      <Grid container spacing={3}>
        {whyChooseUs.map((whychoose) => (
          <Grid item key={whychoose.id} xs={12} sm={6} md={4}>
            <Animate keyframes={fadeInUp} duration={600} delay={100} triggerOnce>
              <Card
               // Styling for the card and its flip effect on hover
                sx={{
                  minWidth: 250,
                  height: 300,
                  position: 'relative',
                  borderRadius: '20px !important',
                  perspective: '1000px',
                  transition: 'transform 0.4s',
                  transformStyle: 'preserve-3d',
                  zIndex: 1,
                  '&:hover': {
                    '& .flipCardInner': {
                      transform: 'rotateY(180deg)',
                    },
                  },
                }}
              >

                 {/* Inner content of the flip card */}
                <Box
                  className="flipCardInner"
                   // Styling for the inner content and flip animation
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.4s',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <Box
                    className="flipCardFront"
                     // Styling for the front side of the card
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transition: 'transform 0.3s',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: 'transparent',
                      backgroundImage: `url(${whychoose.image})`,
                    }}
                  >
                   <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.64)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                        <Box
                        className="imageWithBorder"
                        sx={{
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          width: '50px', 
                          height: '50px', 
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: '10px',
                        }}
                      >
                        {/* Content displayed on the front side */}
                        {whychoose.imageicon}
                      </Box>
                      <Typography variant="h5" fontWeight={500}>
                        {whychoose.title}
                      </Typography>
                    </Box>
                     {/* Back side of the flip card */}
                  </Box>
                  <Typography
                    className="flipCardBack"
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transition: 'transform 0.5s',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      transform: 'rotateY(180deg)',
                      fontWeight: 'bolder',
                    }}
                  >
                    {/* Content displayed on the back side */}
                    {whychoose.description}
                  </Typography>
                </Box>
              </Card>
            </Animate>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}
