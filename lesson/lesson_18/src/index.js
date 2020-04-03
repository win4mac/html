import { SignUpForm } from "./js/signUpForm.js";
import { OtherForm } from "./js/otherForm.js";
import "./jsx/index.jsx";
import "./sass/index.scss";

const formContainer = document.querySelector(".sign-up-container");
const formContainer2 = document.querySelector(".test");
new SignUpForm(formContainer);
new OtherForm(formContainer2);
