const form = document.querySelector('.login-form');

const onFormSubmit = e => {
  e.preventDefault();
  const target = e.target;
  const email = target.elements.email.value.trim();
  const password = target.elements.password.value.trim();

  if (email && password) {
    const formData = { email, password };
    console.log(formData);
    target.reset();
  } else {
    alert('All form fields must be filled in');
  }
};

form.addEventListener('submit', onFormSubmit);
