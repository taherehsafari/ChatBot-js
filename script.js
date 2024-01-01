//Step 1: define chatBot function
function chatBot(){

    //Step 2: get input from the user and get the value using "getElementById"
    let user = (document.getElementById("input").value);

    //Step 3: write the possible values of the user
    if (user == "سلام" ){

        //Step 4: show the robot's response
        document.getElementById("respond").innerText = "Bot: " + ("علیک سلام");
    }

    else if (user == "خوبی" || user == "حالت چطوره"){
        document.getElementById("respond").innerText = "Bot: " + ("خوبم ممنون");
    }

    else if (user == "خوبم"){
        document.getElementById("respond").innerText = "Bot: " + ("خداروشکر");
    }

    else if (user == "خوب نیسم"){
        document.getElementById("respond").innerText = "Bot: " + ("اخییی");
    }

    else if (user == "چخبر"){
        document.getElementById("respond").innerText = "Bot: " + ("سلامتی");
    }   

    else if (user == "اسمت چیه"){
        document.getElementById("respond").innerText = "Bot: " + ("اسمم جواده");
    }   

    else if (user == "کجا زندگی میکنی"){
        document.getElementById("respond").innerText = "Bot: " + ("در کانادا زندگی میکنم");
    }  

    else if (user == "چند سالته"){
        document.getElementById("respond").innerText = "Bot: " + ("20 سالمه");
    }  

    else if (user == "خداحافظ"){
        document.getElementById("respond").innerText = "Bot: " + ("بعدا میبینمت");
    }   

    else{
        document.getElementById("respond").innerText = "Bot: " + ("اطلاعی ندارم");
    }   

}

//Step 5: call the chatBot function
chatBot()