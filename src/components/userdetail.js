


import React, { useState, useEffect } from 'react';
import { Box, Card, Typography, Button } from '@mui/material';

const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");
const userNumber = localStorage.getItem("userNumber");

function UserDetail() {
  const [activeView, setActiveView] = useState('profile');
  const [cartItems, setCartItems] = useState([]);

  
   
  


  useEffect(() => {
    if (activeView === 'wishlist') {
      //Retrieve wishlist items specific to the logged-in user
      const storedWishlistItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItems(storedWishlistItems);
      // fetchWishlistDetails();
    }
  }, [activeView]);
  // const removeItemFromWishlist = async (indexToRemove) => {
    //  const itemToRemove = cartItems[indexToRemove];
  //   const userEmail = localStorage.getItem("userEmail"); // Assuming email is stored in local storage
  //   try {
  //     const response = await fetch('http://localhost:3000/api/wishlist', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email: userEmail, itemId: itemToRemove._id }),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to update wishlist');
  //     }
  //     const updatedCartItems = cartItems.filter((_, index) => index !== indexToRemove);
  //     setCartItems(updatedCartItems);
  //   } catch (error) {
  //     console.error('Error removing item:', error.message);
  //   }
  // };
  
  const removeItemFromWishlist = (indexToRemove) => {
    const newWishlist = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(newWishlist);
   localStorage.removeItem("cartItems");

 

  };
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      p: 2,
      m: 10,
      bgcolor: 'lightblue',
      border: '1px solid lightblue'
    }}>
      <Card sx={{ width: 240, m: 1, bgcolor: 'white' }}>
        <Typography variant="h6" component="div" sx={{ p: 2 }}>
          Menu
        </Typography>
        <Button variant="outlined" sx={{ mb: 2, width: '100%' }} onClick={() => setActiveView('profile')}>
          Profile Details
        </Button>
        <Button variant="outlined" sx={{ width: '100%' }} onClick={() => setActiveView('wishlist')}>
          Wishlist Details
        </Button>
      </Card>

      {activeView === 'profile' ? (
        <Card sx={{ flex: 1, m: 1, bgcolor: 'white' }}>
          <Typography variant="h5" component="div" sx={{ p: 2 }}>
            Profile Details
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, m: 3, border: "1px solid grey" }}>
             <DetailItem label="Name" value={userName} />
             <DetailItem label="Registered As" value="Individual" />
             <DetailItem label="Email" value={userEmail} />
             <DetailItem label="Mobile Number" value={userNumber}/>
             <DetailItem label="Password" value="Not shown due to security reasons" />
          </Box>
        </Card>
      ) : (
        <Card sx={{ flex: 1, m: 1, bgcolor: 'white' }}>
          <Typography variant="h5" component="div" sx={{ p: 2 }}>
            Wishlist Details
          </Typography>
          <Box sx={{ m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            {cartItems.map((item, index) => (
              // <Box key={index} sx={{ width: '100%', mb: 2 }}>
              //   <Typography variant="h6">{item.title}</Typography>
              //   <Typography variant="body2">{item.price}</Typography>
              //   <Typography variant="body2">{item.location}</Typography>
              //   <img src={item.image} alt={item.title} style={{ width: '30%', height: 'auto' }} />
              //   <Button variant="outlined" color="error" onClick={() => removeItemFromWishlist(index)}>
              //                 Remove
              //               </Button>
              // </Box>
              <Box key={index} sx={{ width: '100%', mb: 2, bgcolor: 'white', p: 2, boxShadow: 3 }}>
              <Typography variant="h6">{item._id}</Typography>
              <Typography variant="body2">{item.title}</Typography>
              <Typography variant="body2">{item.price}</Typography>
              <Typography variant="body2">{item.location}</Typography>
              <Typography variant="body2">{item.size}</Typography>
              <Typography variant="body2">{item.readytomove}</Typography>

              <Button variant="outlined" color="error" onClick={() => removeItemFromWishlist(index)}>
                  Remove
              </Button>
          </Box> 
                             
                            
            ))}
          </Box>
        </Card>
      )}
    </Box>
  );

  function DetailItem({ label, value }) {
    return (
      <Box sx={{ display: 'flex', mb: 1 }}>
        <Typography variant="body1" sx={{ flex: 1, bgcolor: 'lightgrey', p: 1 }}>
          {label}:
        </Typography>
        <Typography variant="body1" sx={{ flex: 2, p: 1 }}>
          {value}
        </Typography>
      </Box>
    );
  }
}


export default UserDetail;
