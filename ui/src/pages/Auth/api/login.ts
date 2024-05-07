import axios from '@/utils/axios';

type LoginResponse = {
  data: {
    accessToken: string;
  };
};

export type LoginCredentialsType = {
  identifier: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  data: LoginCredentialsType
): Promise<LoginResponse> => {
  return axios.post('/auth/signin', data);
};
