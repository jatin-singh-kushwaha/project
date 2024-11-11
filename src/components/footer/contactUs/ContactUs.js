import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to send the message to your backend or API
        // For demonstration, we'll just show a success message
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            {success && <p className="success-message">Thank you for your message! We will get back to you soon.</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-textarea"
                        required
                    />
                </div>
                <button type="submit" className="form-button">Send Message</button>
            </form>
            <h2 className="contact-info-heading">Contact Information</h2>
            <p className="contact-info-text">If you have any questions or feedback, feel free to reach out to us at:</p>
            <p className="contact-info-text">Email: [Your Contact Email]</p>
            <p className="contact-info-text">Phone: [Your Phone Number]</p>
            <p className="contact-info-text">Address: [Your Company Address]</p>
        </div>
    );
};

export default ContactUs;
