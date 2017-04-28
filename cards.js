console.log("Dynamic Cards")

var cardText = document.getElementById("inputarea");
var cardSleeve = document.getElementById("cardsleeve");
var deleteCard;
var create = document.getElementById("create").addEventListener("click", function(event){
	cardSleeve.innerHTML += `<div class="card">
							 <p>${cardText.value}</p>
							 <button class="delete">Delete Card</button>
							 </div>`;
	deleteCard = document.getElementsByClassName("delete");
	console.log(deleteCard);
	console.log(event);
});
var addDelFunc = document.getElementById("create").addEventListener("click", function(event){
	for (var i = 0; i < deleteCard.length; i++){
		deleteCard[i].addEventListener("click", function(event){
				event.target.parentNode.parentNode.removeChild(event.target.parentNode)
		});
	}
});






// function findDelParent(target){
// 	target.addEventListener()
// }
// .addEventListener("click", function(event){
// 	target.getParent();
// 	console.log(event)