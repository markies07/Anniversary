// INDEX.HTML
document.getElementById("button").addEventListener("click", function(event){
    var date = document.getElementById("date").value.toLowerCase();
    
    if (date == "") {
        document.getElementById("msg").innerHTML = "Please enter a value!";
        setTimeout(function() {
        document.getElementById("msg").innerHTML = "";
        }, 2000);
    } else if(date == "october 13, 2022") {
        document.getElementById("msg").style = "color: green; font-weight: bold;";
        document.getElementById("msg").innerHTML = "Correct!";
        setTimeout(function() {
            document.getElementById("msg").innerHTML = "";
            window.location.assign("main.html");
        }, 1500);
    } else {
        document.getElementById("msg").innerHTML = "Wrong Input!";
        setTimeout(function() {
            document.getElementById("msg").innerHTML = "";
        }, 2000); 
    }
    
    event.preventDefault();
});



