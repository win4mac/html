import { InputField } from "./inputField.js";
import { Button } from "./button.js";
import { Ajax } from "../../../common/scripts/Ajax.js";
import { getFullUrl } from "./utils.js";

const API_URL = "https://bloggers-crm-fe-prod.herokuapp.com/api";

export class SignUpForm {
  constructor(root) {
    this.root = root;
    this.isValid = true;
    this.render();
  }

  render() {
    this.form = document.createElement("form");
    this.form.classList.add("sign-up-form");
    this.email = new InputField(
      this.form,
      "email",
      "Enter email",
      "Email:",
      "sign-up-form__input"
    );
    this.password = new InputField(
      this.form,
      "password",
      "Enter password",
      "Password:",
      "sign-up-form__input"
    );
    this.confirmPassword = new InputField(
      this.form,
      "password",
      "Enter confirm password",
      "Confirm password:",
      "sign-up-form__input"
    );
    this.btn = new Button(this.form, "Sign up", "sign-up-form__button");
    this.form.addEventListener("submit", eventObject => {
      eventObject.preventDefault();
      this.signUp();
    });
    this.root.append(this.form);
  }

  signUp() {
    this.clear();
    this.validate();
    if (this.isValid === false) {
      console.error("FORM IS INVALID!");
      return;
    }
    const request = new Ajax(API_URL + "/signup");
    const signUpData = {
      email: this.email.value(),
      password: this.password.value(),
      confirmPassword: this.confirmPassword.value()
    };
    console.log(signUpData);
    const successHandler = responseData => {
      const newUrl = getFullUrl("/sign_in.html");
      window.location.href = newUrl;
    };
    request.post(successHandler, signUpData);
    console.log("Send data to server");
  }

  validate() {
    if (!this.email.value()) {
      this.email.setError("Пустое поле");
      this.isValid = false;
    }
    if (!this.password.value()) {
      this.password.setError("Пустое поле");
      this.isValid = false;
    }
    if (!this.confirmPassword.value()) {
      this.confirmPassword.setError("Пустое поле");
      this.isValid = false;
    }
  }

  clear() {
    this.email.clearError();
    this.password.clearError();
    this.confirmPassword.clearError();
  }
}
