 


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



import React, { useState } from "react";
import { Container,Navbar } from "react-bootstrap";


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
          alert("Product Added");
          // Clear form after successful submission
          setProductDetails({
            name: "",
            image: "",
            number:"",
            email:"",
            flat: "",
            price: "",
            sqft: "",
            address:"",
          });
          setImage(null);
          setInputKey(Date.now());  
        } else {
          alert("Failed to add product");
        }
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the product");
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
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020, marginTop: '0px' }}>
        <Container fluid className='navColor' style={{ height: '50px' }}>
           <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
             <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
           </Navbar.Brand>
         </Container>
     </Navbar>
    <Container
    
      style={{
        display: "flex",
      
        height: "139vh",
        marginBottom:'150px',
        marginTop:'50px'
      }}
    >
      <div
        className="add-product shadow p-4"
        style={{
          width: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Fill THE  </h1>
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333333",
          }}
        >
          Owner Details
        </h2>
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
              placeholder="Type sqft here"
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
          {/* <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555555",
              }}
            >
              Product Images
            </label>
            <input
              type="file"
              name="image"
              onChange={imageHandler}
              className="form-control"
              accept="image/*"
            />
          </div> */}
           <div className="mb-3">
              <label className="form-label" style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>Product Images</label>
              <input type="file" name="image" onChange={imageHandler} className="form-control" accept="image/*" key={inputKey} />
            </div>
          <button
            type="button"
            className="btn btn-Danger"
            onClick={AddProduct}
            style={{
              width: "50%",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "4px",
              backgroundColor: "red",
              border: "none",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
    </>
  );
};

export default AddProduct;

// import React, { useState } from "react";
// import { Container, Navbar } from "react-bootstrap";

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

//   const handleAddProduct = async () => {
//     let formData = new FormData();
//     formData.append("product", image);

//     try {
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
//           alert("Product Added");
//           // Clear form after successful submission
//           setProductDetails({
//             name: "",
//             email: "",
//             number: "",
//             flat: "",
//             price: "",
//             sqft: "",
//             address: "",
//           });
//           setImage(null);
//           setInputKey(Date.now());  // Reset the file input
//         } else {
//           alert("Failed to add product");
//         }
//       } else {
//         alert("Failed to upload image");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while adding the product");
//     }
//   };

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020, marginTop: '0px' }}>
//         <Container fluid className='navColor' style={{ height: '50px' }}>
//           <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
//             <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//       <Container style={{ marginTop: '50px', display: "flex", justifyContent: "center", height: "100vh" }}>
//         <div className="add-product shadow p-4" style={{ width: "400px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
//           <h1 className="text-center mb-4" style={{ fontSize: "24px", fontWeight: "bold", color: "#333333" }}>Owner Details</h1>
//           <form>
//             {/* Form fields here */}
//             <div className="mb-3">
//               <label className="form-label" style={{ fontSize: "14px", fontWeight: "bold", color: "#555555" }}>Product Images</label>
//               <input type="file" name="image" onChange={imageHandler} className="form-control" accept="image/*" key={inputKey} />
//             </div>
//             <button type="button" onClick={handleAddProduct} className="btn btn-danger" style={{ width: "100%", fontSize: "16px", fontWeight: "bold", borderRadius: "4px" }}>Submit</button>
//           </form>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default AddProduct;

