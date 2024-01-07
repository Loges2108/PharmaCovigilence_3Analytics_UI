
import { Typography, Box } from '@mui/material';

// Functional component for the Footer section
const Footer = () => {
  return (
    <Box sx={{paddingTop:5}}>
    <Box bgcolor="#333" color="#fff" py={2}>
      <Typography variant="body2" align="center">
         {/* Displaying the current year dynamically */}
        &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </Typography>
    </Box>
    </Box>
  );
};

export default Footer;
