const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const display3 = document.querySelector(".display3");
let temp1=''; // 그냥 입력된 버튼의 값
let temp2=''; // 첫번째 입력 숫자
let temp3=''; // 두번째 입력값
let result=''; // 결과값
let temp4=''; // 오퍼레이터
// 오퍼레이터를 파스 시키면 문자열이 아니라 숫자로 들어감. 

// display에 띄우고 오퍼레이터 + -  들어오면 display 초기화 
// 오퍼레이터 = 들어오면 계산식과 결과값을 각각 display와 display3에 출력
function calcbutton(num) 
{
    display.innerText += num;
    temp1=display.innerText;
        if(num=='+')
         {   
           
            temp2=parseInt(temp1.substring(0,temp1.length-1));
            
             temp4='+';
             display.innerText='';
             display2.innerText=temp2;
             alert('+입니다');
            console.log(temp2);
            result=temp2;

         }
         else if(num=='-')
         {   
            
            temp2=parseInt(temp1.substring(0,temp1.length-1));
             temp4='-';
             display.innerText='';
             display2.innerText=temp2;
             alert('-입니다');
             console.log(temp2);
         }
         
         else if(num!==NaN)
         {
           
            
         }
       
       
        //1을 넣으면 display 표시가 안됨 
        // temp2=temp1.substring(0,temp1.length-1); //+를 제외한걸 temp2에 넣음
        // display2.innerText=parseInt(temp2);
        
        //  if(num=='+')
        // {   
        //     temp4='+';
        //     display.innerText='';

        // }
        // else if(num=='-')
        // {   
        //     temp4='-';
        //     display.innerText='';
        // }
    


}


function calculate(str){

    if(str=='=')
    {
        temp3=parseInt(temp1.substring(0,temp1.length)); //두번째값을
        console.log(temp3);
        
        if(temp4=='+')
        {
            alert('더하기');
            result=temp2+temp3;
            display.innerText=temp2+temp4+temp3;

            display3.innerText=result;
        }

        if(temp4=='-')
        {
            alert('빼기');
            result=temp2-temp3;
            display.innerText=temp2+temp4+temp3;
            display3.innerText=result;
        }
    }

}





// temp1=display.text

// 1001  +)  10001   =      (temp1)

// temp2    temp3  


// temp1(화면)에 들어가서 

// temp2로 들어감(첫번째 입력값)

// display2에 띄움



// +나 -이면 display를 초기화 하고 temp4에 기호 저장

// ---------------

// =을 클릭하면 temp3(두번째값)에다가 temp2와 같은 방식으로 dispay에 올라온 값을
// =빼고 넣음 그 다음 display2에 숫자 두개를 붙여서 띄움 

