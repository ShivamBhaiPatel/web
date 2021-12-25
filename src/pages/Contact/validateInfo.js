export default function validateInfo(values) {
  let errors = {};

  if (!values.fullname.trim()) {
    errors.fullname = 'Full name required';
  } else if (!/^[A-Za-z]+/.test(values.name)) {
    errors.name = 'Enter a valid name';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phone) {
    errors.phone = 'Password is required';
  } else if (!/^[0-9]+/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid Mobile no.';
  } else if (values.phone.length < 10) {
    errors.phone = 'Mobile no. needs to be 10 digit';
  } 

  if (!values.address) {
    errors.address = 'Full address required';
  } else if (!/^[A-Za-z]+/.test(values.address.trim())) {
    errors.address = 'Enter a valid address';
  }


  if (!values.message) {
    errors.message =' message required';
  } else if (values.message.length < 50) {
    errors.message = 'message needs to be more than 50 charecter';
  } else if (!/^[A-Za-z]+/.test(values.message.trim())) {
    errors.message = 'Enter valid message';
  }


  return errors;
}
