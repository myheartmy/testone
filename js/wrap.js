function oncity(){
    var cityPosit = document.querySelector('.cityposit');
    // var hNode = document.querySelector('.citylist h2');
    var hSpanText = document.querySelector('.citylist h2 span');
    var showList = document.querySelector('.city-list');
    var aText = document.querySelectorAll('.city-list li a');
    var supIndex = 0;
    cityPosit.onmouseover = function(ev){
        var e = ev || window.event;
        var tg =e.target || e.srcElement;
        if(tg.nodeName == 'H2'){
            tg.className = 'onhover';
            showList.className = 'city-list show-list';
        }
    }
    cityPosit.onmouseleave = function(ev){
        var e = ev || window.event;
        var go =e.target.children[0].children[0];
        console.log(go)
        if(go.nodeName == 'H2'){
            go.className = '';
            showList.className = 'city-list';
        }
    }
    // city-text事件
    function onAll(n){
        aText[n].onclick = function(){
            aText[supIndex].className = '';
            aText[n].className = 'onback';
            showList.className = 'city-list';
            hSpanText.innerText = this.innerText;
            supIndex = n;
        }
        aText[n].onmouseover = function(){
            if(aText[n].className == 'onback' ){//判断鼠标移到当前点击事件时   赋值原来的样式
                console.log(1);
                aText[n].className = 'onback';
            }else{//否则改变样式  划过的样式
                console.log(2);
                aText[n].className = 'onover';
                console.log(aText[n])
            }
        }
        aText[n].onmouseleave = function(){
            if(aText[n].className == 'onback' ){//判断鼠标移到当前点击事件时   赋值原来的样式
                console.log(1);
                aText[n].className = 'onback';
            }else{//否则改变样式  划过的样式
                console.log(2);
                aText[n].className = '';
                console.log(aText[n])
            }
        }
    }
    for(var i = 0;i < aText.length;i++){
        onAll(i);
    }
}
oncity()

// top
var navs = document.querySelector('.navs');
var mm = document.querySelectorAll('.mm');
navs.onmouseover = function (ev) {
    var e = ev || window.event;
    var tg = e.target || e.srcElement;
    // console.log(tg);
    // console.log(tg.parentNode.children[1]);

    if (tg.nodeName == 'A' && tg.className == 'dd') {
        tg.className = 'dd onover';
        tg.parentNode.children[1].style.display = 'block';
        // myjd.style.display = 'block';
    }

}
for (var i = 0; i < mm.length; i++) {
    mm[i].index = i;
    mm[i].onmouseleave = function () {
        // var e = ev || window.event;
        // var tg = e.target || e.srcElement;
        // // console.log(tg);
        // console.log(tg.children[2]);
        if (this.children[0].nodeName == 'A' && this.children[0].className == 'dd onover') {
            this.children[0].className = 'dd';
            this.children[1].style.display = 'none';
            console.log(this.children[1]);
            // myjd.style.display = 'block';
        }
    }

}

        var indexs = 0;
        var conSimgs = document.querySelectorAll('.imgs-scoll');
        var timer2;
        var consl = document.querySelector('.cons-leftbtn');
        var consr = document.querySelector('.cons-rightbtn');
        aotoFools();
        console.log(conSimgs)

        function aotoFools() { //自动播放
            // clearInterval(timer1)
            timer2 = setInterval(function (ev) {
                console.log(indexs);
                conSimgs[indexs].style.zIndex = 1;
                conSimgs[indexs].style.opacity = 0.1; //把原来的图片透明度归位
                indexs++;
                //如果下标大于imgs长度时，下标为0
                if (indexs >= conSimgs.length) {
                    indexs = 0;
                }
                conSimgs[indexs].style.zIndex = 10;
                conSimgs[indexs].style.opacity = 1;
                alph(conSimgs[indexs], 100)
            }, 5000)
        }
        consl.onclick = function () {
            clearInterval(timer2);
            conSimgs[indexs].style.zIndex = 1;
            conSimgs[indexs].style.opacity = 0.1; //把原来的图片透明度归位
            indexs--;
            if (indexs < 0) {
                indexs = conSimgs.length - 1;
            }
            conSimgs[indexs].style.zIndex = 10;
            alph(conSimgs[indexs], 100);
            aotoFools();
        }
        consr.onclick = function () {
            clearInterval(timer2);
            conSimgs[indexs].style.zIndex = 1;
            conSimgs[indexs].style.opacity = 0.1; //把原来的图片透明度归位
            indexs++;
            if (indexs > conSimgs.length - 1) {
                indexs = 0;
            }
            conSimgs[indexs].style.zIndex = 10;
            alph(conSimgs[indexs], 100);
            aotoFools();
        }

// menuhover
var conslLi = document.querySelectorAll('.cons-l>ul>li');
// var contc = document.querySelectorAll('.con-tc-list');
var shows = document.querySelectorAll('.con-tc');
var consM = document.querySelector('.cons-l');
// var cons = document.querySelector('.cons')
var liIndex = 0;

function liTab(n) {
    conslLi[n].onmouseover = function () {
        shows[liIndex].style.display = 'none';
        shows[n].style.display = 'block';
        conslLi[liIndex].className = '';
        conslLi[n].className = 'lihover';
        liIndex = n;
        // console.log(liIndex);
    }
    consM.onmouseout = function () {
        shows[liIndex].style.display = 'none';
        console.log(consM);
    }
}
for (var i = 0; i < conslLi.length; i++) {
    liTab(i);
}

 // 切换图片
 var svItem = document.querySelectorAll('.sv-item li');
 var imgUrl = document.querySelectorAll('.sv-item li a img');
 var items1 = [
     'img/items1.png',
     'img/items2.png',
     'img/items3.png',
     'img/items4.png',
     'img/items5.png',
     'img/items6.png',
     'img/items7.png',
     'img/items8.png',
     'img/items9.png',
     'img/items10.png',
     'img/items11.png',
     'img/items12.png'

 ]
 var items = [
     "img/item1.png",
     "img/item2.png",
     "img/item3.png",
     "img/item4.png",
     "img/item5.png",
     "img/item6.png",
     "img/item7.png",
     "img/item8.png",
     "img/item9.png",
     "img/item10.png",
     "img/item11.png",
     "img/item12.png",
 ];
 // console.log(items1[1]);
 
 var itemIndex = 0;
 
 function imgItem(n){
     
     svItem[n].onmouseover = function(){
         
         imgUrl[itemIndex].src = items1[itemIndex];
         imgUrl[n].src = items[n];
         itemIndex = n;
         // alert(0)
     }
     svItem[n].onmouseout = function(){
         imgUrl[itemIndex].src = items[itemIndex];
         imgUrl[n].src = items1[n];
         itemIndex = n;
     }
 }
 for(var i = 0;i<svItem.length;i++){
     imgItem(i);
     // alert(0)
 }