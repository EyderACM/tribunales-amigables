import type { IUserSecretsGameAnswer } from "models/userSecretsGameAnswer";

export interface ISaveUserAnswers {
  userAnswers: IUserSecretsGameAnswer[];
  userToken: string;
}