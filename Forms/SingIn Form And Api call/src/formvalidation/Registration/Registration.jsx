import React from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
// formik ka kam form ko handle karna ha
import { useFormik } from "formik";
import { signUpSchema } from "../Schemas/Schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Registration() {
 
  // destructuring kar raha ho
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("values=>", values);
        action.resetForm();
      },
    });
  //   console.log("error=>", errors);
  // console.log("Formik=>", Formik);

  const navigate = useNavigate();
  const Register = (e) => {
    e.preventDefault();
    if (
      values.name !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.confirm_password !== ""
    ) {
      navigate("/about",{state:{name:values.name,email:values.email}});
    }
  };
  return (
    <div className="Registration">
      <div>Registration</div>
      <h1>Form Validation</h1>
      <form action="" onSubmit={Register}>
        <div className="input-block">
          <label htmlFor="name">Name: </label>
          <input
            type="name"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password: </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            autoComplete="off"
            placeholder="Confirm Ppassword"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="modal-buttons">
          {/* <a href="#" className="">
            Want to register using Gmail?
          </a> */}
          {/* <Link to="/about"> */}
          <button className="input-button" type="submit">
            Registration
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}
export default Registration;
