
const getColor = ()=>{

    randomColor = Math.floor(Math.random()* 16777215);
    randomCode ="#"+randomColor.toString(16);
  let body = document.body.style.backgroundColor = randomCode
  console.log(randomCode)
 document.querySelector(".code").innerText = randomCode
 navigator.clipboard.writeText(randomCode)

 


}

const getRandom =()=>{
    randomColor = Math.floor(Math.random()* 16777215);
    randomCode ="#"+randomColor.toString(16);
    // let container = document.getElementsByClassName("container")
    // container.style.backgroundColor = randomCode
    console.log(randomCode)
    document.getElementById("container").style.backgroundColor= randomCode;

}
   const twocolor = ()=>{
    randomColore = Math.floor(Math.random()* 16777215);
    randomCodee ="#"+randomColor.toString(16);
   }

const getButton = ()=>{
    randomColor = Math.floor(Math.random()* 16777215);
    randomCode ="#"+randomColor.toString(16);
 
    let btn = document.querySelector(".button").style.backgroundColor = randomCode
    
    console.log(btn)
   

}

 document.querySelector(".button").addEventListener("click",getColor)
 document.querySelector("#container").addEventListener("click",getRandom)
 document.querySelector("#container").addEventListener("click",getButton)




getColor();
getRandom();
getButton();