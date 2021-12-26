import React, { useRef, useState } from "react";
import border from "../../images/v.png";
import emailjs from "emailjs-com";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  // const [result, showResult] = useState(false);

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_7k4zauq",
  //     "template_p6euk9i",
  //     form.current,
  //     "user_aZbMsP601zPxSDaJTbbrk"
  //   )
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  //     showResult(true);
  // };
  // setTimeout(()=>{
  //   showResult(false)
  // },3000);

  return (
    <div className="m-2 contact-img">
      <div className="my-5 text-center">
        <h1>Contact Us</h1>
      </div>

      <div className="row text-center ">
        <div className="col-md-5 mb-5 ms-auto">
          <div className="glass form-container">
            <div className="icon-text m-4">
            {/* <img src={"https://www.chartcommando.com/assets/img/newfolder/contact_us.svg"} className="contact-img" alt="common image" /> */}
              <span style={{ fontSize: '20px', color: 'blue'}}>Address</span>
              <hr/>
              <p >
                H.No.119, Neemtal,
                Jalalpur,Ambedkar Nagar, 
                Uttar Pradesh,
                224149
              </p>
              </div><br/>
              <div className="icon-text m-4">
              <span style={{ fontSize: '20px', color: 'blue' }}>Contact No.</span>
              <hr/>
              <p> 7376485262</p>
              </div>
              <br/>
              <div className="icon-text m-4">
              <span style={{ fontSize: '20px', color: 'blue' }}>Email Address</span>
              <hr/>
              <p> sparkjlp@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 m-auto mb-5 ">
          <div className="glass form-container ">
            {!isSubmitted ? (
              <FormSignup submitForm={submitForm} />
            ) : (
              <FormSuccess />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
