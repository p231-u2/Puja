let personName = prompt("Enter name:");
if(personName){
    document.getElementById("name").innerText = personName;
}

/* Typewriter */
const text = "I never wanted to hurt you. If my actions caused pain, I deeply regret it. Every moment now feels heavy because of what happened.";
let i=0;

function typing(){
    if(i<text.length){
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();

/* Yes Reply */
function yesReply(){
    document.getElementById("replyMessage").innerHTML = "Thank you for giving my heart hope 💙";
    document.getElementById("giftSection").style.opacity = "1";
}

/* Running No Button */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function(){
    const x = Math.random() * 300;
    const y = Math.random() * 200;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* Gift Open */
function openGift(){
    document.getElementById("giftMessage").style.opacity = "1";
}

/* Tears */
for(let i=0;i<50;i++){
    let tear=document.createElement("div");
    tear.classList.add("tear");
    tear.style.left=Math.random()*100+"vw";
    tear.style.animationDuration=(Math.random()*3+2)+"s";
    document.body.appendChild(tear);
}

/* Music */
function toggleMusic(){
    const music=document.getElementById("bgMusic");
    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}
