import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToAddress, goToHome } from "../routes/coordinator";

export const login = (body, clear, history, setIsLoading, setUserProfile) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/fourFoodA/login`, body)

    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      setUserProfile(res.data.user);
      res.data.user.hasAddress === false
        ? goToAddress(history)
        : goToHome(history);
    })
    .catch((err) => {
      setIsLoading(false);

      alert(err.response.data.message);
    });
};

export const signUp = (body, clear, history, setIsLoading, setUserProfile) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/fourFoodA/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setUserProfile(res.data.user);
      clear();

      if (res.status === 200) goToAddress(history);
    })
    .catch((err) => {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Erro no cadastro");
      }
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export const updateProfile = (
  body,
  clear,
  history,
  setIsLoading,
  setUserProfile
) => {
  setIsLoading(true);
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };
  axios
    .put(`${BASE_URL}/fourFoodA/profile`, body, headers)
    .then((res) => {
      setUserProfile(res.data.user);
      clear();
      history.goBack();
    })
    .catch((err) => {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Erro ao atualizar perfil!");
      }
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export const saveAddress = (
  body,
  clear,
  history,
  setIsLoading,
  getUserProfile
) => {
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };

  setIsLoading(true);
  axios
    .put(`${BASE_URL}/fourFoodA/address`, body, headers)
    .then((res) => {
      localStorage.removeItem("token");
      localStorage.setItem("token", res.data.token);
      clear();

      if (res.status === 200) {
        alert("Endereço Cadastrado com sucesso");
        getUserProfile();
        goToHome(history);
      }
    })
    .catch((err) => {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("ERRO ENDEREÇO");
      }
    })
    .finally(() => {
      setIsLoading(false);
    });
};
