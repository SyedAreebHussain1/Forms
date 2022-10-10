import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
const About = (props) => {
  console.log("props", props);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  useEffect(() => {
    if (!props.users) {
      navigate("/");
    }
  }, [props.users]);
  return (
    <div>
      <h1>About Page</h1>
      <h1>API data</h1>
      <p>token: {props.users[0].token}</p>
      <p>roleid: {props.users[0].roleid}</p>
      <p>user_role_name: {props.users[0].user_role_name}</p>

      <h1>Navigate Data</h1>
      <p>Email navi: {location.state.email}</p>
      <p>Password navi {location.state.password}</p>
      <br />
      {/* <p>Email Redux: {props.users.email}</p>
      <p>Password Redux: {props.users.password}</p> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(About);
