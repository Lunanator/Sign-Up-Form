
const checkPassword = function() {
    if (document.getElementById('password').value ===
      document.getElementById('confirm-password').value) {
        document.getElementById('confirm-password').style.border = 'none';
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } else {
        document.getElementById('confirm-password').style.border = '2px solid red';
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}
