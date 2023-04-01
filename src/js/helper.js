export const AJAX = async function (url) {
  const res = await fetch(url);

  if (!res.ok) throw new Error("🛑 ERROR 🛑");

  const data = await res.json();

  return data;
};
