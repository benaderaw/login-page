import { View } from "./view";

class LoginFormView extends View {
  _password;

  successAlert() {
    alert("You are logged in!");
  }

  failedAlert() {
    alert("Please check your email or password.");
  }

  // CHECK EMAIL INPUT
  emailInput() {
    const email = this._emailInput.value;

    if (email.trim() === "") this.failedAlert();

    return this._emailInput.value;
  }

  // CHECK IF EMAIL IS FROM FREE PROVIDER SUCH AS GOOGLE OR YAHOO
  // CHECK IF FORMAT IS CORRECT
  validateLogin(isValidFormat, isFreeEmail) {
    isValidFormat && isFreeEmail ? this.checkPassword() : this.failedAlert();
  }

  //////// --- PASSWORD VALIDATION --- ////////

  checkPassword() {
    const password = this._passwordInput.value;

    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!password.match(passw) || password.trim() === "") this.failedAlert();
    if (password.match(passw)) this.successAlert();
  }

  // RESET
  resetInput() {
    this._emailInput.value = "";
    this._passwordInput.value = "";
  }

  closeForm() {
    this._containerBox.classList.remove("active");
    this.resetInput();
  }

  // EVENT HANDLER
  loginFormHandler(handler) {
    this._formBox.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        const exitBtn = e.target.closest(".exit-btn");
        const loginBtn = e.target.closest(".login-btn");

        if (exitBtn) this.closeForm();

        if (loginBtn) {
          handler();
        }
      }.bind(this)
    );
  }
}

export default new LoginFormView();
