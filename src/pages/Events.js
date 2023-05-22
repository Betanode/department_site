import React, { useState } from 'react';
import './events.css'
const Event = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [formSuccess, setFormSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);

    // Simulate successful submission
    setTimeout(() => {
      setFormStatus('Send');
      setFormSuccess(true);
      name.value = '';
      email.value = '';
      message.value = '';
    }, 1500);
  };

  return (
    <div className="container mt-5" style={{ padding: '50px'}}>
      <div className="ceve">
        <div className="map">
      <iframe className='amap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1589.023534654505!2d73.11601691806675!3d26.478776812725307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941eb3d67760b67%3A0xba41dc0982107219!2sDepartment%20of%20Civil%20and%20Infrastructure%20Engineering%2C%20IIT%20Jodhpur!5e0!3m2!1sen!2sin!4v1684794309027!5m2!1sen!2sin" style={{ allowfullscreen:""}}  ></iframe>
      </div>
      <div className="formc card">
      <h2 className="mb-3">Contact Us</h2>
      {formSuccess && (
        <div className="alert alert-success" role="alert">
          Message sent successfully!
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Event;
