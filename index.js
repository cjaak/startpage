const NAME = "Charlie";
const BOOKMARK_MAP = [
    {
        "section": "Studies",
        "items":[
            {"name": "Item 1", "url": "https://google.com/?q=1"},
            {"name": "Item 2", "url": "https://google.com/?q=2"},
            {"name": "Item 3", "url": "https://google.com/?q=3"}
        ]
    },
    {
        "section": "Work",
        "items":[
            {"name": "Item 1", "url": "https://google.com/?q=1"},
            {"name": "Item 2", "url": "https://google.com/?q=2"},
            {"name": "Item 3", "url": "https://google.com/?q=3"}
        ]
    },
    {
        "section": "Personal",
        "items":[
            {"name": "Item 1", "url": "https://google.com/?q=1"},
            {"name": "Item 2", "url": "https://google.com/?q=2"},
            {"name": "Item 3", "url": "https://google.com/?q=3"}
        ]
    }
]




function showWelcomeMessage(){
    let curHours = new Date().getHours();
    let greeting = `Good ${determineGreeting(curHours)} ${NAME}`
    document.getElementById("greeting").innerHTML = greeting
}


function showContent(){
    let container = document.getElementById("content");
    for(const curSection of BOOKMARK_MAP){
        let section = document.createElement("div");
        section.className = "section";
        container.appendChild(section);

        let title = document.createElement("h1");
        title.innerHTML = curSection.section;
        section.appendChild(title);

        for (const curItem of curSection.items){
            let paragraph = document.createElement("p");
            section.appendChild(paragraph);

            let link = document.createElement("a");
            link.innerHTML = curItem.name;
            link.setAttribute("href", curItem.url);

            paragraph.appendChild(link);
        }
    }

}

function determineGreeting(hour){
    if(hour >= 22 || hour < 6){
        return "Night";
    }else if(hour < 12)
        return "Morning";
    else if(hour < 17){
        return "Afternoon";
    }else{
        return "Evening";
    }
}

function main(){
    showWelcomeMessage();
    showContent();
}

main();