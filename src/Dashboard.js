import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Dashboard() {
    useEffect(() => {
        const handleSubmit = (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const foodItemName = event.target['food item name'].value;
            const address = event.target.address.value;
            const phoneNo = event.target['phone no'].value;

            // Store data in local storage
            localStorage.setItem('name', name);
            localStorage.setItem('foodItemName', foodItemName);
            localStorage.setItem('address', address);
            localStorage.setItem('phoneNo', phoneNo);

            // Show thank you message and alert
            alert('Thank you for visiting our site! Thank you for your feedback.');

            // Reset form fields
            event.target.reset();

            // Navigate to Home section
            window.location.href = '#Home';
        };

        // Add event listener to the form
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', handleSubmit);
        } else {
            console.error('Form element not found');
        }
    }, []);

    const handleOrderNowClick = () => {
        window.location.href = '#contact';
    };

    return (
        <>
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Tooba Online Food Website</title>
                <link rel="stylesheet" href="style.css" />
                <link rel="stylesheet" media="screen and (max-width: 768px)" href="phone.css" />
                <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Bree+Serif&display=swap" rel="stylesheet" />

                <nav id="navbar">
                    <div id="logo">
                        <img src="Images/logo.jpeg" alt="Logo" />
                    </div>
                    <div className="fitness">
                        <a href="#Home" className="fitness-link">TS</a>
                        <a href="#Home" className="tooba">Restaurant</a>
                    </div>
                    <ul>
                        <li className="item"><a href="#Home">Home</a></li>
                        <li className="item"><a href="#services-container">Services</a></li>
                        <li className="item"><a href="#clients">Our Clients</a></li>
                        <li className="item"><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
                <section id="Home">
                    <h4 className="h-primary">Welcome to Tooba's Food Website</h4>
                    <p>We're committed to providing you with the highest quality food and service.
                        Join our family of satisfied customers who love our easy ordering and special offers.
                        <br />Get ready to tantalize your taste buds with our mouthwatering specialties.</p>
                    <button className="btn" onClick={handleOrderNowClick}>Order Now</button>
                </section>
                <section id="services-container">
                    <h1 className="h-primary center">Our Services</h1>
                    <div id="services">
                        <div className="box">
                            <img src="Images/food cat.jpg" alt="Food Catering" />
                            <h2 className="h-secondary center">Food Catering</h2>
                            <p>Indulge in the ultimate dining experience with our exquisite food catering services. Whether it's a
                                corporate event, wedding, or private party, our team of culinary experts will craft a customized menu
                                that delights your guests' palates. From elegant hors d'oeuvres to decadent desserts, we ensure every
                                bite is a memorable one. Let us take care of the details so you can savor the moment. </p>
                        </div>
                        <div className="box">
                            <img src="Images/bulk cat.jpg" alt="Bulk Ordering" />
                            <h2 className="h-secondary center">Bulk Ordering</h2>
                            <p>Say goodbye to the hassle of bulk ordering! Our efficient and streamlined process makes it easy to
                                order large quantities of your favorite meals. Whether it's for a family gathering, office lunch, or
                                special occasion, our bulk ordering service ensures everyone gets their favorite dish, hot and fresh.
                                Enjoy convenience, quality, and unbeatable taste with every order. </p>
                        </div>
                        <div className="box">
                            <img src="Images/food order.jpg" alt="Online Food Delivery" />
                            <h2 className="h-secondary center">Online Food Delivery</h2>
                            <p>Experience the best of culinary diversity with our extensive online food delivery services. From local
                                delights to international cuisines, we bring the world to your plate. Our user-friendly platform
                                allows you to browse menus, customize your order, and track delivery in real-time. </p>
                        </div>
                    </div>
                </section>
                <section className="client-section" id="clients">
                    <h1 className="h-primary center">Our Clients</h1>
                    <div className="clients">
                        <div className="client-item">
                            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                                <img src="Images/apple logo.jpg" alt="Apple" />
                            </a>
                        </div>
                        <div className="client-item">
                            <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
                                <img src="Images/microsoft logo.jpg" alt="Microsoft" />
                            </a>
                        </div>
                        <div className="client-item">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="Images/facebook logo.jpg" alt="Facebook" />
                            </a>
                        </div>
                        <div className="client-item">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="Images/insta logo.jpg" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <h1 className="h-primary center">Contact Us</h1>
                    <div id="contact-box">
                        <form id="contact-form">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="food-item-name">Food Item Name:</label>
                            <input type="text" id="food-item-name" name="food item name" required />
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" required />
                            <label htmlFor="phone-no">Phone No:</label>
                            <input type="text" id="phone-no" name="phone no" required />
                            <button type="submit" className="btn" id="btn">Submit</button>
                        </form>
                    </div>
                </section>
                <footer>
                    <p>© 2024 Tooba's Food Website. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}

export default Dashboard;
