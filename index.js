const button = document.getElementById('main-button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = 'Gratulon!';
    output.className = "notification"
});