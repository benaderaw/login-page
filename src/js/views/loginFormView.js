import {
  LOWERCASE_CODE_END,
  LOWERCASE_CODE_START,
  NUMBER_CODE_END,
  NUMBER_CODE_START,
  UPPERCASE_CODE_END,
  UPPERCASE_CODE_START,
} from "../config";
import { View } from "./view";

class LoginFormView extends View {
  _password;

  successAlert() {
    alert("You are logged in!");
    this.resetInput();
  }

  resetInput() {
    this._emailInput.value = "";
    this._passwordInput.value = "";
  }

  failedAlert() {
    alert("Please check your email or password.");
  }

  validateLogin() {
    this._emailInput.value.trim() === "" ||
    this._passwordInput.value.trim() === ""
      ? this.failedAlert()
      : this.checkEmail();
  }

  checkEmail() {
    const email = this._emailInput.value.trim().toLowerCase();
    const checkServicer = email.split("@");

    if (!email.includes("@")) this.failedAlert();

    if (email.includes("@")) {
      const howManAt = email.split("").filter((el) => el === "@");

      const howManyDot = email.split("").filter((el) => el === ".");

      if (howManAt.length > 1 || howManyDot.length > 1) this.failedAlert();

      if (howManAt.length === 1) {
        console.log(666);
        if (
          (checkServicer[1] !== "gmail.com") &
          (checkServicer[1] !== "yahoo.com")
        )
          return this.failedAlert();

        if (
          checkServicer[1] === "gmail.com" ||
          checkServicer[1] === "yahoo.com"
        )
          return this.checkPassword();
      }
    }
  }

  checkPassword() {
    this._password = this._passwordInput.value.split("");

    // check if password has a space
    if (this._password.includes(" ")) this.failedAlert();

    // check if password has an uppercase
    this.checkPasswordLength() &
    this.checkPasswordUppercase() &
    this.checkPasswordLowercase() &
    this.checkPasswordNumber()
      ? this.successAlert()
      : this.failedAlert();
  }

  // CHECK HELPER FUNCTION
  checkHelper(code01, code02) {
    let passwordStr = this._password.join("");

    return this._password.some((el, i) => {
      const isTrue =
        passwordStr.charCodeAt(i) >= code01 &&
        passwordStr.charCodeAt(i) <= code02;

      return isTrue;
    });
  }

  // CHECK LENGTH
  checkPasswordLength() {
    return this._password.length >= 7;
  }

  // CHECK UPPERCASE
  checkPasswordUppercase() {
    return this.checkHelper(UPPERCASE_CODE_START, UPPERCASE_CODE_END);
  }

  // CHECK LOWERCASE
  checkPasswordLowercase() {
    return this.checkHelper(LOWERCASE_CODE_START, LOWERCASE_CODE_END);
  }

  // CHECK NUMBER
  checkPasswordNumber() {
    return this.checkHelper(NUMBER_CODE_START, NUMBER_CODE_END);
  }

  // EVENT HANDLER
  loginFormHandler(handler) {
    this._formBox.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        const exitBtn = e.target.closest(".exit-btn");
        const loginBtn = e.target.closest(".login-btn");

        if (exitBtn) this._formSection.classList.add("hidden");

        if (loginBtn) {
          handler();
        }
      }.bind(this)
    );
  }
}

export default new LoginFormView();
