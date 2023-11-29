const mainTitle = document.getElementById('title');
const cardBtn = document.querySelectorAll('.btn-primary');
const loginBtn = document.getElementById('login');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close-modal');
const listView = document.getElementById('listView');

function createArray(doc) {
  const docArr = Array.from(doc);
  return docArr;
}

function textChange(doc, newText) {
  const docArr = createArray(doc);
  docArr.forEach((e) => {
    e.addEventListener('click', () => {
      e.textContent = newText;
    });
  });
}

mainTitle.addEventListener('click', () => {
  window.location.href = '/';
});

if (window.location.pathname === '/my-notes') {
  listView.style.display = 'inline';
  listView.addEventListener('click', () => {});
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
      });
    }
  });
}
