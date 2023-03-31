import { View } from "./view";

class LoginView extends View {
  loginHandler() {
    this._loginLink.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        console.log("Hello World!");

        this._formSection.classList.remove("hidden");
      }.bind(this)
    );
  }
}

export default new LoginView();
