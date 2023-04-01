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
  }

  failedAlert() {
    alert("Please check your email or password.");
  }

  checkEmail() {
    return this._emailInput.value;
  }

  validateLogin(isValidFormat, isFreeEmail) {
    isValidFormat && isFreeEmail ? this.successAlert() : this.failedAlert();
  }

  // RESET
  resetInput() {
    this._emailInput.value = "";
    this._passwordInput.value = "";
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

// const checkServicer = email.split("@");

//     if (!email.includes("@") || !email.includes(".")) this.failedAlert();

//     if (email.includes("@") && email.includes(".")) {
//       const howManAt = email.split("").filter((el) => el === "@");

//       const howManyDot = email.split("").filter((el) => el === ".");

//       if (howManAt.length > 1 || howManyDot.length > 1) {
//         this.failedAlert();
//         return;
//       }

//       if (howManAt.length === 1) {
//         if (
//           (checkServicer[1] !== "gmail.com") &
//           (checkServicer[1] !== "yahoo.com")
//         ) {
//           return this.failedAlert();
//         } else {
//           return this.checkPassword();
//         }
//       }
//     }
