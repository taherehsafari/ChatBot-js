//Step 1: define chatBot function
function chatBot(){

    //Step 2: get input from the user and get the value using "getElementById"
    let user = (document.getElementById("input").value);

    //Step 3: write the possible values of the user
    if (user == "سلام"){

        //Step 4: show the robot's response
        document.getElementById("respond").innerText = "Bot: " + ("علیک سلام");
    }

    else if (user == "خوبی" ){
        document.getElementById("respond").innerText = "Bot: " + ("خوبم مرسی");
    }

    else if (user == "چخبر"){
        document.getElementById("respond").innerText = "Bot: " + ("سلامتی");
    }   

    else if (user == "اسمت چیه"){
        document.getElementById("respond").innerText = "Bot: " + ("اسمم جواده");
    }   

    else if (user == "کجا زندگی میکنی"+name){
        document.getElementById("respond").innerText = "Bot: " + ("کانادا");
    }  

    else if (user == "چند سالته"+name){
        document.getElementById("respond").innerText = "Bot: " + ("20");
    }  

    else if (user == "خداحافظ"+name){
        document.getElementById("respond").innerText = "Bot: " + ("بعدا میبینمت");
    }   

    else{
        document.getElementById("respond").innerText = "Bot: " + ("اطلاعی ندارم");
    }   

}

//Step 5: call the chatBot function
chatBot()