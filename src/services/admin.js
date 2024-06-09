import api from "configs/api";

export const addCategory = (data) => api.post("category", data);
export const getCategory = () => api.get("category");
export const deleteCategory = (id) => api.delete(`category/${id}`, id);
