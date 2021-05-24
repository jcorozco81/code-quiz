# code-quiz
Code Quiz Webpage



## Description

The Code Quiz Webpage was created with the purpose of providing the user a way to test his/her knowledge on JavaScript coding. The user will have 60 seconds to answer four  questions. After all four questions are answered, the user will be able to see his/her score and saved it to the brwoser local storage.

By working on this project, I learned how to use the JavaScript code to modify the html document, change styling and saving data to the local storage. 



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)



## Installation

1. To install this website to a local computer, clone the repository on the following link:
 
    * Repository link on GitHub website: https://github.com/jcorozco81/code-quiz.

2. Double click on the index.html file to open the website. The website will open on your default web browser. If the webpage does not function as expected, verify that JavaScript is enabled in your web browser.

Or

1. The live webpage is served on the GitHub Pages website and it can be accessed by clicking on the following link: https://jcorozco81.github.io/code-quiz/. The webpage will open on your default browser. If the webpage does not function as expected, verify that JavaScript is enabled in your web browser.



## Usage

1. The webpage will load on the web browser, and it shall be similar to the one shown in the following picture.

[Screenshot of the Code Quiz Main Page](/assets/images/main-page.PNG)

![Screenshot of the Code Quiz Main Page](/assets/images/main-page.PNG)

2. To start the quiz, click on the button **Start Quiz**. After the **Star Quiz** button is clicked, a question will be shown and the timer on top of the screen will start. Only one question will be shown at a time. After a question is answered, then the next one will be shown and then successively until all four are shown. If the question is answered correctly, a text that reads **Correct!** will be shown. If the question is answered incorrectly a text that reads **Incorrect, -10 points!** will be shown and 10 seconds will be automatically subtracted from the time.

[Screenshot showing a Questions](/assets/images/questions.PNG)

![Screenshot showing a Questions](/assets/images/questions.PNG)

3. After all four questions are answered, the **Final Score** will be shown. The **Final Score** will be the time remaining minus ten seconds for each question answered incorrectly. An **input text field** with a **Submit** button will be shown along with the **Final Score** for the user to save his/her score. The **Final Score** will be shown after any of the two conditions are met:

    * Sixty seconds have elapsed, and the timer is zero. 
        or
    * All four questions are answered.

[Screenshot showing the Final Score](/assets/images/final-score.PNG)

![Screenshot showing the Final Score](/assets/images/final-score.PNG)


4. After the score is saved, the user will be able to see the scores previously saved. Two buttons will be shown: **Restart Quiz** and **Clear Scores**.

    * **Restart Quiz:** The main page will be shown.
    * **Clear Scores:** all the scores will be cleared and the browser local storage will be cleared as well.

[Screenshot showing the Score List](/assets/images/score-list.PNG)

![Screenshot showing the Score List](/assets/images/score-list.PNG)


5. The **View Scores** button is always shown on the right side of header for the user to navigate to the **Score List**



## Credits

The index.html file, the style.CSS file and the JavaScript code file (script.js) in this project were created by Juan Carlos Orozco.

Contact Information:
* Juan Orozco
* Email: (jcorozco@gmail.com)

I want to thank the ballerz study group for all the ideas shared in our meetings.

## License

Copyright © 2021 Juan Carlos Orozco.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

