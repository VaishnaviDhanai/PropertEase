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
            <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
                        <div className="md:flex">
                            {/* Contact Information */}
                            <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-10 md:w-2/5">
                                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-1">Office Address</h3>
                                    <p className="text-blue-100">123 Main Street</p>
                                    <p className="text-blue-100">New Delhi</p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-1">Contact Information</h3>
                                    <p className="text-blue-100">📧 info@propertyease.com</p>
                                    <p className="text-blue-100">📞 +91 7206200000</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                                    <p className="text-blue-100">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p className="text-blue-100">Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-blue-100">Sunday: Closed</p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="p-10 md:w-3/5">
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>

                                {isSubmitted && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                        ✅ Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Vaishnavi Dhanai"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="vaishnavi@gmail.com"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="7206200000"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Property Inquiry"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="mb-8">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="6"
                                            placeholder="Your message here..."
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                                        >
                                            Send Message
                                        </button>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.32835516133!2d77.20898509999999!3d28.5273522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1753022044086!5m2!1sen!2sin"
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