import Cookies from "js-cookie";

export const setTokenCookie = ({ token }) => {
  Cookies.set("token", token, { expires: 365 });
};

export const getTokenCookie = () => {
  return Cookies.get("token");
};

export const deleteTokenCookie = () => {
  Cookies.remove("token");
};

export const getPostNumberCookie = () => {};

export const setPostNumberCookie = () => {};
