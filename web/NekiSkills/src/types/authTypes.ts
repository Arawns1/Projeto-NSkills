export type LoginResponse = {
  data: {
    token: string;
  };
};

export type LoginRequest = {
  login: string;
  password: string;
  role: string;
};
