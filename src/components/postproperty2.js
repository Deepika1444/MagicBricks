 


// import React from "react";
// import { Container,Navbar ,Badge,Form,Button} from "react-bootstrap";

// const Sellproperty=()=>{
//     return(
//         <>
//       <div style={{ backgroundColor: 'lightgrey' }}>
//   <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020, marginTop: '0px' }}>
//     <Container fluid className='navColor' style={{ height: '50px' }}>
//       <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
//         <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
//       </Navbar.Brand>
//     </Container>
//   </Navbar>
//   <Container fluid>
//     <div className='d-flex mt-5 mb-4'>
//       <div style={{ width: '60%', backgroundColor: '#fff' }}>
//         <Form style={{ margin: '4rem 0 0 10rem' }}>
//           <h2>Sell or Rent your Property</h2>
//           <p className="d-flex  align-items-start">You are posting this property for
//             <Badge bg="warning" text="dark" style={{ fontSize: '15px', marginLeft: '2px' }}>FREE!</Badge>
//             {/* <img src="https://fiverr-res.cloudinary.com/videos/t_thumbnail3_3/yv3ychpss2uyzdslyipn/create-professional-ads-youtube-shorts-tiktok-videos-creative-ads.png" alt="postimage" height="auto" width="25%" style={{ marginLeft: '10rem', maxHeight: '140px' }} /> */}
//           </p>
//           {/* <span>Listing Package</span><span style={{fontWeight:'bold'}} className="mx-5">1 Standard Listing - Free</span>
//           <br/> */}

//           {/* <h4 className="my-5">Property Details</h4>
//           <span className="mx-3">For</span> */}


// <div>
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Owner Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter Name" name="name" style={{width:'30rem'}}/>
//         {/* <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text> */}
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" name="mail" />
//       </Form.Group>


//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>MobileNumber</Form.Label>
//         <Form.Control type="phnumber" placeholder="Enter number" name="phonenumber" />
//       </Form.Group>
     
//       <Form.Group className="mb-3"  controlId="formImages">
//                 <Form.Label>Select Images</Form.Label>
//                 <Form.Control type="file"  placeholder="Add images" name="Images"  />
//                 <Form.Control type="file"  placeholder="Add images" name="Images"  />
//                 <Form.Control type="file"  placeholder="Add images" name="Images"  />
//                 <Form.Control type="file"  placeholder="Add images" name="Images"  />

//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Flate</Form.Label>
//         <Form.Control type="text" placeholder="example 2bhk or 3bhk" name="Flate" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>price</Form.Label>
//         <Form.Control type="number" placeholder="Enter Price" name="Price" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Squere fit</Form.Label>
//         <Form.Control type="text" placeholder="example 224sqt" name="Square" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Adress</Form.Label>
//         <Form.Control type="text" placeholder="Enter address" name="Address" />
//       </Form.Group>
            


     
     
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
  

// </div>



 
//         </Form>

//       </div>
//     </div>
//   </Container>
// </div>


//         </>
//     )
// }
// export default Sellproperty 



// import React, { useState } from "react";
// import { Container,Navbar ,Form,Col,Row,Button,Image} from "react-bootstrap";
// import Swal from 'sweetalert2';
// import { useNavigate } from "react-router-dom";
// const naviagate=useNavigate
// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     email: "",
//     number: "",
//     flat: "",
//     price: "",
//     sqft: "",
//     address: "",
//   });
//   const [inputKey, setInputKey] = useState(Date.now());

//   const AddProduct = async () => {
//     // Add your logic for adding a product

//     try {
//       let formData = new FormData();
//       formData.append("product", image);

//       const imageResponse = await fetch("http://localhost:3002/upload", {
//         method: "POST",
//         body: formData
//       });
//       const imageData = await imageResponse.json();

//       if (imageData.success) {
//         const product = { ...productDetails, image: imageData.image_url };
//         const productResponse = await fetch("http://localhost:3002/addproduct", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(product)
//         });
//         const productData = await productResponse.json();

//         if (productData.success) {
//           // Replace default alert with SweetAlert
//           Swal.fire({
//             icon: 'success',
//             title: ' Owner Details Added',
//             showConfirmButton: false,
//             timer:3500
//           });
//           // naviagate('*')
//           // Clear form after successful submission
//           setProductDetails({
//             name: "",
//             email: "",
//             number: "",
//             flat: "",
//             price: "",
//             sqft: "",
//             address: "",
//             city:"",
//           });
//           setImage(null); // Reset the image state
//           setInputKey(Date.now());  // Reset the file input

//         }
//          else {
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Failed to add product!',
//           });
//         }
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Failed to upload image!',
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'An error occurred while adding the product!',
//       });
//     }
//   };

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     // <>
//     // <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020, marginTop: '0px' }}>
//     //     <Container fluid className='navColor' style={{ height: '50px' }}>
//     //        <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
//     //          <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
//     //        </Navbar.Brand>
//     //      </Container>
//     //  </Navbar>
//     // <Container
    
//     //   style={{
//     //     display: "flex",
      
//     //     height: "139vh",
//     //     marginBottom:'150px',
//     //     marginTop:'50px'
//     //   }}
//     // >
//     //   <div
//     //     className="add-product shadow p-4"
//     //     style={{
//     //       width: "400px",
//     //       backgroundColor: "#ffffff",
//     //       borderRadius: "8px",
//     //       boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//     //     }}
//     //   >
//     //     <h1>Fill THE  </h1>
//     //     <h2
//     //       className="text-center mb-4"
//     //       style={{
//     //         fontSize: "24px",
//     //         fontWeight: "bold",
//     //         color: "#333333",
//     //       }}
//     //     >
//     //       Owner Details
//     //     </h2>
//     //     <form>
//     //       <div className="mb-3">
//     //         <label
//     //           className="form-label"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           Owner Name
//     //         </label>
//     //         <input
//     //           type="text"
//     //           name="name"
//     //           value={productDetails.name}
//     //           onChange={changeHandler}
//     //           className="form-control"
//     //           placeholder="Enter OwnerName here"
//     //         />
//     //       </div>
//     //       <div className="mb-3">
//     //         <label
//     //           className="form-label"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           Owner Email
//     //         </label>
//     //         <input
//     //           type="text"
//     //           name="email"
//     //           value={productDetails.email}
//     //           onChange={changeHandler}
//     //           className="form-control"
//     //           placeholder="Enter Owner email"
//     //         />
//     //       </div>
//     //       <div className="mb-3">
//     //         <label
//     //           className="form-label"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           Owner MobileNumber
//     //         </label>
//     //         <input
//     //           type="text"
//     //           name="number"
//     //           value={productDetails.number}
//     //           onChange={changeHandler}
//     //           className="form-control"
//     //           placeholder="Enter Owner Number"
//     //         />
//     //       </div>
//     //       <div className="mb-3">
//     //         <label
//     //           className="form-label"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           Price
//     //         </label>
//     //         <input
//     //           type="text"
//     //           name="price"
//     //           value={productDetails.price}
//     //           onChange={changeHandler}
//     //           className="form-control"
//     //           placeholder="Type offer price here"
//     //         />
//     //       </div>
//     //       <div className="mb-3">
//     //         <label
//     //           className="form-label"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           Sqft
//     //         </label>
//     //         <input
//     //           type="text"
//     //           name="sqft"
//     //           value={productDetails.sqft}
//     //           onChange={changeHandler}
//     //           className="form-control"
//     //           placeholder="Type sqft here"
//     //         />
//     //       </div>
//     //       <div className="mb-3">
//     //         <label
//     //           className="form-label"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           Flat
//     //         </label>
//     //         <select
//     //           name="flat"
//     //           value={productDetails.flat}
//     //           onChange={changeHandler}
//     //           className="form-select"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           <option value="">Select</option>
//     //           <option value="1BHK">1BHK</option>
//     //           <option value="2BHK">2BHK</option>
//     //           <option value="3BHK">3BHK</option>
//     //           <option value="4BHK">4BHK</option>
//     //         </select>
//     //       </div>
//     //       <div className="mb-3">
//     //         <label
//     //           className="form-label"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           Address
//     //         </label>
//     //         <input
//     //           type="text"
//     //           name="address"
//     //           value={productDetails.address}
//     //           onChange={changeHandler}
//     //           className="form-control"
//     //           placeholder="Enter Address"
//     //         />
//     //       </div>
//     //       {/* <div className="mb-3">
//     //         <label
//     //           className="form-label"
//     //           style={{
//     //             fontSize: "14px",
//     //             fontWeight: "bold",
//     //             color: "#555555",
//     //           }}
//     //         >
//     //           Product Images
//     //         </label>
//     //         <input
//     //           type="file"
//     //           name="image"
//     //           onChange={imageHandler}
//     //           className="form-control"
//     //           accept="image/*"
//     //         />
//     //       </div> */}
//     //        <div className="mb-3">
//     //           <label className="form-label" style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>Product Images</label>
//     //           <input type="file" name="image" onChange={imageHandler} className="form-control" accept="image/*" key={inputKey} />
//     //         </div>
//     //       <button
//     //         type="button"
//     //         className="btn btn-Danger"
//     //         onClick={AddProduct}
//     //         style={{
//     //           width: "50%",
//     //           fontSize: "16px",
//     //           fontWeight: "bold",
//     //           borderRadius: "4px",
//     //           backgroundColor: "red",
//     //           border: "none",
//     //         }}
//     //       >
//     //         Submit
//     //       </button>
//     //     </form>
//     //   </div>
//     // </Container>
//     // </>
//     <>
//      <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020, marginTop: '0px' }}>
//         <Container fluid className='navColor' style={{ height: '50px' }}>
//              <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
//               <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
//           </Navbar.Brand>
//           </Container>
//           </Navbar>
//     <Container fluid style={{backgroundColor:'lightgrey'}}>
//      <Container  fluid style={{ backgroundColor: '#fff', paddingLeft: '10%' ,width:"50rem" ,marginLeft:'0',marginTop: '8%' }}>
//       <Row>
//         <Col md={6}>
//           <h1>Sell or Rent Your Property</h1>
//           <p>You are posting this property for <strong>FREE</strong></p>
//           <Col md={12} className="d-flex align-items-center justify-content-center mx-5">
//           <Image src="https://via.placeholder.com/200"  style={{marginLeft:'30rem'}} />
//         </Col>
//           <Form style={{marginTop:'0%'}}>
//             <Form.Group>
//               <Form.Label>Listing Type</Form.Label>
//               <div>
//                 <Form.Check inline type="radio" label="I am looking to Sell" name="listingType" />
//                 <Form.Check inline type="radio" label="I am looking to Rent/Lease" name="listingType" />
//                 <Form.Check inline type="radio" label="PG/Hostel" name="listingType" />
//               </div>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Property Type</Form.Label>
//               <Form.Control as="select">
//                 <option>Select Property Type</option>
//                 {/* Add more options as needed */}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>City</Form.Label>
//               <Form.Control type="text" placeholder="Enter City" />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Locality</Form.Label>
//               <Form.Control type="text" placeholder="Enter Locality" />
//             </Form.Group>

//             {/* Property Features */}
//             <Form.Group>
//               <Form.Label>Property Features</Form.Label>
//               <Row>
//                 <Col>
//                   <Form.Label>Bedrooms</Form.Label>
//                   <div>
//                     <Button variant="outline-secondary">1</Button>
//                     <Button variant="outline-secondary">2</Button>
//                     <Button variant="outline-secondary">3</Button>
//                     <Button variant="outline-secondary">4</Button>
//                     <Button variant="outline-secondary">4+</Button>
//                   </div>
//                 </Col>
//                 <Col>
//                   <Form.Label>Balconies</Form.Label>
//                   <div>
//                     <Button variant="outline-secondary">0</Button>
//                     <Button variant="outline-secondary">1</Button>
//                     <Button variant="outline-secondary">2</Button>
//                     <Button variant="outline-secondary">3+</Button>
//                   </div>
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group>
//               <Row>
//                 <Col>
//                   <Form.Label>Floor No.</Form.Label>
//                   <div>
//                     <Button variant="outline-secondary">Lower Basement</Button>
//                     <Button variant="outline-secondary">Upper Basement</Button>
//                     <Button variant="outline-secondary">Ground</Button>
//                     {[1, 2, 3, 4, 5, '6+'].map(num => (
//                       <Button key={num} variant="outline-secondary">{num}</Button>
//                     ))}
//                   </div>
//                 </Col>
//                 <Col>
//                   <Form.Label>Total Floors</Form.Label>
//                   <div>
//                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '13+'].map(num => (
//                       <Button key={num} variant="outline-secondary">{num}</Button>
//                     ))}
//                   </div>
//                 </Col>
//               </Row>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Furnished Status</Form.Label>
//               <div>
//                 <Form.Check inline type="radio" label="Furnished" name="furnishedStatus" />
//                 <Form.Check inline type="radio" label="Unfurnished" name="furnishedStatus" />
//                 <Form.Check inline type="radio" label="Semi-Furnished" name="furnishedStatus" />
//               </div>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Bathrooms</Form.Label>
//               <div>
//                 {[1, 2, 3, '3+'].map(num => (
//                   <Button key={num} variant="outline-secondary">{num}</Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Number of Seats</Form.Label>
//               <Form.Control type="number" placeholder="Enter Number" />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Cabin/Meeting Rooms</Form.Label>
//               <Form.Control as="select">
//                 <option>Select</option>
//                 {/* Add more options as needed */}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Open Hours</Form.Label>
//               <Form.Control type="text" placeholder="Select Day & Time" />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Willing to modify interiors</Form.Label>
//               <div>
//                 <Form.Check inline type="radio" label="Yes" name="modifyInteriors" />
//                 <Form.Check inline type="radio" label="No" name="modifyInteriors" />
//               </div>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Lock-in Period (in Years)</Form.Label>
//               <Form.Control type="number" placeholder="Enter Number" />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Corner Shop</Form.Label>
//               <div>
//                 <Form.Check inline type="radio" label="Yes" name="cornerShop" />
//                 <Form.Check inline type="radio" label="No" name="cornerShop" />
//               </div>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Is Main Road Facing</Form.Label>
//               <div>
//                 <Form.Check inline type="radio" label="Yes" name="mainRoadFacing" />
//                 <Form.Check inline type="radio" label="No" name="mainRoadFacing" />
//               </div>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Shared Office Space</Form.Label>
//               <div>
//                 <Form.Check inline type="radio" label="Yes" name="sharedOfficeSpace" />
//                 <Form.Check inline type="radio" label="No" name="sharedOfficeSpace" />
//               </div>
//             </Form.Group>

//             {/* Add more form groups for other fields as shown in the image */}

//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Col>
      
//       </Row>
//     </Container>
//     </Container>
//      </>
//   );
// };

// export default AddProduct;
 


import React, { useState } from "react";
import { Container,Navbar ,Form,Col,Row,Button,Image} from "react-bootstrap";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
// import BasicExample from "./navbar";
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
// import Footer from "./footer";
const naviagate=useNavigate
const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    email: "",
    number: "",
    flat: "",
    price: "",
    sqft: "",
    address: "",
  });
  const [inputKey, setInputKey] = useState(Date.now());

  const AddProduct = async () => {
    // Add your logic for adding a product

    try {
      let formData = new FormData();
      formData.append("product", image);

      const imageResponse = await fetch("http://localhost:3002/upload", {
        method: "POST",
        body: formData
      });
      const imageData = await imageResponse.json();

      if (imageData.success) {
        const product = { ...productDetails, image: imageData.image_url };
        const productResponse = await fetch("http://localhost:3002/addproduct", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(product)
        });
        const productData = await productResponse.json();

        if (productData.success) {
          // Replace default alert with SweetAlert
          Swal.fire({
            icon: 'success',
            title: ' Owner Details Added',
            showConfirmButton: false,
            timer:3500
          });
          // naviagate('*')
          // Clear form after successful submission
          setProductDetails({
            name: "",
            email: "",
            number: "",
            flat: "",
            price: "",
            sqft: "",
            address: "",
            city:"",
          });
          setImage(null); // Reset the image state
          setInputKey(Date.now());  // Reset the file input

        }
         else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to add product!',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to upload image!',
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while adding the product!',
      });
    }
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
   
    <>
     {/* <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020, marginTop: '0px' }}>
        <Container fluid className='navColor' style={{ height: '50px' }}>
             <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
              <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
          </Navbar.Brand>
          </Container>
          </Navbar> */}
          {/* <BasicExample></BasicExample> */}
    <Container fluid style={{backgroundColor:'lightgrey'}}>

      
     <Container  fluid style={{ backgroundColor: '#fff', paddingLeft: '10%' ,width:"50rem" ,marginLeft:'0',marginTop: '0%' }}>
      <Row>

      {/* <Col md={12} className="d-flex align-items-center justify-content-center mx-5">
        </Col>
         */}
        <Col md={6}>
          <h1>Sell or Rent Your Property</h1>
          <p>You are posting this property for <strong>FREE</strong></p>
       
          <Form style={{marginTop:'0%'}}>

            <Form.Group>
              <Form.Label>Listing Type</Form.Label>
              <div>
                <Form.Check inline type="radio" label="I am looking to Sell" name="listingType" />
                <Form.Check inline type="radio" label="I am looking to Rent/Lease" name="listingType" />
                <Form.Check inline type="radio" label="PG/Hostel" name="listingType" />
              </div>
            </Form.Group>
{/* 
            <Form.Group>
              <Form.Label>Property Type</Form.Label>
              <Form.Control as="select">
                <option>Select Property Type</option>
                {/* Add more options as needed */}
              {/* </Form.Control>
            </Form.Group> */} 

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Locality</Form.Label>
              <Form.Control type="text" placeholder="Enter Locality" />
            </Form.Group>

            {/* Property Features */}
            <Form.Group>
              <Form.Label>Property Features</Form.Label>
              <Row>
                <Col>
                  <Form.Label>Bedrooms</Form.Label>
                  <div>
                    <Button variant="outline-secondary">1</Button>
                    <Button variant="outline-secondary">2</Button>
                    <Button variant="outline-secondary">3</Button>
                    <Button variant="outline-secondary">4</Button>
                    <Button variant="outline-secondary">4+</Button>
                  </div>
                </Col>
                <Col>
                  <Form.Label>Balconies</Form.Label>
                  <div>
                    <Button variant="outline-secondary">0</Button>
                    <Button variant="outline-secondary">1</Button>
                    <Button variant="outline-secondary">2</Button>
                    <Button variant="outline-secondary">3+</Button>
                  </div>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Floor No.</Form.Label>
                  <div>
                    <Button variant="outline-secondary">Lower Basement</Button>
                    <Button variant="outline-secondary">Upper Basement</Button>
                    <Button variant="outline-secondary">Ground</Button>
                    {[1, 2, 3, 4, 5, '6+'].map(num => (
                      <Button key={num} variant="outline-secondary">{num}</Button>
                    ))}
                  </div>
                </Col>
                <Col>
                  <Form.Label>Total Floors</Form.Label>
                  <div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '13+'].map(num => (
                      <Button key={num} variant="outline-secondary">{num}</Button>
                    ))}
                  </div>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>
              <Form.Label>Furnished Status</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Furnished" name="furnishedStatus" />
                <Form.Check inline type="radio" label="Unfurnished" name="furnishedStatus" />
                <Form.Check inline type="radio" label="Semi-Furnished" name="furnishedStatus" />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Bathrooms</Form.Label>
              <div>
                {[1, 2, 3, '3+'].map(num => (
                  <Button key={num} variant="outline-secondary">{num}</Button>
                ))}
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Number of Seats</Form.Label>
              <Form.Control type="number" placeholder="Enter Number" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cabin/Meeting Rooms</Form.Label>
              <Form.Control as="select">
                <option>Select</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Open Hours</Form.Label>
              <Form.Control type="text" placeholder="Select Day & Time" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Willing to modify interiors</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Yes" name="modifyInteriors" />
                <Form.Check inline type="radio" label="No" name="modifyInteriors" />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Lock-in Period (in Years)</Form.Label>
              <Form.Control type="number" placeholder="Enter Number" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Corner Shop</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Yes" name="cornerShop" />
                <Form.Check inline type="radio" label="No" name="cornerShop" />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Is Main Road Facing</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Yes" name="mainRoadFacing" />
                <Form.Check inline type="radio" label="No" name="mainRoadFacing" />
              </div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Shared Office Space</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Yes" name="sharedOfficeSpace" />
                <Form.Check inline type="radio" label="No" name="sharedOfficeSpace" />
              </div>
            </Form.Group>



            {/* <div
        className="add-product shadow p-4"
        style={{
          width: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      > */}

        <form>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Owner Name
            </label>
            <input
              type="text"
              name="name"
              value={productDetails.name}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter OwnerName here"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Owner Email
            </label>
            <input
              type="text"
              name="email"
              value={productDetails.email}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter Owner email"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Owner MobileNumber
            </label>
            <input
              type="text"
              name="number"
              value={productDetails.number}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter Owner Number"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              value={productDetails.price}
              onChange={changeHandler}
              className="form-control"
              placeholder="Type offer price here"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Sqft
            </label>
            <input
              type="text"
              name="sqft"
              value={productDetails.sqft}
              onChange={changeHandler}
              className="form-control"
              placeholder="Type price here"
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Flat
            </label>
            <select
              name="flat"
              value={productDetails.flat}
              onChange={changeHandler}
              className="form-select"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              <option value="">Select</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="4BHK">4BHK</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              value={productDetails.address}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter Address"
            />
          </div>
         

          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              City
            </label>
            <input
              type="text"
              name="city"
              value={productDetails.city}
              onChange={changeHandler}
              className="form-control"
              placeholder="Enter City Name"
            />
          </div>

         

         {/* <input type="text" name=""/> */}


          <div className="mb-3">
            <label className="form-label" style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>Product Images</label>
            <input type="file" name="image" onChange={imageHandler} className="form-control" accept="image/*" key={inputKey} />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={AddProduct}
            style={{
              width: "100%",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              border: "none",
            }}
          >
            Submit
          </button>
        </form>
    

            {/* Add more form groups for other fields as shown in the image */}

            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Col>
        <Col > 
     
    <div class="howo">
     
        <h2>How to find the right <span class="highlight">Tenant?</span></h2>
        <div class="card-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSHq7ZKgIn5IRiC2Z4X-71nB-jaEjmyaOlQ&s" alt="Phone Icon"/>
            <div>
                <p><strong>Respond to Tenant Enquiries</strong></p>
                <p>Connect with <span class="highlight">Tenants</span> when they contact on your property.</p>
                <p class="highlight">View upto 2 contact details for FREE!</p>
            </div>
        </div>
        <div class="card-item">
            <img src="data:image/png;base64,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" alt="Person Icon"/>
            <div>
                <p><strong>Connect with Matching Tenants</strong></p>
                <p>Actively check for matching <span class="highlight">Tenants</span> & connect.</p>
            </div>
        </div>
        <div class="card-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKP9MUOZT_fSRXV8MmrsBK6JUUkQikfNieQ&s" alt="App Icon"/>
            <div>
                <p><strong>Download the App</strong></p>
                <p>Get notified on all new <span class="highlight">Tenant</span> enquiries and connect instantly.</p>
            </div>
        </div>
       
    </div>
    
    
        
        </Col>
        <Col >
        <Image className="fixu" src="https://www.shutterstock.com/image-photo/businessman-pointing-towards-model-home-260nw-163059794.jpg"width={'250px'}  style={{marginLeft:'25rem'}} />
        </Col>
      
      </Row>
     
    </Container>
    {/* <Footer></Footer> */}
    </Container>
     </>
  
  );
};

export default AddProduct;

