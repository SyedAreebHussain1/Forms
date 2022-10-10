import React from "react";
import * as Yup from "yup";

export const signUpSchema = Yup.object({
  // name string may hota ha or min ka means k kamse kam 3 wods ho name may max ziada se ziada 25 words ho or requried means k (empty) na ho
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
