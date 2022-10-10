const logInFun = (data) => {
  return (dispatch) => {
    // console.log("data=>", data);
    //  main.js

    // POST request using fetch()
    fetch("https://backendcrm.squarepro.net/CRM/Dashboarduserlogin", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      // .then((json) => dispatch({ type: "SETDATA", payload: json.response[0].token}));
      .then((json) => dispatch({ type: "SETDATA", payload: json.response }));
  };
};
export { logInFun };
