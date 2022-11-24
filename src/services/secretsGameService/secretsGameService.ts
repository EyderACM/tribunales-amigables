import axios from "axios";
import envConsts from "../shared/enviromentConsts";
import type { ISaveUserAnswers } from "./interfaces";

const { apiUrl } = envConsts;

export const secretsGameService = () => {
  const fetchQuestions = async () => {
    const res = await axios.post(`${apiUrl}/game/questions`, {
      game_name: "Secretos buenos y secretos malos",
    });
    const { data } = res;
    return data;
  };

  const saveUserAnswers = ({ userAnswers, userToken }: ISaveUserAnswers) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };
    const parsedAnswers = {
      answers: userAnswers,
      game_name: "Secretos buenos y secretos malos",
    };
    axios({
      method: "post",
      url: `${apiUrl}/game/answers`,
      data: parsedAnswers,
      headers,
    });
  };

  return {
    fetchQuestions,
    saveUserAnswers,
  };
};
