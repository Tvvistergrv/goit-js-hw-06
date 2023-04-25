/*
Написати скрипт управління формою логіна.
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводити alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я 
поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів
 форми використати властивість elements.
Вивести об'єкт із введеними даними в консоль і очистити значення полів форми методом reset.
*/

// помилка в консолі при сабміті і не чиститься форма.
// Чекаю на виправлення.

document.body.style.backgroundColor = '#232931';
document.body.style.color = '#eeeeee';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(el) {
  el.preventDefault();
  const { email, password } = el.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    el.currentTarget.reset();
  }
}
