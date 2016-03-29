/**
 * Created by Administrator on 2016/3/29.
 */
$(function(){

    //header顶部动画
    $(".h-box ul  li").hover(function(){
          var index=$(this).index();
          $(".h-box ul  li").eq(index).find(".h-img").attr({"src":"images/seeo_0"+index+".png"});
          $(".header-son").eq(index).show();
    },function(){
        var index=$(this).index();
        $(".h-box ul  li").eq(index).find(".h-img").attr({"src":"images/seey_0"+index+".png"});
        $(".header-son").eq(index).hide();
    })
    //首页二级下拉
    $(".nav_home").mouseover(function(){
        $(".nav_home_erji").show();
    })
    $(".nav_home_erji").hover(function(){
        $(".nav_home_erji").show();
    },function(){
        $(".nav_home_erji").hide();
    })
     //banner轮播
    var t=setInterval(move,3000);
    var con=$(".banner_content li");
    var widths=con.outerWidth();
    var length=con.length;
    var num=0;
    var flag=true;
    var banner=$(".banner_content")
    banner.css("width",widths*length)//ul的宽度
    function move() {
        banner.finish();
        //先动画再移动
        banner.animate({left:-widths},1000,function(){
            $(".banner_content li:first").appendTo(banner);
            banner.css({left:0});
            flag=true;
        })
        num++;
        if(num>$(".banner_num li").length-1){
            num=0;
        }
        $(".banner .content .banner_num li").css({width:"12px","border-radius":"50%"}).eq(num).css({width:"25px","border-radius":"15px"});
    }


//箭头的移入移出事件
    $(".left,.right").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,3000);
    })
//箭头的点击事件
    $(".left").click(function(){
        if(!flag){
            return;
        }
        move();
        flag=false;
    })
    $(".right").click(function(){
        //num-=2;move();
        if(!flag){
            return;
        }
        rmove();
        flag=false;
    })

    function  rmove(){//先移动再动画
        $(".banner_content li:last").prependTo(banner);
        banner.css({left:-widths});
        banner.animate({left:0},1000,function(){
            flag=true;
        });
        num--;
        if(num<-2){
            num=0;
        }
        $(".banner .content .banner_num li").css({width:"12px","border-radius":"50%"}).eq(num).css({width:"25px","border-radius":"15px"});

    }
    //小圆圈的hovershijian
    $(".banner_num li").each(function(index){
        this.index=index;
        //移入移出事件
        $(this).hover(function(){
            clearInterval(t);
            $(this).siblings().css({width:"12px","border-radius":"50%"}).end().css({width:"25px","border-radius":"15px"});
            move2(this.index);
        },function(){
            t=setInterval(move,3000);
        })
    })
    function move2(aa){
        banner.finish();
        banner.animate({left:-widths*aa},1000,function(){
            $(".banner_content li:first").appendTo(banner);
            banner.css({left:0});
            flag=true;
        })
    }




})