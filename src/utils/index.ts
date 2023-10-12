export function addTokenToLocalStorage(token: string) {
  localStorage.setItem("token", token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem("token");
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem("token");
}

export function getShortString(str: string, length: number) {
  if (str.length <= length) return str;

  return `${str.slice(0, length)}...`;
}
