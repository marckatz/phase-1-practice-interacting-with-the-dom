let timer = 0
let paused = false
setInterval(() => {
    if(!paused){
        iterate()
    }
}, 1000)

function iterate(){
    timer++
    document.getElementById("counter").textContent = timer
}

document.getElementById("minus").addEventListener("click",(e) => {
    timer--
    document.getElementById("counter").textContent = timer
})

document.getElementById("plus").addEventListener("click", (e) => {
    iterate()
})

document.getElementById("heart").addEventListener("click", (e) => {
    let li = document.getElementById(timer.toString())
    if(li !== null){
        likes = parseInt(li.children[0].textContent)
        li.innerHTML = `${timer} has been liked <span>${++likes}</span> times`
    }
    else{
        li = document.createElement("li")
        li.id = timer.toString()
        li.innerHTML = `${timer} has been liked <span>1</span> time`
        document.getElementsByClassName("likes")[0].appendChild(li)
    }
})

document.getElementById("pause").addEventListener("click", (e) => {
    if(e.target.textContent === " pause "){
        paused = true
        document.getElementById("minus").disabled = true
        document.getElementById("plus").disabled = true
        document.getElementById("heart").disabled = true
        document.getElementById("submit").disabled = true
        e.target.textContent = " resume "
    }
    else{
        paused = false
        document.getElementById("minus").disabled = false
        document.getElementById("plus").disabled = false
        document.getElementById("heart").disabled = false
        document.getElementById("submit").disabled = false
        e.target.textContent = " pause "
    }
})

document.getElementById("comment-form").addEventListener("submit", (e) => {
    e.preventDefault()
    p = document.createElement("p")
    p.textContent = e.target[0].value
    document.getElementById("list").appendChild(p)
})