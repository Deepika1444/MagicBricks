// import { Modal, Button, Form } from 'react-bootstrap';
// import { useState } from 'react';

// function ForgotPasswordModal({ show, handleClose, handleSendOtp }) {
//   const [email, setEmail] = useState('');

//   const submitEmail = () => {
//     handleSendOtp(email);
//     handleClose();
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Reset Password</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group>
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
//           </Form.Group>
//           <Button variant="primary" onClick={submitEmail}>
//             Send OTP
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// }
// export default ForgotPasswordModal;
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/forgot-password", { email })
          .then(response => {
              setMessage(response.data.message);
              // Redirect to reset password page or handle accordingly
          })
          .catch(error => setMessage("Error sending OTP. Please try again."));
    };

    return (
        <Card style={{ width: '30rem', margin: '10% auto' }}>
            <Card.Body>
                <Card.Title>Forgot Password</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send OTP
                    </Button>
                </Form>
                {message && <div className="alert alert-info mt-2">{message}</div>}
            </Card.Body>
        </Card>
    );
}

export default ForgotPassword;

 