import React , { useState  }  from "react";
import { Container ,Navbar ,Dropdown,Form,Button,Carousel,Row,Col  } from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';
import { InputGroup, FormControl ,Modal} from 'react-bootstrap';


let Header=()=>{ 
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);


 
  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
    setNotFound(false);
    if (e.target.value === '') {
      setSuggestions([]);
    }
  };
 
  
  const handleSubmit = () => {
    fetch("http://localhost:3002/allproducts")
      .then(res => res.json())
      .then(products => {
        const filteredSuggestions = products.filter(product =>
          product.address.toUpperCase().startsWith(inputValue)
        );
        setSuggestions(filteredSuggestions);
        if (filteredSuggestions.length > 0) {
          setShowModal(true);
        } else {
          setNotFound(true);
        }
   
      })
      .catch(error => console.error('Error fetching products:', error));
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setNotFound(false);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
 

 
    return(
    
    <>
  {/* <div>
    <Container className="col-4 mt-5 mb-3" style={{marginLeft:'30%'}} >
      <h3>Find a home you'll <span className="pacifico-regular">Love</span></h3>
    </Container>
    <Container className="d-flex justify-content-start" style={{marginLeft:'20%'}} >
      <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Buy</Navbar.Text>
      <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Rent</Navbar.Text>
      <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>New Projects</Navbar.Text>
      <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>PG</Navbar.Text>
      <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Plot</Navbar.Text>
      <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Commercial</Navbar.Text>
      <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Post Free Property Ad</Navbar.Text>
    </Container>

    <div className="search Rounded border p-2 mt-2 search-container" style={{borderRadius:'50px',marginLeft:'10%'}}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Form className="d-flex flex-grow-1 align-items-center search-form">
            <InputGroup className="mt-1" style={{ width: '50%' }}>
              <InputGroup.Text id="basic-addon1"><LocationOnIcon className="OnIcon" style={{color:'red'}} /></InputGroup.Text>
              <FormControl
                style={{ fontSize: '25px' }}
                className="borderless-input"
                placeholder="Enter city, location, projects"
                aria-describedby="basic-addon1"
                value={inputValue}
                onChange={handleInputChange}
              />
            </InputGroup>
            <Dropdown className="me-2">
              <Dropdown.Toggle variant="none" id="flat-dropdown" style={{fontSize:'20px',color:'GrayText'}} >
                <HomeIcon className="OnIcon" style={{color:'red'}} /> Flat +2
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Flat</Dropdown.Item>
                <Dropdown.Item href="#">House/Villa</Dropdown.Item>
                <Dropdown.Item href="#">Plot</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="me-2  ">
              <Dropdown.Toggle variant="none" id="budget-dropdown" style={{fontSize:'20px',color:'GrayText'}} >
                <CurrencyRupeeIcon className="OnIcon" style={{backgroundColor:'red',borderRadius:'30px',fontSize:'',color:'white' }} /> Budget
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#"><CurrencyRupeeIcon /> 5 Crore</Dropdown.Item>
                <Dropdown.Item href="#"><CurrencyRupeeIcon /> 6 Crore</Dropdown.Item>
                <Dropdown.Item href="#"><CurrencyRupeeIcon /> 7 Crore</Dropdown.Item>
                <Dropdown.Item href="#"><CurrencyRupeeIcon /> 8 Crore</Dropdown.Item>
                <Dropdown.Item href="#"><CurrencyRupeeIcon /> 9 Crore</Dropdown.Item>
                <Dropdown.Item href="#"><CurrencyRupeeIcon /> 10 Crore</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="danger" onClick={handleSubmit} className="search-button fs-5">
              <SearchIcon style={{ marginRight: '5px'  }} /> Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>

    <div className="carousel-container ms-3">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300x200"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300x200"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300x200"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  </div> */}
  <Container className="mt-5">
      <Row>
        <Col xs={7}>
          <Container className="col-8 mb-3 " style={{marginLeft:'30%'}}>
            <h3>Find a home you'll <span className="pacifico-regular">Love</span></h3>
          </Container>
          <Container className="d-flex justify-content-start" style={{width:"120%"}}>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Buy</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Rent</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>New Projects</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>PG</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Plot</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Commercial</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Post Free Property Ad</Navbar.Text>
          </Container>
          <div className="search-rounded border py-2 px-0 mt-2" style={{ borderRadius: '50px' ,width:'130%'}}>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Form className="d-flex flex-grow-1 align-items-center">
                  <InputGroup className="mt-1" style={{ width: '50%' }}>
                    <InputGroup.Text id="basic-addon1"><LocationOnIcon className="OnIcon" style={{ color: 'red' }} /></InputGroup.Text>
                    <FormControl
                      style={{ fontSize: '25px' }}
                      className="borderless-input"
                      placeholder="Enter city, location, projects"
                      aria-describedby="basic-addon1"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                  <Dropdown className="me-2">
                    <Dropdown.Toggle variant="none" id="flat-dropdown" style={{ fontSize: '20px', color: 'GrayText' }}>
                      <HomeIcon className="OnIcon" style={{ color: 'red' }} /> Flat +2
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Flat</Dropdown.Item>
                      <Dropdown.Item href="#">House/Villa</Dropdown.Item>
                      <Dropdown.Item href="#">Plot</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="me-2">
                    <Dropdown.Toggle variant="none" id="budget-dropdown" style={{ fontSize: '20px', color: 'GrayText' }}>
                      <CurrencyRupeeIcon className="OnIcon" style={{ backgroundColor: 'red', borderRadius: '30px', color: 'white' }} /> Budget
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#"><CurrencyRupeeIcon /> 5 Crore</Dropdown.Item>
                      <Dropdown.Item href="#"><CurrencyRupeeIcon /> 6 Crore</Dropdown.Item>
                      <Dropdown.Item href="#"><CurrencyRupeeIcon /> 7 Crore</Dropdown.Item>
                      <Dropdown.Item href="#"><CurrencyRupeeIcon /> 8 Crore</Dropdown.Item>
                      <Dropdown.Item href="#"><CurrencyRupeeIcon /> 9 Crore</Dropdown.Item>
                      <Dropdown.Item href="#"><CurrencyRupeeIcon /> 10 Crore</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="danger" onClick={handleSubmit} className="search-button fs-5 mx-1 "   >
                    <SearchIcon style={{ marginRight: '' }} /> Search
                  </Button>
                </Form>
              </Container>
            </Navbar>
          </div>
        </Col>
        <Col xs={5} style={{borderRadius:'70px'}}  >
          <div className="carousel-container" style={{marginLeft:'40%' }}>
            <Carousel indicators={false} controls={false} interval={1000}>
              <Carousel.Item>
                <img
                  className="d-block w-90"
                  src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/tvc/tvc-campaign-web-home-sell.png"
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-90"
                  src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/tvc/tvc-campaign-web-home-buy.png"
                  alt="Second slide"
                />
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
               
            </Carousel>
            <div className="custom-carousel-indicators">
              <span className="dot active"></span>
              <span className="dot "></span>
              <span className="dot "></span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  <Modal show={showModal} onHide={handleCloseModal} style={{ cursor: 'pointer' }}>
    <Modal.Header closeButton>
      <Modal.Title>{notFound ? 'Product Not Found' : (selectedProduct ? selectedProduct.name : 'Searched Suggestions')}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {notFound ? (
        <p>No products found</p>
      ) : (
        selectedProduct ? (
          <div>
            <p><b>Address:</b> {selectedProduct.address}</p>
            <img src={`http://localhost:3002/${selectedProduct.image}`} alt={selectedProduct.image} />
            <p><b>Owner's Number:</b> {selectedProduct.number}</p>
          </div>
        ) : (
          <ul>
            {suggestions.map(product => (
              <li key={product.id} onClick={() => handleProductClick(product)}>{product.address}</li>
            ))}
          </ul>
        )
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</>

    )
}
export default Header


 