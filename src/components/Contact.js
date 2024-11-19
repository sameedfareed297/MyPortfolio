import React from "react";


function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Message" required></textarea>
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
