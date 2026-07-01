const form= document.getElementById('login-form');
const message= document.getElementById('message');

form.addEventListener('submit',async function(event){
    event.preventDefault(); 

    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;

    try{
        const response= await fetch('user.json');
        const user= await response.json();
        const vaildUser= user.find(user => user.username == username && user.password == password);

        if (vaildUser) {
            message.textContent= 'Login successful!';
            message.style.color= 'green';
            window.location.href= 'dashboard.html';
        }else{
            message.textContent= 'Invalid username or password.';
            message.style.color= 'red';
        }

    }
    catch(error){
        message.style.color= 'red';
        message.textContent= 'An error occurred. Please try again later.';
        console.log(error);
    }
})
