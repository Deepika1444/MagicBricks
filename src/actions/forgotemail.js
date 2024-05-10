import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function ForgotPasswordModal({ show, handleClose, handleSendOtp }) {
  const [email, setEmail] = useState('');

  const submitEmail = () => {
    handleSendOtp(email);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reset Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
          </Form.Group>
          <Button variant="primary" onClick={submitEmail}>
            Send OTP
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default ForgotPasswordModal;