import { Component, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { ContactFormState } from '../interface/interface';

// Interface defining the props expected by ContactForm component
interface ContactFormProps {
  selectedProduct: string;
  selectedManufacturer: string;
  goBack: () => void;
}


// Validation schema using yup for form validation
const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  age: yup
    .string()
    .required('Age is required'),
  city: yup.string().required('City is required'),
  sex: yup.string().required('Gender is required'),
  onsetDate: yup.date().required('Date of Onset is required'),
  symptoms: yup.string().required('Symptoms are required'),
  drugIssues: yup.string().required('Drug issues are required'),
});

class ContactForm extends Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age:'',
      city: '',
      sex: '',
      onsetDate: '',
      symptoms: '',
      drugIssues: '',
      errors:{}
    };
  }

 // Function to handle input changes in form fields
  handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as any as Pick<ContactFormState, keyof ContactFormState>);
  };

  // Function to handle form submission
  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = this.state;

    try {
       // Validate form data using the defined validation schema
      await validationSchema.validate(formData, { abortEarly: false });
      const { selectedProduct,selectedManufacturer } = this.props;
      const response = await axios.post('http://localhost:3000/sendemail', { ...formData, selectedProduct,selectedManufacturer});
      toast.success("Email sent successfully");
      console.log('Form submitted successfully:', response.data);
      
      // Clear form fields and errors after successful submission
      this.setState({
        name: '',
        email: '',
        age: '',
        city: '',
        sex: '',
        onsetDate: '',
        symptoms: '',
        drugIssues: '',
        errors: {},
      });
    } catch (error) {

      // Handle validation errors or submission failures
      if (error instanceof yup.ValidationError) {
        const errors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          errors[err.path as string] = err.message;
        });
        this.setState({ errors });
      } else {
        console.error('Error:', error);
      }
    }
  };

 // Render function to display the form
  render() {
    const { selectedProduct, selectedManufacturer, goBack } = this.props;
    const { name, email, age, city, sex, onsetDate, symptoms, drugIssues ,errors} = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto',
          width: '40%',
          margin: '0 auto',
          border: '1px solid #ccc',
          padding: '20px',
        }}
      >
        <Typography variant="h2">Contact Form</Typography>
        <Typography variant="h4" sx={{ marginY: '10px' }}>
          {selectedManufacturer}
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
          {selectedProduct}
        </Typography>

        <TextField
          name="name"
          label="Name"
          value={name}
          onChange={this.handleChange}
          fullWidth
          sx={{ marginBottom: '20px' }}
          error={!!errors.name}
          helperText={errors.name || ''}
        />
        <TextField
          name="email"
          label="E-mail"
          value={email}
          onChange={this.handleChange}
          fullWidth
          sx={{ marginBottom: '20px' }}
          error={!!errors.email}
          helperText={errors.email || ''}
        />
        <TextField
          name="age"
          label="Age"
          value={age}
          onChange={this.handleChange}
          fullWidth
          sx={{ marginBottom: '20px' }}
          error={!!errors.age}
          helperText={errors.age || ''}
        />
        <TextField
          name="city"
          label="City"
          value={city}
          onChange={this.handleChange}
          fullWidth
          sx={{ marginBottom: '20px' }}
          error={!!errors.city}
          helperText={errors.city || ''}
        />
        <TextField
          select
          name="sex"
          label="Gender"
          value={sex}
          onChange={this.handleChange}
          fullWidth
          sx={{ marginBottom: '20px' }}
          error={!!errors.sex}
          helperText={errors.sex || ''}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
        <TextField
          name="onsetDate"
          label="Date of Onset of Disease"
          type="date"
          value={onsetDate}
          onChange={this.handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          sx={{ marginBottom: '20px' }}
          error={!!errors.onsetDate}
          helperText={errors.onsetDate || ''}
        />
        <TextField
          name="symptoms"
          label="Disease Symptoms"
          value={symptoms}
          onChange={this.handleChange}
          multiline
          fullWidth
          minRows={3}
          maxRows={10}
          sx={{ marginBottom: '20px' }}
          error={!!errors.symptoms}
          helperText={errors.symptoms || ''}
        />
        <TextField
          name="drugIssues"
          label="Issues about Drugs"
          value={drugIssues}
          onChange={this.handleChange}
          multiline
          fullWidth
          minRows={3}
          sx={{ marginBottom: '20px' }}
          error={!!errors.drugIssues}
          helperText={errors.drugIssues || ''}
        />

        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            width: '100%',
            marginTop: '15px',
          }}
        >
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="contained" color="secondary" onClick={goBack}>
            Back
          </Button>
        </Box>
      </form>
    );
  }
}

export default ContactForm;
