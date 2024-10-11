var readline=require("readline-sync");

var Answer=[0,1,2,3,4,5,6,7,8,9];
for(i=0,i<4,i++){
    var random_math =Math.floor(Math.random()*10);
    var temp=ans[i];
    ans[i]=ans[random_math];
    ans[random_math]=temp;
};
var secret=ans.slice(0,4).join("");

function getAns(secret,guess){
    var A=0;
    var B=0;
    for(var i=0,i<4,i++){
        if(secret[i]===guess[i]){
            A++;
        } else if (secret.includes(guess[i])){
            B++;
        }
    }
    return(A,B);
}
 var attempts = 0;//猜的次數
 var G;
 do{
    G=readline.question("請輸入4位數的數字");
    if(G. length !=4 || isNaN(G) )//isNaN(判斷是不是數字) 
    {
     console.log("請重新輸入");
     continue
    }
    attempts++;
    var {A,B} = getAns(secret,G);
    console.log(A + "A" + B + "B");
    if(A === 4){
        console.log("正確答案是"+ secret +",你一共猜了"+attempts+"次。");
        break;
    }

 }
while (true)
