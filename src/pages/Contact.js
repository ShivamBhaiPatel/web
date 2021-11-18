import React , {useState} from "react";

const Contact = () => {

  const [data, setData]  = useState({
    fullname:'',
    phone:'',
    email:'',
    address:'',
    message:'',
  })

  const InputEvent =(event) =>{
    const {name, value}=event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });

  };

  const formSubmit=(e) => {
    e.preventDefault();
    alert(
      `Name: ${data.fullname}, Mobile number is: ${data.phone}, Email Id is: ${data.email} and Address is: ${data.address}`);
  }



  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
                  placeholder="123/5, Block-10, KalolBagh, Delhi"
                />
              </div>
              <div className="mb-3">
              <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  rows="3"
                  placeholder="Type your message here"
                >Message :</textarea>
              </div>

              <div className="col-12 text-center">
                <button class="btn btn-outilne-primary btn-primary" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
