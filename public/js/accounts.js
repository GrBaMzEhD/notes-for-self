import { login } from './axiosMethods.js';

const loginSubmit = document.getElementById('loginSubmit');

if (loginSubmit) {
  loginSubmit.addEventListener('click', () => {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    login(loginUsername, loginPassword);
  });
}
