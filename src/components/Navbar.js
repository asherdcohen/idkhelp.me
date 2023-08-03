import React from 'react';
import './Navbar.css';
import icon from '../images/IDKHelp.me.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Navbar = () => {
    // Define the validation schema
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
    });

    // Define the submit function
    const handleSubmit = (values, { resetForm }) => {
        // Send an email using Email.js
        const templateParams = {
            // Customize the email content using the form values
            from_name: 'Sender Name',
            message: `Email: ${values.email}`, // Customize the message here
        };

        emailjs
            .send('service_zog6lze', 'template_waitlist1234', templateParams, 'qZY47jXXoq1tOGPOm')
            .then(
                (response) => {
                    console.log('Email sent successfully!', response);
                    // Show a success notification using react-toastify
                    toast.success('Thank you for joining the waitlist!', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    // Reset the form after successful submission
                    resetForm();
                },
                (error) => {
                    console.error('Error sending email:', error);
                    // Handle any errors that occur during email sending
                }
            );
    };

    return (
        <nav>
            <div className="logo">
                <img src={icon} alt="Logo" />
                {/* Add any other elements or styles for your logo */}
            </div>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} // Pass the handleSubmit function directly to onSubmit prop
            >
                <Form>
                    <div className="signup-form">
                        <Field type="email" name="email" placeholder="Enter your email" />
                        <ErrorMessage name="email" component="div" />
                        <button type="submit">Join Waitlist</button>
                    </div>
                </Form>
            </Formik>
            <ToastContainer />
        </nav>
    );
};

export default Navbar;
