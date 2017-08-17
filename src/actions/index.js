import { get, put } from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export const API_URL = 'http://localhost:9000/api';

export function fetchUsers() {
  const url = API_URL + '/users';
  const request = get(url);

  return {
    type: FETCH_USERS,
    payload: request
  }
}
