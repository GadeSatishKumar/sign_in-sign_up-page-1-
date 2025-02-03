const signInLink = document.getElementById('sign-in-link');
const signUpLink = document.getElementById('sign-up-link');
const container = document.querySelector('.container');
const signInContainer = document.querySelector('.sign-in-container');
const signUpContainer = document.querySelector('.sign-up-container');

signInLink.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    signInContainer.style.backgroundColor = '#b3d7ff'; // Light blue
    signUpContainer.style.backgroundColor = '#007bff'; // Dark blue
});

signUpLink.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    signInContainer.style.backgroundColor = '#007bff'; // Dark blue
    signUpContainer.style.backgroundColor = '#b3d7ff'; // Light blue
});