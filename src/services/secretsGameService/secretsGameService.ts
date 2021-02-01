import axios from "axios";
import envConsts from "../shared/enviromentConsts";
import type { ISaveUserAnswers } from "./interfaces";

const { apiUrl } = envConsts;

export const secretsGameService = () => {
  const fetchQuestions = async () => {
    const res = await axios.get(`${apiUrl}/questions/secrets`);
    const { data } = res;
    return data;
  }

  const saveUserAnswers = ({userAnswers, userToken}: ISaveUserAnswers) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    }

    axios({
      method: "post",
      url: `${apiUrl}/answers/secrets`,
      data: {
        answers: userAnswers,
      },
      headers,
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return {
    fetchQuestions,
    saveUserAnswers,
  }
}