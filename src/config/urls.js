export const API_BASE_URL='https://backend.hellosuperstars.com/api/';
export const getApiUrl=(endpoint)=>API_BASE_URL+endpoint;

export const LOGIN=getApiUrl('login');
export const SIGNUP=getApiUrl('register');
