import axios from '@/utils/axios';

type RegisterResponse = {
  accessToken: string;
};

export type RegisterCredentialsType = {
  identifier: string;
  password: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsType
): Promise<RegisterResponse> => {
  return axios.post('/auth/signup', data);
};
