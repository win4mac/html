import { SignUpForm } from "./signUpForm.js";
import { OtherForm } from "./otherForm.js";
const formContainer = document.querySelector(".sign-up-container");
const formContainer2 = document.querySelector(".test");
new SignUpForm(formContainer);
new OtherForm(formContainer2);
