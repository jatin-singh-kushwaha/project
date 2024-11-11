import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    service_id: process.env.REACT_APP_SERVICE_ID,
                    template_id: process.env.REACT_APP_TEMPLATE_ID,
                    user_id: process.env.REACT_APP_PUBLIC_KEY,
                    template_params: {
                        from_name: name,
                        from_email: email,
                        message: message,
                        to_email: 'shyammaurya1808@gmail.com' // Replace with admin email
                    }
                })
            });

            if (response.ok) {
                setSuccess(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (err) {
            setError('Failed to send message. Please try again later.');
            console.error('Email sending failed:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            {success && <p className="success-message">Thank you for your message! We will get back to you soon.</p>}
            {error && <p className="error-message">{error}</p>}
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
                <button 
                    type="submit" 
                    className="form-button" 
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            <h2 className="contact-info-heading">Contact Information</h2>
            <p className="contact-info-text">If you have any questions or feedback, feel free to reach out to us at:</p>
            <button onClick={(e) => e.preventDefault()} className="contact-info-text link-style">Email: [Your Contact Email]</button>
            <button onClick={(e) => e.preventDefault()} className="contact-info-text link-style">Phone: [Your Phone Number]</button>
            <button onClick={(e) => e.preventDefault()} className="contact-info-text link-style">Address: [Your Company Address]</button>
        </div>
    );
};

export default ContactUs;
