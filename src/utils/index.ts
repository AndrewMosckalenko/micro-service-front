export function addTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
}

export function removeTokenFromLocalStorage() {
    localStorage.removeItem('token')
}