import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box, Card, Typography } from '@mui/material';
const userName=localStorage.getItem("userName")
const userEmail=localStorage.getItem("userEmail")
const userNumber=localStorage.getItem("userNumber")

function UserDetail() {
  return (
    
    <Box sx={{
      display: 'flex',         // Flexbox layout
      justifyContent: 'center',
      alignItems: 'flex-start',
      p: 2, 
      m:10,                   // Padding around the flex container
      bgcolor: 'lightblue',    // Background color of the container
      border: '1px solid lightblue' // Border color
    }}>
      {/* Sidebar-like card */}
      <Card sx={{ width: 240, m: 1, bgcolor: 'white' }}>
        <Typography variant="h6" component="div" sx={{ p: 2 }}>
        Profile Details
        </Typography>
      </Card>

      <Card sx={{ flex: 1, m: 1, bgcolor: 'white' }}>
        <Typography variant="h5" component="div" sx={{ p: 2 }}>
           Profile Details

        </Typography>
        {/* Additional content he"re */}
        {/* <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, m: 3, border: "1px solid grey" }}>
          <DetailItem label="Name" value={userName} />
          <DetailItem label="Registered As" value="Individual" />
          <DetailItem label="Email" value={userEmail} />
          <DetailItem label="Mobile Number" value={userNumber} />
          <DetailItem label="Password" value="Not shown due to security reasons" />
        </Box> */}
      </Card>
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