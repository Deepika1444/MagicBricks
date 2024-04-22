import React , { useState }  from "react";
import { Container ,Navbar ,Dropdown,Form,Button } from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';
import { InputGroup, FormControl } from 'react-bootstrap';


let Header=()=>{ 
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Searching for:", event.target.value);
  };
 
    return(

        <div >
            <Container className="col-4 mt-5 mb-5"  >
                <h3> Find Your Perfect <i><b>Rental home</b></i></h3>
            </Container>
            <Container className="d-flex justify-content-center"  >
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Buy</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Rent</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>New Projects</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>PG</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Plot</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Commercial</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Post Free Property Ad</Navbar.Text>
            </Container>

            <div className=" searchRoundeed border  p-3 mt-4" style={{width:'60%', marginLeft:'250px',height:'80px'}}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container style={{marginBottom:'10px'}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex flex-grow-1   align-items-center" >
            <InputGroup className="mt-1" style={{width:'50%'}}>
      <InputGroup.Text id="basic-addon1"><LocationOnIcon className="OnIcon"/></InputGroup.Text>
      <FormControl
      style={{fontSize:'25px'}}
      className="borderless-input"
        placeholder="Enter city, location, projects "
        // aria-label="Location"
        aria-describedby="basic-addon1"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </InputGroup>

 

    {/* <h1>|</h1> */}


              <Dropdown className="me-2">
                 
                <Dropdown.Menu>
                  <Dropdown.Item href="#"><CurrencyRupeeIcon/> </Dropdown.Item>
                  <Dropdown.Item href="#"><CurrencyRupeeIcon/>Option 2</Dropdown.Item>
                  {/* Add more options here */}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="me-2"> 
                <Dropdown.Toggle variant="light" id="flat-dropdown">
                  <h1 className="OnIcon"><HomeIcon/></h1>
                  Flat +2
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Toggle  
                   variant="light"
                    href="#" 
                    
                     > 
                    Residentials
                    </Dropdown.Toggle>
                  <Dropdown.Item >flat</Dropdown.Item>
                  <Dropdown.Item>House/villa</Dropdown.Item>
                  <Dropdown.Item>plot</Dropdown.Item>

                  <Dropdown.Toggle variant="light" href="#"><CurrencyRupeeIcon/>Commercial</Dropdown.Toggle>
                  <Dropdown.Toggle variant="light" href="#"><CurrencyRupeeIcon/>Other property Types</Dropdown.Toggle>

                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="me-2">
                <Dropdown.Toggle variant="light" id="budget-dropdown">
                  <h1 className="OnIcon"><CurrencyRupeeIcon/></h1>
                  Budget
                </Dropdown.Toggle>
                {/* <Dropdown.Menu>
                  <Dropdown.Item href="#"><CurrencyRupeeIcon/>Option 1</Dropdown.Item>
                  <Dropdown.Item href="#"><CurrencyRupeeIcon/>Option 2</Dropdown.Item> */}
                  {/* Add more options here */}
                {/* </Dropdown.Menu> */}


                <Dropdown.Menu>
                <Dropdown.ItemText>Min Price</Dropdown.ItemText><hr/>
                <Dropdown.ItemText>Min </Dropdown.ItemText>
                <Dropdown.ItemText href="#"><CurrencyRupeeIcon/>5 Crore</Dropdown.ItemText>
                        <Dropdown.ItemText href="#"><CurrencyRupeeIcon/> 6 Crore</Dropdown.ItemText>
                        <Dropdown.ItemText href="#"><CurrencyRupeeIcon/>7 Crore</Dropdown.ItemText>
                        <Dropdown.ItemText href="#"><CurrencyRupeeIcon/>8 Crore</Dropdown.ItemText>
                        <Dropdown.ItemText href="#"><CurrencyRupeeIcon/>9 Crore</Dropdown.ItemText>
                        <Dropdown.ItemText href="#"><CurrencyRupeeIcon/>10 Crore</Dropdown.ItemText>
                <Dropdown drop='right' as={Dropdown.Item}>
                    {/* <Dropdown.Toggle as='a' className="dropdown-toggle">Select Range</Dropdown.Toggle> */}
                    <Dropdown.Menu>
                      
                    </Dropdown.Menu>
                </Dropdown>
            </Dropdown.Menu>
              </Dropdown>
              {/* <Form.Control type="text" placeholder="Search" className="me-1" id="form-control " style={{width:'150px'}} /> */}
              {/* <Button variant="danger"> <SearchIcon className="OnIcon"/>Search</Button>
               */}
       <Button variant="danger" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',height:'60px', width:'140px',borderRadius:'40px' }}>
  <SearchIcon style={{ marginRight: '5px' }} /> <span style={{fontWeight:'bold',fontSize:'22px'}}>Search</span>
</Button>


            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
        </div>
    )
}
export default Header














 