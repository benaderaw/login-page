import { API_KEY } from "./config";

export const state = {
  email: {},
};

export const loadEmail = async function (emailInput) {
  try {
    //
    const res = await fetch(
      `https://emailverification.whoisxmlapi.com/api/v2?apiKey=${API_KEY}&emailAddress=${emailInput}`
    );

    if (!res.ok) throw new Error("🛑🛑🛑 ERROR 🛑🛑🛑");

    const data = await res.json();

    state.email = {
      isFreeEmail: data.formatCheck === "true" ? true : false,
      isValidFormat: data.freeCheck === "true" ? true : false,
    };

    console.log(state);
  } catch (err) {
    throw err;
  }
};
