const grid = document.querySelector(".main_grid")

const startField = document.querySelector('.start')

const leftsideMenu = document.querySelector(".leftside_menu")

const settings = document.querySelector(".settings_img")

const range = document.querySelector("#range")

const rangeOutput = document.querySelector(".bombs_count")

const settingsImg = document.querySelector(".settings_img")

let timerId = 0 

const clearElement = (element) => {
    element.innerHTML = "";
}

const leftsideSlideOver = () => {
    leftsideMenu.style.marginLeft = "10px"
    settingsImg.style.transform = "rotate(360deg)"
}

const leftsideSlideOut = () => {
    leftsideMenu.style.marginLeft = "-260px"
    settingsImg.style.transform = "rotate(0deg)"
}

const timer = () => {
    let time = 1
    const output = document.getElementById('timer')
    clearInterval(timerId)
    output.innerHTML = `<h1>0<h1>`
    timerId = setInterval(() => {
        let newTime = time++
        output.innerHTML = `<h1>${newTime}<h1>`
    }, 1000)
}

const numberOfBombs = () => {
    rangeOutput.innerHTML = `<h1>${range.value}</h1>`
}

const start = () => {
    timer()
    clearElement(grid)
    startField.style.display = 'none'
    for (let i = 0; i < 100; i++) {
        let newDiv = document.createElement("button")
        newDiv.className = "cell"
        newDiv.id = "c"+i
        grid.appendChild(newDiv)
    }
    const game = () => {
        let bombs = []
        for(let i = 0;i<range.value;i++){
            let rand = Math.trunc(Math.random() * 100)    
            while(bombs.some(x=>x===rand)){
                rand = Math.trunc(Math.random() * 100)
            }        
            bombs.push(rand) 
        }
        bombs = bombs.map(x=>document.querySelector(`#c${x}`))
        console.log(bombs)
        let cell = document.querySelectorAll(".cell")

        for (let i = 0; i < 100; i++) {
            cell[i].onclick = () => {
                cell[i].disabled = true
                cell[i].style.background = "black"
            }
        }
        for (let i = 0; i < bombs.length; i++) {
            const bomb = bombs[i]
            bomb.onclick = ()=>{
                bomb.style.background = "red"
                document.querySelectorAll(".cell").disabled = true
            }
        }
    }
    game()
}