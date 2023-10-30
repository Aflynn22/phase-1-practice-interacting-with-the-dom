let count = 0 
let numberLikes = {}
let plus = document.querySelector("#plus")
let counter = document.querySelector("#counter")
let minus = document.querySelector("#minus")
let pause = document.querySelector("#pause")
let like = document.querySelector("#heart")
let updatedLikes = document.querySelector(".likes")
let form = document.querySelector("#comment-form")
plus.addEventListener("click",adder)
minus.addEventListener("click",subtractor)
pause.addEventListener("click",buttonDisabler)
like.addEventListener("click", onLike)
document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(()=>{
        adder()
    },1000)
})
form.addEventListener("submit",(e)=>{
    newComment(e.target["comment-input"].value)
    e.preventDefault()
    form.reset()
})



function adder(){
    if(plus.disabled===false)
    count++
    updatesCounter()
}

function updatesCounter(){
    counter.innerText = count
}

function subtractor(){
    count--
    updatesCounter()
}

function onLike(){
    if(numberLikes[count] >0 ){
        numberLikes[count]++
    }
    else{
        numberLikes[count] = 1
    }
    updatesLikes()
}

function updatesLikes(){
    updatedLikes.innerHTML=""
    for(key in numberLikes){
        let li = document.createElement("li")
        li.textContent = `${key} has been liked ${numberLikes[key]}`
        updatedLikes.appendChild(li)
    }
}

function newComment(comment){
    let p = document.createElement('p')
    p.textContent = `${comment}`
    document.querySelector('#list').appendChild(p)
}

function buttonDisabler(){
    if(pause.innerHTML === "resume"){
        like.disabled = false
        minus.disabled = false
        plus.disabled = false
        pause.innerHTML = "pause" 
    }
    else{
        like.disabled = true
        minus.disabled = true
        plus.disabled = true
        pause.innerHTML = "resume" 
    }
}


