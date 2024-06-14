const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`events-token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`events-token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`events-token`);
  },
};

export default storage;
