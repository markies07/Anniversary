// INDEX.HTML
document.getElementById("button").addEventListener("click", function(event){
    var date = document.getElementById("date").value.toLowerCase();
    
    if (date == "") {
        document.getElementById("msg").innerHTML = "Text field is blank";
        setTimeout(function() {
        document.getElementById("msg").innerHTML = "";
        }, 2000);
    } else if(date == "october 13, 2022") {
        document.getElementById("msg").innerHTML = "Success!";
        setTimeout(function() {
            document.getElementById("msg").innerHTML = "";
            window.location.assign("main.html");
        }, 1500);
    } else {
        document.getElementById("msg").innerHTML = "Incorrect!";
        setTimeout(function() {
            document.getElementById("msg").innerHTML = "";
        }, 2000); 
    }
    
    event.preventDefault();
});



