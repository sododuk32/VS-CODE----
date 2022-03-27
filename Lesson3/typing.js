const wordDisplay = document.querySelector(".word-display");

const wordInput = document.querySelector(".word-input");

// 타수/시간

fetch("https://random-word-api.herokuapp.com/word?number=50")
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(function (result) {
        let wordList = result;
        const score = document.querySelector(".score");

        const time = document.querySelector(".time");
        const reset = document.querySelector(".reset");
        time.innerText = 10;

        let count = 0;

        const DEFAULT_TIME = 10;
        let time_left = DEFAULT_TIME;

        wordDisplay.innerText = wordList[count];

        wordInput.addEventListener("keydown", function () {

            if (event.code === "Enter") {
                if (wordInput.value === wordDisplay.innerText) {
                    count++;
                    if (count === wordList.length) {
                        alert("game over");
                        wordInput.disabled = true;
                        clearInterval(timeInterval);
                        return false;
                    }
                }

                wordDisplay.innerText = wordList[count];

                wordInput.value = "";
                score.innerText = count;
                time.innerText = DEFAULT_TIME;
                time_left = DEFAULT_TIME;
            }

        })

        let timeInterval = setInterval(function () {

            time_left--;
            time.innerText = time_left;

            if (time_left === 0) {

                clearInterval(timeInterval);
            }

        }, 1000)

        wordInput.addEventListener("clicked", function () {
            if (event.code === "clicked") {
                clearInterval(timeInterval);
                wordInput.value = "";
                count = 0;
                score.innerText = 0;
            }
        })
        console.log(result);
    })

function gameReset() 
{   }