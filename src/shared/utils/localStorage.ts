export const LOCAL_STORAGE = {
  constants:{
    JWT: 'jwt',
  },
  set: (key: string, value: string) => {
    localStorage.setItem(key , value);
  },
  get: (key: string) => {
    return localStorage.getItem(key);
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  }
}