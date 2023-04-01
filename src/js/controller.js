import { API_KEY } from "./config";
import * as model from "./model";
import loginFormView from "./views/loginFormView";
import loginView from "./views/loginView";

const ValidationController = async function () {
  try {
    const email = loginFormView.emailInput(); // get email input value
    await model.loadEmail(email); // load email validation data

    const emailStatus = model.state.email;

    // validate if email is from a free email provider like google or yahoo and
    // check if the format is correct
    loginFormView.validateLogin(
      emailStatus.isValidFormat,
      emailStatus.isFreeEmail
    );
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  loginView.loginHandler();
  loginFormView.loginFormHandler(ValidationController);
};

init();
