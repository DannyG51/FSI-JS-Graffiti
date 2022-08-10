
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = "left"


let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius='50px'
    
}


let dogNames = document.querySelectorAll('.dog-name')
for(let x = 0; x < dogNames.length; x++){
dogNames[x].style.textAlign = "left"
}



let footer = document.querySelector('.footer')
footer.style.color = "red"
