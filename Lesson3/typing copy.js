
const wordDisplay=document.querySelector(".word-display");
//class라 .word-display; get 어쩌구가 아니라 우린 쿼리 셀렉터로 html 클래스를 붙잡아서
//여기에 선언한 변수(.word-display)에 넣어주고 빼주고를 가능하게 하고있음
const wordInput=document.querySelector(".word-input");

let wordList=['apple','banana','orange','mango'];


const score=document.querySelector(".score");

const time=document.querySelector(".time");
const reset=document.querySelector(".reset");
time.innerText=10;

let count = 0;


const DEFAULT_TIME=10; // 변수 선언시뭘넣든 오브젝트 형태로 존재하고잇음 .변수명 하면됨
let time_left=DEFAULT_TIME;

wordDisplay.innerText=wordList[count];

//keydown 이벤트를 비동기 방식으로 작동하도록 추가 함 
//이벤트 발생시 if문을 통해 실행될지안될지 보고 실행함. 
wordInput.addEventListener("keydown",function(){

    if(event.code==="Enter")
    {
        if(wordInput.value=== wordDisplay.innerText) //입력값과 worddisplay라는 화면에 보여지는 값이 동일한지 체크
        {
            count++;            //카운트를 올려서 다음 배열을 추가
            if(count===wordList.length) //배열의 총 길이만큼 카운트가 올라가면 메시지 띄운후 input(텍스트박스)을 disabled
            {
                    alert("game over");
                    wordInput.disabled = true;
                    clearInterval(timeInterval); //남은 시간을 체크하는 timeinterval을 초기화
                    return false; //마지막 단어를 냅둠
            }

           wordDisplay.innerText = wordList[count];
           //입력을 올바르게 했을시 COUNT를 1개 올려서 다음 배열값을 화면에 띄움 
           wordInput.value="";
            //입력 텍스트 박스를 초기화
           score.innerText=count;
           //JS에서 선언한 SCORE를 COUNT값으로 덮어씌움
           time.innerText=DEFAULT_TIME;
           //남은 시간으 ㄹ초기화
           time_left=DEFAULT_TIME;
           //시간을 디폴트타임값으로 변경
        }
        
    }
    //value=asdf
    //사용자 입력값 : wordinput.value
    //보이는 값 worddisplay.innertext , wordlist[count]

})

//setinterval ->비동기
//  setinterval (실행될함수, 몇초마다 실행되냐)
let timeInterval = setInterval(function(){

   time_left--;
   time.innerText=time_left;

   if(time_left===0)
   {

    clearInterval(timeInterval);
   }


} , 1000)


wordInput.addEventListener("clicked",function()

{
    if(event.code==="clicked")
    {
        clearInterval(timeInterval);
        wordInput.value="";
        count=0;
        score.innerText=0;
    }
}

)