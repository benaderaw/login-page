import { View } from "./view";

class LoginView extends View {
  removeHidden() {
    this._formSection.classList.remove("hidden");
  }

  loginHandler() {
    this._loginLink.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        this.removeHidden();
      }.bind(this)
    );
  }
}

export default new LoginView();
