import React from "react";
import "./App.css";
import AppRoute from "./config/AppRouter";
// import {connect} from "react-redux"
function App() {
  return (
    <div className="App">
      <AppRoute />
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   // users: state.users
// });
// const mapDispatchToProps = (dispatch) => ({
//   // setdata: () => dispatch(set_data()),
//   // facebook_login: () => dispatch(facebook_login())
// })
export default App;
//  connect(mapStateToProps,mapDispatchToProps) (App)
