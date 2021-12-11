document.getElementById("mybutton").onclick = function(){
    
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    document.getElementById("print1").innerHTML = "Hello "+firstName+" "+lastName;
}