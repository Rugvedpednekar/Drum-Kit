document.addEventListener("keypress", (event) => {
    switch(event.key){
        case "w":
            var bass = new Audio("sounds/tom-1.mp3")
            console.log("w")
            bass.play()
            break
        case "a":
            var bass = new Audio("sounds/tom-2.mp3")
            bass.play()
            break
        case "s":
            var bass = new Audio("sounds/tom-3.mp3")
            bass.play()
            break
        case "d":
            var bass = new Audio("sounds/tom-4.mp3")
            bass.play()
            break
        case "j":
            var bass = new Audio("sounds/snare.mp3")
            bass.play()
            break
        case "k":
            var bass = new Audio("sounds/crash.mp3")
            bass.play()
            break
        case "l":
            var bass = new Audio("sounds/kick-bass.mp3")
            bass.play()
            break
    }


})
