document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const user = document.getElementById('username').value;
      alert('Đăng nhập thành công: ' + user);
      window.location.href = 'dashboard.html';
    });
  }
});