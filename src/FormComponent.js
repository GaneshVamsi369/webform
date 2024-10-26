import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const FormComponent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            {submitted && (
                <Alert variant="success">
                    Your message has been successfully submitted!
                </Alert>
            )}
            <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        rows={3}
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default FormComponent;
