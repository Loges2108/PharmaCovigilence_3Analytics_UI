// Import necessary components from Material-UI and interfaces
import React from 'react';
import { Typography, Grid, Paper, Container, Box, Divider } from '@mui/material';
import { ServiceProps } from '../interface/interface';

// Class-based component for displaying services
class YourComponent extends React.Component {
  // Function to render individual service components based on their properties
  renderServiceComponent = (service: ServiceProps) => {
    const { id, image, description } = service;

// Alternate rendering based on odd/even service ID for different layouts
    if (id % 2 === 1) {

      // Rendering for odd service ID
      return (
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <Grid item xs={5}>
            <Paper style={{ padding: '20px' , height:"200px",display:"flex", alignItems:"center",justifyContent:"center",backgroundColor:"antiquewhite"}}>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Divider orientation='vertical'/>
          </Grid>
          <Grid item xs={5}>
            <img src={image} alt="Service" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Grid>
        </Container>
      );
    } else {
       // Rendering for even service ID
      return (
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <Grid item xs={5}>
            <img src={image} alt="Service" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Grid>
          <Grid item xs={2}>
            <Divider orientation='vertical'/>
          </Grid>
          <Grid item xs={5}>
            <Paper style={{ padding: '20px',height:"200px", display:"flex", alignItems:"center",justifyContent:"center",backgroundColor:"antiquewhite"}}>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
            </Paper>
          </Grid>
        </Container>
      );
    }
  };
// Render method for the component
  render() {
    const services: ServiceProps[] = [
      {
        id: 1,
        image: 'https://www.propharmagroup.com/hs-fs/hubfs/Imported_Blog_Media/Pharmacovigilance-Expertise-2.png?width=1650&height=750&name=Pharmacovigilance-Expertise-2.png',
        description: 'Continuous monitoring and evaluation of drug safety profiles.',
      },
      {
        id: 2,
        image: 'https://www.virtueinsightms.com/wp-content/uploads/2018/06/Pharmacovigilance-Writing.png',
        description: 'Adverse event reporting and regulatory compliance assistance.',
      },
      {
        id: 3,
        image: 'https://www.virtueinsightms.com/wp-content/uploads/2018/02/pharmacovigilance-1.jpg',
        description: 'Risk assessment and management strategies for pharmaceutical products.',
      },
      {
        id: 4,
        image: 'https://www.birlasoft.com/sites/default/files/common/5-benefits-automation-pharmacovigilance.svg',
        description: 'Signal detection and analysis for potential safety concerns.',
      },
    ];

    return (
      <Box>
        {/* Section with background image */}
        <Box
          sx={{
            backgroundImage:
              "url('https://img-b.udemycdn.com/course/750x422/4953304_6097_7.jpg')",
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
              Our Services
            </Typography>
          </Container>
        </Box>
        {/* Grid container for displaying services */}
      <Grid container spacing={3} sx={{paddingTop:20}}>
        {services.map((service, index) => (
          <Grid container alignItems="center" key={index} spacing={3}>
            {this.renderServiceComponent(service)}
          </Grid>
        ))}
      </Grid>
      </Box>
    );
  }
}

export default YourComponent;
