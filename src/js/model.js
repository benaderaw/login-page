import { API_KEY, API_URL } from "./config";
import { AJAX } from "./helper";

export const state = {
  email: {},
};

export const loadEmail = async function (emailInput) {
  try {
    const data = await AJAX(
      `${API_URL}apiKey=${API_KEY}&emailAddress=${emailInput}`
    );

    console.log(data.freeCheck);

    state.email = {
      isFreeEmail: data.formatCheck === "true" ? true : false,
      isValidFormat: data.freeCheck === "true" ? true : false,
    };

    console.log(state);
  } catch (err) {
    throw err;
  }
};
