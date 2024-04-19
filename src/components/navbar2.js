import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import  Badge from 'react-bootstrap/Badge';

 const Navigation2=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container  >
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto"> 

              <NavDropdown  className='text-white mx-3' title="Buy" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.2"> 
              </NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>




              <NavDropdown  className='text-white mx-3' title=" RENT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.2"> 
              </NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>



              <NavDropdown  className='text-white mx-3' title=" SELL" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.2"> 
              </NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown  className='text-white  mx-3' title=" HOME LOANS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.2"> 
              </NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown  className='text-white mx-3' title="Property Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.2"> 
              </NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown  className='text-white mx-3 '   title="MB Advice" id="basic-nav-dropdown">
          <Badge bg="warning" text="dark">New</Badge>

              <NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.2"> 
              </NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>



              <NavDropdown  className='text-white mx-3' title=" Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.2"> 
              </NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>





          </Nav>    
           
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
    
  );
}

export default  Navigation2;
