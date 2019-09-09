        
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

 // function move(){
    var imgs = document.querySelectorAll(".imgs a");
    var leftbtn = document.querySelector('.leftbtn');
    var rightbtn = document.querySelector('.rightbtn');
    var mins = document.querySelector('.minbtn')
    var index = 0; //记录下标
    var timer, timer1;


    alph(imgs[index], 100); //进入页面
    aotoFool();


    for (var i = 0; i < imgs.length; i++) { //动态创建span
        var newSpan = document.createElement('span');
        mins.appendChild(newSpan);
    }
    var minbtn = document.querySelectorAll('.minbtn span'); //获取创建后的span
    // console.log(minbtn)

    //封装透明度运动
    minbtn[0].className = "bacshow"; //第一个先显示
    function aotoFool() { //自动播放
        // clearInterval(timer1)
        timer1 = setInterval(function (ev) {
            // console.log(index);
            imgs[index].style.zIndex = 1;
            imgs[index].style.opacity = 0.1; //把原来的图片透明度归位
            minbtn[index].className = "";

            index++;
            //如果下标大于imgs长度时，下标为0
            if (index >= imgs.length) {
                index = 0;
            }
            imgs[index].style.zIndex = 10;
            minbtn[index].className = "bacshow";
            alph(imgs[index], 100) //透明度增加到1
        }, 3000)
    }

    //span点击事件;给每个sapn绑定点击事件
    for (var i = 0; i < minbtn.length; i++) {
        minbtn[i].s = i;
        minbtn[i].onclick = function () {
            clearInterval(timer1); //清除自动播放计时器
            imgs[index].style.zIndex = 1;
            imgs[index].style.opacity = 0.1;
            minbtn[index].className = "";

            //赋值下标
            index = this.s;

            imgs[index].style.zIndex = 10;
            minbtn[index].className = 'bacshow';
            alph(imgs[index], 100); //点击span下表对应的图片透明度增加到100
            aotoFool();
        }
    }

    // 点击左图标
    leftbtn.onclick = function () {
        clearInterval(timer1);
        imgs[index].style.zIndex = 1;
        imgs[index].style.opacity = 0.1;
        minbtn[index].className = '';

        index--;
        //判断   如果index<0   index跑到最大值
        if (index < 0) {
            index = imgs.length - 1;
        }


        imgs[index].style.zIndex = 10;
        minbtn[index].className = 'bacshow';
        alph(imgs[index], 100);
        aotoFool();
    }

    //点击右图标时
    rightbtn.onclick = function () {
        clearInterval(timer1);
        imgs[index].style.zIndex = 1;
        imgs[index].style.opacity = 0.1;
        minbtn[index].className = '';

        index++;
        if (index > imgs.length - 1) {
            index = 0
        }

        imgs[index].style.zIndex = 10;
        minbtn[index].className = 'bacshow';
        alph(imgs[index], 100);
        aotoFool();
    }

    function alph(dom, tmd) {
        var opcit = 10; //初始化透明度
        clearInterval(timer);
        timer = setInterval(function () {
            if (opcit > tmd) { //判断初始透明度是否大于目标透明度
                var speed = -5;
            } else {
                var speed = 5;
            }
            if (Math.abs(opcit - tmd) <= Math.abs(speed)) { //判断dom.opcit - tmd绝对值是否小于每次增加值speed；
                clearInterval(timer);
                dom.style.opacity = tmd / 100; // 如果小于直接到达目标值
            } else {
                opcit += speed;
                dom.style.opacity = opcit / 100;
            }
        }, 30)
    }