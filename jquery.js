/**
 * Created by ASUS on 2016/10/11.
 */

$(function(){
        var istop=true
        $(window).scroll(function(){
            var wheight=$(window).height() ;  //��ȡ�������ʾ����ĸ߶�
            var dheight=$(document).height() ;  //��ȡҳ���ĵ��ĸ߶�
            var thistop=$(window).scrollTop();//��ȡ�������������ĸ߶�

            if(thistop>wheight){
                $("#btn").css("display","block")
            }else{
                $("#btn").css("display","none")
            }
            if(!istop){
                clearInterval(timer)
            }
            istop=false
        })
        //$(document).scrollTop(thistop-100)
        $("#btn").click(function(){
          timer=setInterval(function(){
              var thistop=$(window).scrollTop();
              var speed=Math.floor(thistop/5);
              $(window).scrollTop(thistop-speed);
              istop=true;
              if(thistop<15){
                  clearInterval(timer);
                  $(window).scrollTop(0)
              }
          },30)
    })

})


$(document).ready(function(){
    var index=1
    var num=1
    var outspeed=400
    var inspeed=400
    $("#next").click(function(){  //�Ҽ�ͷ ���Ҳ���
        index ++
        var list= parseFloat($("#list").css("left"));
        $(function(){
            $("#list").fadeOut(outspeed, function (next) {
                $("#list").css("left", list-500+"px");
                $("#list").fadeIn(inspeed);
                if(list<=-2000){
                    $("#list").css("left",-500+"px");
                }
                $(function showbutton(){

                    var buttons=$("#buttons").find("span");
                    if(index>4){
                        index=1
                    }
                    buttons.removeClass("on");
                    buttons.eq(index-1).addClass("on");
                })
            });
        })
    })


    $("#prev").click(function(){   //���ͷ ���󲥷�
        index --;
        var list= parseFloat($("#list").css("left"));
        $("#list").fadeOut(outspeed, function (prev){
            $("#list").css("left", list+500+"px");
            if(list>=+500){
                $("#list").css("left",-2000+"px");
            }
            $("#list").fadeIn(inspeed);
            $(function showbutton(){
                var buttons=$("#buttons").find("span");
                if(index<1){
                    index=4
                }
                buttons.removeClass("on");
                buttons.eq(index-1).addClass("on");
            })
        })
    })
    $("span").click(function () {    //���յ����ڵ�λ��  ��ȡͼ

        $("span").removeClass("on")
        $(this).addClass("on");
        index=$(this).attr("index");
//                $("#list").css("left", (index-1)*(-300)-300+"px");
        $("#list").fadeOut(outspeed, function(){
            $("#list").css("left", (index-1)*(-500)-500+"px");
            $("#list").fadeIn(inspeed);
        })
    })

})