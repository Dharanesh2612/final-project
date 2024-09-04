import React from 'react';
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <section className="App">
    <form>
     <h2>Contact form</h2>
     <div className="input-box">
       <label>Full Name</label>
       <input type='text' className='field' placeholder='enter your name ' required></input>
     </div>
     <div className="input-box">
       <label>Email Address </label>
       <input type='email' className='field' placeholder='enter your email ' required></input>
     </div>
     <div className="input-box">
       <label>your Message</label>
       <textarea name="" id='' className='field message' placeholder='enter your mesage ' required></textarea>
     </div>
     <button type='submit'>Send Message</button>
    </form>
   </section>
  );
};

export default ContactUs;
