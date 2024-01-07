 {/* Navbar interface */}

export interface NavbarMenu {
    name: string;
    url: string;
  }
  
  export interface NavBarState {
    drawerOpen: boolean;
  }


{/* AboutUs interface */}

export interface IAboutUs {
    id: number;
    imageicon: string;
    title: string;
    description: string;
    image: string;
  }

{/* Products interface */}

export interface Company {
    CompanyName: string;
    products: Product[];
  }
  
 export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
  }


  export interface ProductsState {
    redirectToContact: boolean;
    selectedProduct: string;
    selectedManufacturer:string;
  }

  {/* ContactForm interface */}

  export interface ContactFormState {
    name: string;
    email: string;
    age: string;
    city:string;
    sex: string;
    onsetDate: string;
    symptoms: string;
    drugIssues: string;
    errors: { [key: string]: string };
  }
  
  export interface ContactFormProps {
    selectedProduct: string;
    selectedManufacturer:string;
    goBack: () => void;
  }

{/* Service interface */}
  export interface ServiceProps {
    id: number;
    image: string;
    description: string;
  }