const p1=document.querySelector("#one");
const p2=document.querySelector("#two");
const p1display= document.querySelector("#p1score");
const p2display= document.querySelector("#p2score");
const rechange= document.querySelector("#Reset");
const drop= document.querySelector("#drop");
let p1score = 0;
let p2score = 0;
let winningscore = 3;
let gameover = false;
 p1.addEventListener("click", function() {
    if(!gameover){
        p1score += 1;
    }
    if(p1score === winningscore){
       gameover = true;
       p1display.style.color="green";
       p2display.style.color="red";
     
    }
    p1display.textContent = p1score;
      })
      p2.addEventListener("click", function() {
        if(!gameover){
            p2score += 1;
        }
        if(p2score === winningscore){
           gameover = true;
           p1display.style.color="red";
           p2display.style.color="green";
         
        }
        p2display.textContent = p2score;
          })
        drop.addEventListener('change',function(){
            winningscore=parseInt(this.value);
            reset();
        })
    rechange.addEventListener("click",reset)
     

    function reset () {
        p1display.textContent = 0;
        p2display.textContent = 0;
        gameover ==false;
        p1score = 0;
        p2score = 0;
    }