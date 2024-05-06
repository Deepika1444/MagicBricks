 



import * as React from 'react';
import Card from '@mui/material/Card';
import { Typography, Box } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Badge,Button } from 'react-bootstrap';
import MultiActionAreaCard from './PplrOwnerPeoperties';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function MoreDetails3() {
    // Function to render each detail with a label and content horizontally aligned
    const DetailItem = ({ label, content, icon = null }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 3, mt: 2 }}>
            <Typography variant="body1" component="span" color="gray" sx={{ marginRight: 15 }}>
                {label}
            </Typography>
            <Typography variant="p" component="div" fontWeight="bold">
                {icon}
                {content}
            </Typography>

            


        </Box>
    );


    return (
        <>
        <Card sx={{ maxWidth: 945, ml: 6, mt: 5, bgcolor: 'light', border: '1px solid lightgray' }}>
            <Typography variant="h3" component="h3" sx={{ mt: 3, ml: 3, fontWeight: 'bold' }}>More Details</Typography>
            {DetailItem({
                label: "Price Breakup",
                content: "57.0 Lac | 3,19,999",
                icon: <CurrencyRupeeIcon sx={{ fontSize: 25, mr: 1 }}/>
            })}
            {DetailItem({
                label: "Address",
                content: "Yelahanka, Yelahanka, Bangalore - North, Karnataka"
            })}
            {DetailItem({
                label: "Landmarks",
                content: "Nr. CRPF Campus, next to prestige woodside bungalows."
            })}
            {DetailItem({
                label: "Furnishing",
                content: "Furnished"
            })}
            <Typography variant="p" component="div" fontWeight="bold"
               style={{border:'1px solid yellow',
               width:'35rem',
               height:'3rem',
               marginLeft:'12rem ',
               marginTop:'1rem',
               color:'maroon',
               backgroundColor:'antiquewhite'}}>
            <Badge bg="warning" text="dark" className=" white-bg px-3" style={{fontSize:'20px',height:'46px'}}> offer</Badge>
                 Visit Home Interirs expo & unlock Savings Upto 40%
            </Typography>
            {DetailItem({
                label: "Flooring",
                content: "Vitrified"
            })}
             {DetailItem({
                label: "Type of Ownership",
                content: "Co-operative Society"
            })}
             {DetailItem({
                label: "Overlooking",
                content: "Garden/Park"
            })}
             {DetailItem({
                label: "Water Availability",
                content: "24 Hours Available"
            })}
 
                 {/* <Button  class=" modal-dialog-centered" variant='danger' style={{borderColor:'red',borderRadius:'30px',margin:'4rem 0 2rem 2rem' }}>
            Contact Owner    
</Button> */}
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" style={{borderColor:'red',borderRadius:'30px',margin:'4rem 0 2rem 2rem' }}>  Contact Owner </button>

<div class="modal fade " id="exampleModal"
 tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
 
 >
  <div class="modal-dialog modal-dialog-centered " 
  style={{maxWidth:'400px'}} >
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 mt-2" id="exampleModalLabel"> 
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          <Typography variant="p" component="div" fontWeight="bold"
          className='px-3'
               style={{border:'1px solid yellow',
               borderRadius:'10px',
               height:'4rem',
               color:'maroon',
               backgroundColor:'antiquewhite'}}>
                  Enter your <WhatsAppIcon style={{color:'green'}}/> WhatsApp No. to get Contact Details of the Owner
            </Typography></h1>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"> Your Name</label>
            <input type="text" class="form-control"   id="recipient-name" 
            style={{border:'none',borderBottom:'1px solid #ccc',borderRadius:'0px'}}
            />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label"> email</label>
            <input type="email" class="form-control" id="recipient-email"
            style={{border:'none',borderBottom:'1px solid #ccc',borderRadius:'0px'}}
            />
          </div>
          <div class="mb-3">
            <label for="recipient-number" class="col-form-label">  Your whattsApp Number</label>
            <input type="tel" class="form-control" id="recipient-number"
            style={{border:'none',borderBottom:'1px solid #ccc',borderRadius:'0px'}}
            />
          </div>
        </form>
      </div>
    
 <p style={{color:'gray',fontSize:'14px',marginLeft:'20px'}}>I Agree to MagicBricks' <span><a href='https://property.magicbricks.com/terms/terms.html'style={{color:"gray"}}>Terms of Use</a></span></p>
<button type="button" class="btn btn-danger d-flex justify-content-center m-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" style={{borderColor:'red',borderRadius:'30px'  }}>  Continue </button>

    </div>
  </div>
</div>
 



        </Card>


<Card sx={{ maxWidth: 945, ml: 6, mt: 5, bgcolor: 'light', border: '1px solid lightgray' }}>
    <MultiActionAreaCard/>
    </Card>
    </>

    );
}















 

