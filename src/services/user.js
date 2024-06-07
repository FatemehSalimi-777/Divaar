import api from "configs/api";

export const getProfile = () =>
  api.get("user/whoami").then((res) => res || false);
