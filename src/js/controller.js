import loginFormView from "./views/loginFormView";
import loginView from "./views/loginView";

const ValidationController = function () {
  loginFormView.validateLogin();
};

const init = function () {
  loginView.loginHandler();
  loginFormView.loginFormHandler(ValidationController);
};

init();
