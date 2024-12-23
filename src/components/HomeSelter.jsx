

import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../../src/App.css';

Modal.setAppElement('#root');

const HomeSelter = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on initial render
    setModalIsOpen(true);
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalIsOpen]);




  const closeModal = () => {
    setModalIsOpen(false);
  };



  return (
    <>
      {/* Header */}
      <header className='w-full'>
        <div className="nav-container">
          <div className="nav-logo">Home Shelter</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero" id="home">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Affordable, secure, and easy payment options for all living spaces.</p>
          <a href="#contact" className="cta-button">Get Started Now</a>
        </div>
        <img src='/Housing-pop-up.jpg' className='popup-image' alt="Housing Popup" />
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Welcome Pop-up"
        className="modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
      >
        <button onClick={closeModal} className="close-button">&times;</button>
        <img src="/Housing-pop-up.jpg" alt="Welcome Popup" className="modal-image" />
      </Modal>

      {/* Main Content */}
      <div className="container">
        <section id="features">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature-item">
              <i className="fas fa-wallet"></i>
              <h3>Affordable Solutions</h3>
              <p>We provide housing solutions and mortgage plans tailored to your budget.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-th-large"></i>
              <h3>Wide Range of Options</h3>
              <p>Choose from apartments, houses, and other living spaces that suit your needs.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-credit-card"></i>
              <h3>Easy Payment Plans</h3>
              <p>Flexible payment options designed to make home ownership stress-free.</p>
            </div>
          </div>
        </section>
        <section className="testimonials">
           <h2>What Our Clients Say</h2>
           <div className="testimonial-item">
             <p>&quot;Home Shelter made finding our dream home so easy and affordable. Highly recommend their services!&quot;</p>
             <h4>- Jane Doe</h4>
           </div>
           <div className="testimonial-item">
             <p>&quot;The payment plans offered were flexible and suited our budget perfectly. Thank you, Home Shelter!&quot;</p>
             <h4>- John Smith</h4>
           </div>
         </section>
         {/* Contact Section */}
         <section id="contact">
           <h2>Get in Touch</h2>
           <p>Contact us today to explore your options and take the first step towards your dream home.</p>
           <form action="#" method="post">
             <label htmlFor="name">Name:</label>
             <input type="text" id="name" name="name" required placeholder="Your Name" />
             <label htmlFor="email">Email:</label>
             <input type="email" id="email" name="email" required placeholder="Your Email" />
             <label htmlFor="message">Message:</label>
             <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
             <button type="submit" className="cta-button">Submit</button>
           </form>
         </section>
      </div>

      <footer>
        <p>© 2024 Home Shelter &amp; Mortgage Solutions. All Rights Reserved. | <a href="#">Privacy Policy</a></p>
      </footer>
    </>
  );
};

export default HomeSelter;
