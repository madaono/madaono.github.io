/**
 * Created by Wj on 2016/9/18.
 */
var touZi=document.querySelector('.touZi');
var btn1=document.querySelector('.btn1');
var btn2=document.querySelector('.btn2');
var btn3=document.querySelector('.btn3');
var btn4=document.querySelector('.btn4');
var btn5=document.querySelector('.btn5');
var btn6=document.querySelector('.btn6');
btn1.addEventListener('click',function () {
    touZi.style.transform="rotateX(0)"+" "+"rotateY(0)";
});
btn2.addEventListener('click',function () {
    touZi.style.transform="rotateX(0)"+" "+"rotateY(90deg)";
});
btn3.addEventListener('click',function () {
    touZi.style.transform="rotateX(-90deg)"+" "+"rotateY(0)";
});
btn4.addEventListener('click',function () {
    touZi.style.transform="rotateX(90deg)"+" "+"rotateY(0)";
});
btn5.addEventListener('click',function () {
    touZi.style.transform="rotateX(0)"+" "+"rotateY(-90deg)";
});
btn6.addEventListener('click',function () {
    touZi.style.transform="rotateX(180deg)"+" "+"translateZ(0)";
});
