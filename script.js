let redcard = 0;

let shuffle = () => {
	let allcards = document.getElementsByClassName("card-img")
	allcards[redcard].setAttribute("src", "./image/black.png")
	let random = Math.floor(Math.random() * allcards.length) //Un nombre au hasard
	let card = allcards[random]
	card.setAttribute("src", "./images/red.png");
	redcard = random;
}

let flip = (event) => {
	let element = event.currentTarget;
	if (element.className === "card-item"){
		if (element.style.transform === "rotateY(180deg)") {
			element.style.transform = "rotateY(0deg)";
		} else {
			element.style.transform = "rotateY(180deg)";
		};

	};
}


shuffle();

let btn = document.getElementById("btn");
btn.addEventListener("click", shuffle);