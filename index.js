const NAME = "Charlie";


function showWelcomeMessage(){
    let greeting = `Hello ${NAME}`
    document.getElementById("greeting").innerHTML = greeting
}


function showContent(){
    let container = document.getElementById("content");
    container.innerHTML = "Content Content Content"

}

function main(){
    showWelcomeMessage();
    showContent();
}

main();