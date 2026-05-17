function clickLogin() {

   
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    let output = document.getElementById("output");

   
    let correctUsername = "Visorde";
    let correctPassword = "873467";

    
    if(username == correctUsername && password == correctPassword){

        output.innerHTML = "Login Successful!";
        output.style.color = "green";

        // Redirect to the dashboard after successful login
        window.location.href = "dashboard.html";

        return false;

    }

    else{

        output.innerHTML = "Wrong username or password.";
        output.style.color = "red";

    }

}