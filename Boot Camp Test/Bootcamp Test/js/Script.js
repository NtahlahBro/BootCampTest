
document.addEventListener('DOMContentLoaded', () => {

    const storedName = localStorage.getItem('userName');
    const userNameElement = document.getElementById('user-name');
    
    if (storedName) {
        userNameElement.textContent = storedName;
    } else {
        const userName = prompt('Please enter your name:');
        if (userName) {
            localStorage.setItem('userName', userName);
            userNameElement.textContent = userName;
        }
    }
    
    const messageForm = document.getElementById('message-us');
    const formOutput = document.querySelector('.form-output');
    
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
    
        const name = document.getElementById('name').value;
        const birthDate = document.getElementById('birth-date').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;
        

        if (!name || !birthDate || !gender || !message) {
            alert('Please fill all fields');
            return;
        }
 
        const now = new Date();
        const currentTime = now.toLocaleString();
        
        document.getElementById('current-time').textContent = currentTime;
        document.getElementById('output-name').textContent = name;
        document.getElementById('output-birth-date').textContent = birthDate;
        document.getElementById('output-gender').textContent = gender;
        document.getElementById('output-message').textContent = message;

        formOutput.style.display = 'block';
        
        formOutput.scrollIntoView({ behavior: 'smooth' });
        
        messageForm.reset();
    });
    
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

$(document).ready(function(){
  $('#birth-date').datepicker({
    format: 'yyyy-mm-dd',   // ISO format
    autoclose: true,
    endDate: '0d',          // Disable future dates
    orientation: "bottom auto"
  });
});

});