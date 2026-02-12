import { useEffect, useState } from "react";
import { Row, Col, Alert } from "react-bootstrap";

export const Newsletter = ({subscribe, status, message}) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === "success") 
           clearFields();
        }, [status]);

    const handleSubmit = (e) => {
    e.preventDefault();

    if (email && email.includes("@")) {
      subscribe({
        EMAIL: email,
      });
    }
  };

    const clearFields = () => {
        setEmail('');
    }



    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && <Alert variant="danger">{message}</Alert>}
                        {status === "success" && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required></input>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
                </div>
        </Col>
    )
}
        
            