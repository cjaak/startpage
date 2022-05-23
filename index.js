const NAME = "Charlie";
const BOOKMARK_MAP = [
    {
        "section": "General",
        "items":[
            {"name": "Mail", "url": "https://mail.google.com"},
            {"name": "Drive", "url": "https://drive.google.com"},
            {"name": "Calendar", "url": "https://calendar.google.com"},
        ]
    },
    {
        "section": "Tech",
        "items":[
            {"name": "Github", "url": "https://github.com/cjaak/"},
            {"name": "Arch Wiki", "url": "https://wiki.archlinux.org/"},
            {"name": "Stackoverflow", "url": "https://stackoverflow.com/"}
        ]
    },
    {
        "section": "Entertainment",
        "items":[
            {"name": "Youtube", "url": "https://www.youtube.com/"},
            {"name": "Netflix", "url": "https://www.netflix.com"},
            {"name": "Twitch", "url": "https://www.twitch.tv/"}
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