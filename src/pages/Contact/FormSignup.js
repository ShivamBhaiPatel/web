import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, sendEmail, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      {/* <form onSubmit={sendEmail}> */}
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="m-3">
          <label for="FormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="ematextil"
            className="form-control"
            id="fullname"
            name="fullname"
            placeholder="Your Full Name"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p>{errors.fullname}</p>}
        </div>
        <div className="m-3">
          <label for="FormControlInput1" class="form-label">
            Mobile No.
          </label>
          <input
            type="tel"
            minLength="10"
            maxLength="10"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="9876543210"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className="m-3">
          <label for="FormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="m-3">
          <label for="FormControlInput1" class="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Enter Your Address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className="m-3">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message here"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>

        <div className="col-12 my-3 text-center">
          <button
            class="btn btn-outilne-primary btn-primary me-2"
            type="submit"
          >
            Send
          </button>
          <button class="btn btn-outilne-danger btn-danger ms-2" type="reset">
            Clear
          </button>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
      </form> */}
    </>
  );
};

export default FormSignup;
