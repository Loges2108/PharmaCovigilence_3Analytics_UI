import { Component } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactForm from './ContactForm'; 
import { Company, ProductsState } from '../interface/interface'; 
import { medicineData } from '../seeddata/ProductData';

interface ProductsProps {}

const medicineInfo = medicineData;
class Products extends Component<ProductsProps, ProductsState> {
  constructor(props: ProductsProps) {
    super(props);
    this.state = {
      redirectToContact: false,
      selectedProduct: '',
      selectedManufacturer: '',
    };
  }
  
// Function to handle card click, setting state for contact form display
  handleCardClick = (productName: string, manufacturer: string) => {
    this.setState({
      redirectToContact: true,
      selectedProduct: productName,
      selectedManufacturer: manufacturer,
    });
  };

  handleBack = () => {
    this.setState({ redirectToContact: false });
  };

  render() {
    const { redirectToContact, selectedProduct, selectedManufacturer } = this.state;
    const medicineData: Company[] = medicineInfo;

    if (redirectToContact) {
      return (
        <ContactForm
          selectedProduct={selectedProduct}
          goBack={this.handleBack}
          selectedManufacturer={selectedManufacturer}
        />
      );
    }

    return (
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Products
        </Typography>
        <Grid container spacing={2}>
          {medicineData.map((company, index) => (
            <Grid item xs={12} key={index}>
              <Accordion defaultExpanded style={{ backgroundColor: '#f0f0f0' }} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h4">{company.CompanyName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    {company.products.map((product, productIndex) => (
                      <Grid item xs={12} sm={6} md={3} key={productIndex}>
                        <Card style={{ height: '100%' }}>
                          <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img
                              src={product.image}
                              alt={product.name}
                              style={{
                                  width: '150px', 
                                  height: '150px', 
                                  objectFit: 'cover',
                                
                              }}
                            />
                            <Typography variant="h6" component="h2" style={{ marginTop: '10px' }}>
                              {product.name}
                            </Typography>
                            <Typography color="textSecondary">
                              {product.description}
                            </Typography>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() =>
                                this.handleCardClick(
                                  product.name,
                                  company.CompanyName
                                )
                              }
                              style={{ marginTop: '10px' }}
                            >
                              Report
                            </Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Products;
