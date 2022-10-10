import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logInFun } from "../../store/action/index";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();
  const logIn = (e) => {
    e.preventDefault();
    if (email && password) {
      props.logInFun({ email: email, password: password });
      // setEmail("");
      // setPassword("");
    } else {
      setEmailError("Please Enter Valid Email");
      setPassError("Please Enter  Password");
    }
  };
  useEffect(() => {
    if (props.users) {
      navigate("/about", { state: { email: email, password: password } });
    }
  }, [props.users]);
  return (
    <>
      <form action="" onSubmit={logIn}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(text) => setEmail(text.target.value)}
            type="text"
            name="email"
            id="email"
            autoComplete="off"
          />
          <p style={{ color: "red" }}>{emailError}</p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(text) => setPassword(text.target.value)}
            type="text"
            name="password"
            id="password"
            autoComplete="off"
          />
          <p style={{ color: "red" }}>{passError}</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  logInFun: (data) => dispatch(logInFun(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
