import { InputField } from "./inputField.js";
import { Button } from "./button.js";
import { Ajax } from "../../../common/scripts/Ajax.js";
import { getFullUrl } from "./utils.js";

const API_URL_LOGIN = "https://bloggers-crm-fe-prod.herokuapp.com/api";

export class SignInForm {
  constructor(root) {
    this.root = root;
    this.isValid = true;
    this.render();
  }

  render() {
    this.form = document.createElement("form");
    this.form.classList.add("sign-in-form");
    this.email = new InputField(
      this.form,
      "email",
      "Enter email",
      "Email:",
      "sign-in-form__input"
    );
    this.password = new InputField(
      this.form,
      "password",
      "Enter password",
      "Password:",
      "sign-in-form__input"
    );

    this.btn = new Button(this.form, "Sign in", "sign-in-form__button");
    this.form.addEventListener("submit", eventObject => {
      eventObject.preventDefault();
      this.signIn();
    });
    this.root.append(this.form);
  }

  signIn() {
    this.clear();
    this.validate();
    if (this.isValid === false) {
      console.error("FORM IS INVALID!");
      return;
    }
    const request = new Ajax(API_URL_LOGIN + "/sign");
    const signInData = {
      email: this.email.value(),
      password: this.password.value()
    };
    console.log(signInData);
    const successHandler = responseData => {
      // const newUrl = getFullUrl("/index.html");
      // window.location.href = newUrl;
      console.log("PRIVERT SERCVER");
    };
    request.post(successHandler, signInData);
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
  }
  clear() {
    this.email.clearError();
    this.password.clearError();
  }
}
