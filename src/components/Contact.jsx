import React, { useState } from 'react';
import Button from './Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-800 text-white py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact Us</h1>
                    <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
                        Have questions about our properties or services? We're here to help.
                        Contact our team and we'll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
                        <div className="md:flex">
                            {/* Contact Information */}
                            <div className="bg-gray-600 text-white p-8 md:w-2/5">
                                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                                <div className="mb-8">
                                    <h3 className="font-semibold mb-2 text-lg">Office Address</h3>
                                    <p className="text-blue-100">123 Main Street</p>
                                    <p className="text-blue-100">New Delhi</p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="font-semibold mb-2 text-lg">Contact Information</h3>
                                    <p className="text-blue-100">Email: info@propertyease.com</p>
                                    <p className="text-blue-100">Phone: +91 7206200000</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2 text-lg">Working Hours</h3>
                                    <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-blue-100">Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-blue-100">Sunday: Closed</p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="p-8 md:w-3/5">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>

                                {isSubmitted && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 md:flex md:space-x-4">
                                        <div className="md:w-1/2 mb-4 md:mb-0">
                                            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                                placeholder="Vaishnavi Dhanai"
                                            />
                                        </div>

                                        <div className="md:w-1/2">
                                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                                placeholder="vaishnavi@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                            placeholder="7206200000"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                            placeholder="Property Inquiry"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                            placeholder="Your message here..."
                                        ></textarea>
                                    </div>

                                    <div>
                                        <Button variant="primary" className="w-full py-3">
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-12 px-6">
                <div className="container mx-auto">
                    <div className="bg-gray-200 h-64 rounded-lg shadow overflow-hidden">
                        {/* In a real application, you would use Google Maps or another map API here */}
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.935086361554!2d-74.00594128459346!3d40.71277597933052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3161fdfdf3%3A0xc80b8f06e177fe62!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1614642339561!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-0 w-full h-full"
                        ></iframe>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;