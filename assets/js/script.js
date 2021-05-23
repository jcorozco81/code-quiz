var QsandAs = [
    {question: "What is Javascript?", options: ["A web browser", "A Programming Language", "A website", "A computer program"], answer: "op 2"},
    {question: "What character is used for multiplication?", options: ["x", "*", "m", "&"], answer: "op 2"},
    {question: "Declare a variable x equal to 5:", options: ["var x:5;", "int x=5,", "var x = 5;", "x=5;"], answer: "op 3"},
    {question: "Logical Comparator AND is represented by the following symbols:", options: ["$$", "++", "||", "&&"], answer: "op 4"}];

// Hide and show pages
    var page0 = document.querySelector(".page-0");
    var page1 = document.querySelector(".page-1");
    var page2 = document.querySelector(".page-2");
    var page3 = document.querySelector(".page-3");

var startgame = document.querySelector("#start-button");

// Result after answering each question
var result = document.querySelector("#result");

var renderquestion = document.querySelector("#questions-header");
var qanda = document.querySelector("#qanda-container");

// Show Time Left
var timer = document.querySelector("#timer");

var submitbutton = document.querySelector("#submit-score");
var displayscore = document.querySelector("#final-score");
var playername = document.querySelector("#player-name");

var scorelist = document.querySelector("#score-list");
var clearscores = document.querySelector("#clear-scores");
var goback = document.querySelector("#go-back");


var timeleft= 60;
var questionindex = 0;
var tosave=[];

var savedscores = JSON.parse(localStorage.getItem("saved-scores"));
if (savedscores !== null) {
    tosave = savedscores;
  }




// Start Button will initialize the game
startgame.addEventListener("click", init);










// Game Engine
function init (event){
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



    // Render questions
    renderquestions();
    console.log("question 1")

    //Event Litsener Save Score
    submitbutton.addEventListener("click", savescore);
    //Event Litsener Clear Score
    clearscores.addEventListener("click", clearscorelist);

    //Event Litsener Go back to main page
    goback.addEventListener("click", function backtomainpage()
        {
            page0.style.display="block";
            page1.style.display="none";
            page2.style.display="none";
            page3.style.display="none";
            timer.style.display="none";

        }
    );

}

function renderquestions(){

    console.log("Line 77: Render question #"+(questionindex+1))    //Console Log

    // render Question
    renderquestion.textContent = QsandAs[questionindex].question;

    // render buttons
    var answer =document.createElement("div");
    answer.id="answers-container";
    for (var i=0; i<4; i++){
    var btn = document.createElement("button");
    btn.textContent = QsandAs[questionindex].options[i];
    btn.id=("op "+(i+1));
    btn.className = "option-btn";
    answer.appendChild(btn);    //change
    qanda.appendChild(answer); 
    }

    answer.addEventListener("click", checkanswer);

}

// Event Handler Answers
function checkanswer(event){
    event.preventDefault();
    var answer = document.querySelector("#answers-container");   
    var element = event.target;
    if (element.className != "option-btn")
    {
        console.log("Out of range");
        return;
    }

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
renderquestion.textContent = "";
answer.remove();
questionindex++;

    if (questionindex<=3){
        renderquestions();
        console.log("if");    //Console Log 

    }
    else{
        showscores();
        console.log("else");    //Console Log 

    }
}

function showscores(){
    page1.style.display="none";
    page2.style.display="block";
    timer.style.display="none";
    displayscore.textContent = "Your final score is: " + timeleft;
    }

    







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

function savescore(event){

    event.preventDefault();
    if (playername.value === "") {
        return;
    }
    tosave.push({name: playername.value, score: timeleft});
    localStorage.setItem("saved-scores", JSON.stringify(tosave));
    page2.style.display="none";
    page3.style.display="block";

    renderscorelist();

}

function renderscorelist(){
    removechild();
    console.log(tosave.length);
    for (var i=0; i<tosave.length; i++){
            var li = document.createElement("li");
            li.setAttribute("data-index", i);
            li.class="list-item";
            li.textContent = (i+1) +". " + tosave[i].name + " - "+ tosave[i].score;
            console.log(li);
            scorelist.appendChild(li);
    }
}

function clearscorelist(){
    localStorage.removeItem("saved-scores");
    removechild();
}


function showscorelist()
{
    timer.style.display="none";
    page0.style.display="none";
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="block";
    renderscorelist()
}

function removechild(){

    scorelist.textContent="";
    
}