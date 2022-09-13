const container = document.querySelector(".container")
let gridNumber = 16



const innerContainer = document.createElement("div")
innerContainer.classList.add("innerContainer")
container.appendChild(innerContainer)

window.addEventListener("load", newGrid(gridNumber))

function newGrid(gridNumber){
    removePrevGrid(innerContainer)
  let totalGridNumber = (Number(gridNumber) * Number(gridNumber))
  let gridWidth = (1/gridNumber) * 100
  
  for (i=0; i<totalGridNumber; i++){
      let div = document.createElement("div")
      div.classList.add("box");
      div.style.width = `${gridWidth}%`
      div.style.opacity = 0.1;
      innerContainer.appendChild(div)
  }
  const boxes = document.querySelectorAll(".box")
  boxes.forEach(box=>box.addEventListener("mouseover", hover))
  }
  
//   const boxes = document.querySelectorAll(".box")

// boxes.forEach(box=>box.addEventListener("mouseover", hover))

function hover(e){
this.classList.add("hoverEffect")
    let opacity = parseFloat(this.style.opacity)
    e.target.style.opacity = `${opacity + 0.1}`
    console.log(this.style.opacity)

}



const btn_container = document.createElement("div")
btn_container.classList.add("btn_container")
container.prepend(btn_container)

const button = document.createElement("button")
button.classList.add("btn")
button.textContent = "Create a new grid"
btn_container.appendChild(button)

button.addEventListener("click", function (){
   gridNumber =  prompt ( "What size grid would you like next (max= 100)?")
    gridNumber = Number(gridNumber)
   newGrid(gridNumber)
})

// const greyBtn = document.createElement("button")
// greyBtn.classList.add("btn")
// greyBtn.textContent = "Grey Scale"
// btn_container.appendChild(greyBtn)
// greyBtn.addEventListener("click", greyHover)

// function greyHover(){
//     const boxes = document.querySelectorAll(".box")
//     boxes.forEach(box=>box.addEventListener("mouseover", hoverInGrey))
// }
// function hoverInGrey(e){
//   e.target.style.backgroundColor = "grey"
//     let opacity = parseFloat(this.style.opacity)
//     e.target.style.opacity = `${opacity + 0.1}`

// }
const randomColorBtn= document.createElement("button")
randomColorBtn.classList.add("btn")
randomColorBtn.textContent="Random Color Hover"
btn_container.appendChild(randomColorBtn)

randomColorBtn.addEventListener("click", colorSquares)
function colorSquares(){
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(box=>box.addEventListener("mouseover", colorHover))
}

function colorHover(e){
   bgColor = randomColor()
    console.log(bgColor)
    e.target.style.backgroundColor = `${bgColor}`
}

function removePrevGrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function randomColor(){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let bgColor = `rgb(${x},${y},${z})`
    return bgColor
}
