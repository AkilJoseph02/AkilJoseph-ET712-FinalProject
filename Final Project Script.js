//Starting the Quiz
let startButton = document.querySelector('#startButton');
let quizArea = document.querySelector('#quizArea');

//Quiz Area
let quizQuestion = document.querySelector('#quizQuestion');
let questionProgress = document.querySelector('#questionProgress');
let questionNumber = 1;

//Life
let life = 5;
let lifeCounter = document.querySelector('#lifeCounter');

//Time
let time = 60;
let timeCounter = document.querySelector('#timeCounter');

//Previous Score
let previousScore = document.querySelector('#previousScore');

//Retry
let retryButton = document.querySelector('#retryButton');

//Play Again
let playAgain = document.querySelector('#playAgain');

//Answer Buttons
let answerOne = document.querySelector('#choice1');
let answerTwo = document.querySelector('#choice2');
let answerThree = document.querySelector('#choice3');
let answerFour = document.querySelector('#choice4');

//Answer Text
let choice1Text = document.querySelector('#choice1Text');
let choice2Text = document.querySelector('#choice2Text');
let choice3Text = document.querySelector('#choice3Text');
let choice4Text = document.querySelector('#choice4Text');

startButton.addEventListener('click',function(){
	//Found this code on https://www.codegrepper.com/code-examples/javascript/javascript+timer+countdown+with+seconds
	function decrementSeconds() {
		time -= 1;
		timeCounter.textContent = "Time: " + time ;
		
	if(time == 0){
		$(document).ready(function(){
			$("#quizArea").fadeOut();
			$("#loseScreen").fadeIn();
		});
	};
}
	let countdown = setInterval(decrementSeconds, 1000);	
});

retryButton.addEventListener('click',function(){
	time = 61;	
	life = 5;
	lifeCounter.textContent = `Life: ${life}`;
	previousScore.textContent = `Previous Score: ${questionNumber}`;
	answerOne.disabled = false
	answerTwo.disabled = false
	answerThree.disabled = false
	answerFour.disabled = false
	$(document).ready(function(){
			$("#loseScreen").fadeOut();
			$("#quizArea").fadeIn();
	});
	quizQuestion.textContent = "How many heading elements are in HTML?";
	questionNumber = 1;
	questionProgress.textContent = `Question: ${questionNumber}`;
	choice1Text.textContent = "Ten"
	choice2Text.textContent = "One"
	choice3Text.textContent = "Three"
	choice4Text.textContent = "Six"
	
});

playAgain.addEventListener('click', function(){
	time = 61;	
	life = 5;
	lifeCounter.textContent = `Life: ${life}`;
	previousScore.textContent = `Previous Score: ${questionNumber}`;
	answerOne.disabled = false
	answerTwo.disabled = false
	answerThree.disabled = false
	answerFour.disabled = false
	$(document).ready(function(){
			$("#winScreen").fadeOut();
			$("#quizArea").fadeIn();
	});
	quizQuestion.textContent = "How many heading elements are in HTML?";
	questionNumber = 1;
	questionProgress.textContent = `Question: ${questionNumber}`;
	choice1Text.textContent = "Ten"
	choice2Text.textContent = "One"
	choice3Text.textContent = "Three"
	choice4Text.textContent = "Six"
});

//Choice One
answerOne.addEventListener('click',function(){
	if(life == 0){
		answerOne.disabled = true
		answerTwo.disabled = true
		answerThree.disabled = true
		answerFour.disabled = true
		$(document).ready(function(){
			$("#quizArea").fadeOut();
			$("#loseScreen").fadeIn();
		});
	}
	
	if(questionNumber == 10){
		$(document).ready(function(){
			$("#quizArea").fadeOut();
			$("#winScreen").fadeIn();
		});
	}
		
	//Question 1	
	else if(quizQuestion.textContent==="How many heading elements are in HTML?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 2
	else if(quizQuestion.textContent==="What does src stand for?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 3
	else if(quizQuestion.textContent==="What could you use to make an array of HTML elements?"){
		quizQuestion.textContent = "Which would you use to make a variable that can't be changed?"
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = "var"
		choice2Text.textContent = "let"
		choice3Text.textContent = "const"
		choice4Text.textContent = "object"
	}
	
	//Question 4
	else if(quizQuestion.textContent==="Which would you use to make a variable that can't be changed?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 5
	else if(quizQuestion.textContent==='What would console.log("I like ${favoriteFruit}.") show if favoriteFruit = mangoes?'){
		quizQuestion.textContent = "Which symbol must be put in between consecutive CSS properties?"
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = ","
		choice2Text.textContent = ";"
		choice3Text.textContent = ":"
		choice4Text.textContent = "|"
	}
	
	//Question 6
	else if(quizQuestion.textContent==="Which symbol must be put in between consecutive CSS properties?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 7
	else if(quizQuestion.textContent==="Which DocType declaration is correct for a HTML file?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 8
	else if(quizQuestion.textContent==="Where can a script element be placed in a html file?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 9
	else if(quizQuestion.textContent==="In which type of files can you affect an element's properties?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 10
	else if(quizQuestion.textContent==="What word should you use to establish a new object?"){
		questionNumber++
	}
});
	
answerTwo.addEventListener('click',function(){
	if(life == 0){
		answerOne.disabled = true
		answerTwo.disabled = true
		answerThree.disabled = true
		answerFour.disabled = true
		$(document).ready(function(){
			$("#quizArea").fadeOut();
			$("#loseScreen").fadeIn();
		});
	}
	
	//Question 1
	else if(quizQuestion.textContent==="How many heading elements are in HTML?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 2
	else if(quizQuestion.textContent==="What does src stand for?"){
		quizQuestion.textContent = "What could you use to make an array of HTML elements?"
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = "document.querySelectorAll"
		choice2Text.textContent = "document.querySelector"
		choice3Text.textContent = "document.queryCommandValue"
		choice4Text.textContent = "document.queryCommandState"
	}
	
	//Question 3
	else if(quizQuestion.textContent==="What could you use to make an array of HTML elements?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 4
	else if(quizQuestion.textContent==="Which would you use to make a variable that can't be changed?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 5
	else if(quizQuestion.textContent==='What would console.log("I like ${favoriteFruit}.") show if favoriteFruit = mangoes?'){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 6
	else if(quizQuestion.textContent==="Which symbol must be put in between consecutive CSS properties?"){
		quizQuestion.textContent = "Which DocType declaration is correct for a HTML file?"
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = "<!DOCTYPE html>"
		choice2Text.textContent = "<!doctype html>"
		choice3Text.textContent = "Neither 1 or 2."
		choice4Text.textContent = "Both 1 and 2."
	}
	
	//Question 7
	else if(quizQuestion.textContent==="Which DocType declaration is correct for a HTML file?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 8
	else if(quizQuestion.textContent==="Where can a script element be placed in a html file?"){
		quizQuestion.textContent = "In which type of files can you affect an element's properties?"
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = "HTML"
		choice2Text.textContent = "CSS"
		choice3Text.textContent = "JS"
		choice4Text.textContent = "1, 2 , and 3."
	}
	
	//Question 9
	else if(quizQuestion.textContent==="In which type of files can you affect an element's properties?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 10
	else if(quizQuestion.textContent==="What word should you use to establish a new object?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
});
	
answerThree.addEventListener('click',function(){
	if(life == 0){
		answerOne.disabled = true
		answerTwo.disabled = true
		answerThree.disabled = true
		answerFour.disabled = true
		$(document).ready(function(){
			$("#quizArea").fadeOut();
			$("#loseScreen").fadeIn();
		});
	}
	
	//Question 1
	else if(quizQuestion.textContent==="How many heading elements are in HTML?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 2
	else if(quizQuestion.textContent==="What does src stand for?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 3
	else if(quizQuestion.textContent==="What could you use to make an array of HTML elements?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 4
	else if(quizQuestion.textContent==="Which would you use to make a variable that can't be changed?"){
		quizQuestion.textContent = 'What would console.log("I like ${favoriteFruit}.") show if favoriteFruit = mangoes?'
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = "I like ${favoriteFruit}."
		choice2Text.textContent = "I like mangoes."
		choice3Text.textContent = '"I like mangoes."'
		choice4Text.textContent = "'I like mangoes.'"
	}
	
	//Question 5
	else if(quizQuestion.textContent==='What would console.log("I like ${favoriteFruit}.") show if favoriteFruit = mangoes?'){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 6
	else if(quizQuestion.textContent==="Which symbol must be put in between consecutive CSS properties?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 7
	else if(quizQuestion.textContent==="Which DocType declaration is correct for a HTML file?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 8
	else if(quizQuestion.textContent==="Where can a script element be placed in a html file?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 9
	else if(quizQuestion.textContent==="In which type of files can you affect an element's properties?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 10
	else if(quizQuestion.textContent==="What word should you use to establish a new object?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
});
	
answerFour.addEventListener('click',function(){
	if(life == 0){
		answerOne.disabled = true
		answerTwo.disabled = true
		answerThree.disabled = true
		answerFour.disabled = true
		$(document).ready(function(){
			$("#quizArea").fadeOut();
			$("#loseScreen").fadeIn();
		});
	}
	
	//Question 1
	else if(quizQuestion.textContent==="How many heading elements are in HTML?"){
		quizQuestion.textContent = "What does src stand for?"
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = "Search"
		choice2Text.textContent = "Source"
		choice3Text.textContent = "Sample Rate Converter"
		choice4Text.textContent = "Steve Rifkind Company"
	}
	
	//Question 2
	else if(quizQuestion.textContent==="What does src stand for?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 3
	else if(quizQuestion.textContent==="What could you use to make an array of HTML elements?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 4
	else if(quizQuestion.textContent==="Which would you use to make a variable that can't be changed?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 5
	else if(quizQuestion.textContent==='What would console.log("I like ${favoriteFruit}.") show if favoriteFruit = mangoes?'){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 6
	else if(quizQuestion.textContent==="Which symbol must be put in between consecutive CSS properties?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 7
	else if(quizQuestion.textContent==="Which DocType declaration is correct for a HTML file?"){
		quizQuestion.textContent = "Where can a script element be placed in a html file?"
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = "Nowhere"
		choice2Text.textContent = "In both head and body"
		choice3Text.textContent = "head"
		choice4Text.textContent = "body"
	}
	
	//Question 8
	else if(quizQuestion.textContent==="Where can a script element be placed in a html file?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
	
	//Question 9
	else if(quizQuestion.textContent==="In which type of files can you affect an element's properties?"){
		quizQuestion.textContent = "What word should you use to establish a new object?"
		questionNumber++
		questionProgress.textContent = `Question: ${questionNumber}`;
		choice1Text.textContent = "new"
		choice2Text.textContent = "object"
		choice3Text.textContent = "construct"
		choice4Text.textContent = "create"
	}
	
	//Question 10
	else if(quizQuestion.textContent==="What word should you use to establish a new object?"){
		life--;
		lifeCounter.textContent = `Life: ${life}`;
	}
});;


	

		