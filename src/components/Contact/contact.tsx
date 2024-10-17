import React, { useState, FormEvent } from 'react';
import './contact.css'
import 'boxicons'

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("SENDING...");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "850d78c1-b478-440e-a453-e9646bb912b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("FORM SUBMITTED!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("ERROR!", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <h2><i className='bx bxs-phone-call bx-tada'></i></h2>
      <h3>CONTACT US</h3>
      <h1>Get in touch</h1>
      <div className="contact-nheader">
        <div className="contact-col">
          <h3>SEND US A MESSAGE<i className='bx bxs-envelope'></i></h3>
          <p>Feel free to reach out through the contact form or find our contact information below.
            Your feedback, questions, and suggestions are important to us as we strive to provide
            exceptional service to our community. The world and the animals will be grateful for it.
          </p>
          <br />
          <ul>
            <li><i className='bx bxl-gmail'></i> marowyck@gmail.com</li>
            <li><i className='bx bxs-phone'></i> +55 19 999999999</li>
            <li><i className='bx bxl-instagram'></i> @marowyck</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">NAME:</label>
            <input type="text" name='name' placeholder='Fullname: ' required />
            <label htmlFor="phone">PHONE:</label>
            <input type="tel" name='phone' placeholder='Phone number: ' required />
            <label htmlFor="message">YOUR MESSAGE:</label>
            <textarea name="message" id="message" cols={30} rows={10} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn-submit'>SUBMIT</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact;
