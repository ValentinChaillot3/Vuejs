import axios from "axios";

export const getSkills = () => {
  return axios.get("http://localhost:3000/getSkills");
};

export const recettes = () => {
  return axios.get("https://tpnotejs.herokuapp.com/recettes");
};

export const recette = (id) => {
  return axios.get("https://tpnotejs.herokuapp.com/recettes/" + id);
};
/*
export const AddRecette = () => {
  return axios.post("https://tpnotejs.herokuapp.com/recettes");
};

export const SuppRecette = (id) => {
  return axios.delete("https://tpnotejs.herokuapp.com/recettes" + id);
};

export const UpdateModRecette = (id) => {
  return axios.put("https://tpnotejs.herokuapp.com/recettes" + id);
};
*/
export const Inscription = () => {
  return axios.post("https://tpnotejs.herokuapp.com/utilisateurs");
};

export const Login = () => {
  return axios.post("https://tpnotejs.herokuapp.com/login");
};
