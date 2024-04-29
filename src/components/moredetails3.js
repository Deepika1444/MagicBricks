 



import * as React from 'react';
import Card from '@mui/material/Card';
import { Typography, Box } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Badge,Button } from 'react-bootstrap';
import MultiActionAreaCard from './PplrOwnerPeoperties';

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
                 <Button  variant='danger' style={{borderColor:'red',borderRadius:'30px',margin:'4rem 0 2rem 2rem' }}>
            Contact Owner    
</Button>



        </Card>


<Card sx={{ maxWidth: 945, ml: 6, mt: 5, bgcolor: 'light', border: '1px solid lightgray' }}>
    <MultiActionAreaCard/>
    </Card>
    </>

    );
}















 

