//console.log("Up and Running!");

var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",}
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",}
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",}
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds",
}
];

 var cardsInPlay = [];
 var checkForMatch = function() {
 	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
}	else {
	console.log("Sorry, try again.");
}

var flipCard = function(cardId) {
	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
}



