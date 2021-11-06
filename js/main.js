let skills =  document.getElementById("skills");
let stats =  document.getElementById("stats");
let progressBar = document.querySelectorAll(".progress-bar");
let statsTitle = document.querySelectorAll(".statsTitle");
let countDownDate = new Date("jan 17, 2022 12:00:00").getTime();
let started = false;



document.addEventListener("scroll",function(){
    if(window.scrollY >= skills.offsetTop){
        progressBar.forEach((progress) =>{
            progress.style.width = progress.dataset.width;
        })
    }
    
    if(window.scrollY >= stats.offsetTop){
        if(!started){
            statsTitle.forEach((stat)=> startCount(stat));
        }
        started = true;
        
    }
});




function startCount(el){
    let goal = el.dataset.goal;
    let count = (setInterval(() => {
        el.textContent ++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 2000/goal));
}

let countDown = setInterval(() => {
    
    let now = new Date().getTime();
    let distance = countDownDate - now ;
    let day = Math.floor (distance /(24*60*60*1000 ));
    let hours = Math.floor (distance %(24*60*60*1000 ) / (60*60*1000));
    let minutes = Math.floor (distance %(60*60*1000 ) / (60*1000));
    let seconds = Math.floor (distance %(60*1000 ) / (1000));

    
    $("#day").html(day);
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);

    if(distance < 0){
        clearInterval(countDown);
    }

}, 1000);