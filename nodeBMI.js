var readline = require("readline-sync")
//input weight
var weight = readline.questionInt("Please input ur weight(KG)?")
var height = readline.questionInt("Please input ur height(cm)?")
var bmi=weight / ((height / 100) ** 2)
//document.getElementById("bmi").innerHTML = bmi
console.log("Hello,Your BMI is:"+ bmi)

switch(true){
    case(bmi<18.5):
    console.log("體重過輕");
    break;
    case(18.5<=bmi&&bmi<24):
    console.log("正常範圍");
    break;
    case(24<=bmi&&bmi<27):
    console.log("過重");
    break;
    case(27<=bmi&&bmi<30):
    console.log("輕度肥胖");
    break;
    case(30<=bmi&&bmi<35):
    console.log("中度肥胖");
    break;
    case(bmi=>35):
    console.log("重度肥胖");
    break;
}