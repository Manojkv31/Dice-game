function isReload(){
    if(!sessionStorage.getItem("refresh"))
        sessionStorage.setItem("refresh", "1");
    else(roll())
}

function roll(){
    
        var i1 = Math.ceil(Math.random()*6);
        var i2 = Math.ceil(Math.random()*6);

        if(i1 > i2){
            document.querySelector("h1").textContent = "🏁 Player 1 Wins!!";
        }
        else  if(i1 < i2){
            document.querySelector("h1").textContent = "Player 2 Wins!! 🏁";
        }
        else{
            document.querySelector("h1").textContent = "Roll Drawn 😁😁";
        }

        document.querySelector(".img1").setAttribute("src", "images/dice"+i1+".png");
        document.querySelector(".img2").setAttribute("src", "images/dice"+i2+".png");
}

window.addEventListener("load", isReload, false);
