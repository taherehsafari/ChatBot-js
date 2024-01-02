// Step-1 : specify a function to get input from the user
function getMessage(){

    // Step-2 : take input from the user and call the processMassage function
    processMessage(user = (document.getElementById("userInput").value))

}

// Step-3 : create a function to process the input received from the user
function processMessage(){

    // Step-4 : use If and Else If to specify that the condition should be executed if the user's input contains a series of words
    if (user.includes("سلام")){

        // Step-5 : determine the bot's answer and call the showRespond function
        showRespond( botRespond =  ("علیک سلام"))
    }

    else if (user.includes("خوبی")){

        showRespond( botRespond =  ("خوبم ممنون"))
    }

    else if (user.includes("چه خبر")){

        showRespond( botRespond =  ("سلامتی"))
    }

    else if (user.includes("اسمت چیه")){

        showRespond( botRespond =  ("اسمم جواده"))
    }

    else if (user.includes("چند سالته")){

        showRespond( botRespond =  ("چند روزی میشه که به وجود اومدم"))
    }

    else if (user.includes("کجا زندگی میکنی")){

        showRespond( botRespond =  ("توی اینترنت"))
    }

    else if (user.includes("خداحافظ")){

        showRespond( botRespond =  ("به امید دیدار"))
    }
}

// Step-5 : create a function to show the bot's respond
function showRespond(){

    // Step-6 : show the bot's answer on the screen to the user
    document.getElementById("respond").innerText = "Bot: " + (botRespond);

}



