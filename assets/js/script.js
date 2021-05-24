// Qs and As array
var QsandAs = [
    {question: "What is Javascript?", options: ["A web browser", "A Programming Language", "A website", "A computer program"], answer: "op 2"},
    {question: "What character is used for multiplication?", options: ["x", "*", "m", "&"], answer: "op 2"},
    {question: "Declare a variable x equal to 5:", options: ["var x:5;", "int x=5,", "var x = 5;", "x=5;"], answer: "op 3"},
    {question: "Logical Comparator AND is represented by the following symbols:", options: ["$$", "++", "||", "&&"], answer: "op 4"}];

// Query Selector to hide and show pages
    var page0 = document.querySelector(".page-0");
    var page1 = document.querySelector(".page-1");
    var page2 = document.querySelector(".page-2");
    var page3 = document.querySelector(".page-3");

// Query Selector to manage main page buttons
    var startgame = document.querySelector("#start-button");
    var scorelistbtn = document.querySelector("#score-list-btn");

// Query Selector to display the result after answering each question
    var result = document.querySelector("#result");

// Query Selector for the questions and answers rendering
    var renderquestion = document.querySelector("#questions-header");
    var qanda = document.querySelector("#qanda-container");

// Show Time Left
    var timer = document.querySelector("#timer");

// Query Selector for the final score and name submission
    var submitbutton = document.querySelector("#submit-score");
    var displayscore = document.querySelector("#final-score");
    var playername = document.querySelector("#player-name");

// Query Selector for the display scores page
    var scorelist = document.querySelector("#score-list");
    var clearscores = document.querySelector("#clear-scores");
    var goback = document.querySelector("#go-back");

// Variables
    var timeleft= 60;
    var questionindex = 0;
    var tosave=[];

// Get scores already saved
    var savedscores = JSON.parse(localStorage.getItem("saved-scores"));
    if (savedscores !== null)
    {
        tosave = savedscores;
    }



// Start Button will initialize the Quiz
    startgame.addEventListener("click", init);
    scorelistbtn.addEventListener("click",showscorelist);



// Quiz Engine
function init (event)
{
    renderscorelist();
    page0.style.display="none";
    page1.style.display="block";
    timer.style.display="block";

    event.preventDefault();

    // Start Timer
   var timerInterval = setInterval(function(){
        timer.textContent = "Time: " + timeleft + " seconds";
        timeleft--;
        if(timeleft === 0 || questionindex>3) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            showscores();
          }

          console.log("time left: " + timeleft);    //Console Log 
    }, 1000);



// Render question 1
    renderquestions();

    //Event Litsener Save Score
    submitbutton.addEventListener("click", savescore);
    //Event Litsener Clear Score
    clearscores.addEventListener("click", clearscorelist);

    //Event Litsener Go back to main page
    goback.addEventListener("click", function backtomainpage(){
            page0.style.display="block";
            page1.style.display="none";
            page2.style.display="none";
            page3.style.display="none";
            timer.style.display="none";
        }
    );
}

    // render Question Function
function renderquestions(){

    renderquestion.textContent = QsandAs[questionindex].question;

    // render buttons
    var answer =document.createElement("div");
    answer.id="answers-container";
    
    for (var i=0; i<4; i++)
    {
        var btn = document.createElement("button");
        btn.textContent = QsandAs[questionindex].options[i];
        btn.id=("op "+(i+1));
        btn.className = "option-btn";
        answer.appendChild(btn);
        qanda.appendChild(answer); 
    }

    // Check if answer is correct/incorrect
    answer.addEventListener("click", checkanswer);
}

// Answer Click Event Handler Fuction
function checkanswer(event){
    event.preventDefault();
    var answer = document.querySelector("#answers-container");   
    var element = event.target;
    // Check if the target is clicked
    if (element.className != "option-btn")
    {
        console.log("Out of range");
        return;
    }
    // Compare answer
    if(element.id === QsandAs[questionindex].answer){
    showresult("Correct!");
    }
    else{
        timeleft=timeleft-10;
        if (timeleft<0){
            timeleft=0;
        }
    showresult("Incorrect, -10 points!");
}

console.log(questionindex);    //Console Log 

    // Clear answered question
renderquestion.textContent = "";
answer.remove();
questionindex++;

    // Check question index
    if (questionindex<=3){
        renderquestions();
    }
    else{
        showscores();
    }
}

// Function to display the final score after all questions are answered or the time is up.
function showscores(){
    page1.style.display="none";
    page2.style.display="block";
    timer.style.display="none";
    displayscore.textContent = "Your final score is: " + timeleft;
    }

// Function to show the result after each question is answered.
function showresult(resulttext){
    if (resulttext==="Incorrect, -10 points!"){
        result.style.color="red";
    }
    else{
        result.style.color="black";
    }
    result.textContent = resulttext;
    setTimeout(function () {
        result.textContent = "";
    }, 1000);
}

// Function to save the score to the local storage.
function savescore(event){
    event.preventDefault();
    // Will not save if empty
    if (playername.value === "") {
        return;
    }
    // Add name and score to the score list
    tosave.push({name: playername.value, score: timeleft});
    localStorage.setItem("saved-scores", JSON.stringify(tosave));
    page2.style.display="none";
    page3.style.display="block";

    renderscorelist();

}

// Function to render the score list.
function renderscorelist(){
    removechild();
    for (var i=0; i<tosave.length; i++){
        var li = document.createElement("li");
        li.setAttribute("data-index", i);
        li.class="list-item";
        li.textContent = (i+1) +". " + tosave[i].name + " - "+ tosave[i].score;
        scorelist.appendChild(li);
    }
}

// Function to clear the score list.
function clearscorelist(event){
    event.preventDefault();
    localStorage.removeItem("saved-scores");
    removechild();
    tosave=[];
}

// Function to display the score list.
function showscorelist(event){
    event.preventDefault();
    timer.style.display="none";
    page0.style.display="none";
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="block";
    renderscorelist()
}

// function to remove child elements when the score list is cleared or the list is rendered.
function removechild(){
    scorelist.textContent="";
}