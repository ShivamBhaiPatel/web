import React, { useState } from "react";
import border from "../../images/v.png";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${data.fullname}, Mobile number is: ${data.phone}, Email Id is: ${data.email} and Address is: ${data.address}`
    );
  };

  return (
    <div className="m-4 text-center">
      <div className="my-5 text-center">
        <h1>Contact Us</h1>
      </div>

      <div className="container  row text-center">
        <div className="glass  col-md-5 mb-4 ms-auto">
          <div className="icon-text my-2">
            <span>
              H.No.119,Neemtal,Jalalpur,Ambedkar Nagar, Uttar Pradesh,Ambedkar
              Nagar ,224149
            </span>
          </div>
          <div className="icon-text my-2">
            <span> 7376485262</span>
          </div>
          <div className="icon-text">
            <span> sparkjlp@gmail.com</span>
          </div>
        </div>
        <div className="col-md-5  m-auto glass">
          <form onSubmit={formSubmit}>
            <div className="m-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="ematextil"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="John Wick"
              />
            </div>
            <div className="m-3">
              <label for="exampleFormControlInput1" class="form-label">
                Mobile No.
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="9876543210"
              />
            </div>
            <div className="m-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com"
              />
            </div>
            <div className="m-3">
              <label for="exampleFormControlInput1" class="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="address"
                value={data.address}
                onChange={InputEvent}
                placeholder="123/5, Block-10, KarolBagh, Delhi"
              />
            </div>
            <div className="m-3">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                value={data.message}
                onChange={InputEvent}
                rows="3"
                placeholder="Type your message here"
              >
                Message :
              </textarea>
            </div>

            <div className="col-12 my-3 text-center">
              <button
                class="btn btn-outilne-primary btn-primary me-2"
                type="submit"
              >
                Send
              </button>
              <button
                class="btn btn-outilne-danger btn-danger ms-2"
                type="reset"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
