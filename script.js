$(document).ready(function() {
  $('.submit').click(function(event) {
    console.log('Clicked Button');

    let message = document.getElementById('form_message');
    let email = document.getElementById('form_email');

    if (
      email.value.length >= 5 &&
      email.value.includes('@') &&
      email.value.includes('.')
    ) {
    } else {
      event.preventDefault();
      alert('Email is not valid');
    }

    if (message.value.length >= 10) {
    } else {
      event.preventDefault();
      alert('Message is not valid');
    }
  });
});
