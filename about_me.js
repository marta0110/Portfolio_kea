
let circle = document.querySelector(".circle");

let circle1 = document.querySelector(".circle1");

let circle2 = document.querySelector(".circle2");

let circle3 = document.querySelector(".circle3");

let circle4 = document.querySelector(".circle4");
let circle5 = document.querySelector(".circle5");
let circle6 = document.querySelector(".circle6");
let circle7 = document.querySelector(".circle7");
let circle8 = document.querySelector(".circle8");
let circle9 = document.querySelector(".circle9");
let circle10 = document.querySelector(".circle10");
let circle11 = document.querySelector(".circle11");
let circle12 = document.querySelector(".circle12");
let circle13 = document.querySelector(".circle13");
let circle14 = document.querySelector(".circle14");
let circle15 = document.querySelector(".circle15");
let circle16 = document.querySelector(".circle16");
let circle17 = document.querySelector(".circle17");
let circle18 = document.querySelector(".circle18");
let circle19 = document.querySelector(".circle19");
let circle20 = document.querySelector(".circle20");
let circle21 = document.querySelector(".circle21");
let square = document.querySelector(".square");
let paint =document.querySelector(".paint");
let a = document.querySelector(".a");
let brush = document.querySelector(".brush");
let pc = document.querySelector(".pc");
let phone = document.querySelector(".phone");
let cloud = document.querySelector(".cloud");
let work = document.querySelector(".work");
let pen = document.querySelector(".pen");
let brackets = document.querySelector(".brackets");
let image =document.querySelector(".image1");
let question = document.querySelector(".question");
let mouse = document.querySelector(".mouse");



window.onload = floatElements();


function floatElements() {

    circle.classList.add("moveCircle");
    circle1.classList.add("moveCircle1");
    circle2.classList.add("moveCircle2");
    circle3.classList.add("moveCircle3");
    circle4.classList.add("moveCircle4");
    circle5.classList.add("moveCircle5");
    circle6.classList.add("moveCircle6");
    circle7.classList.add("moveCircle7");
    circle8.classList.add("moveCircle8");
    circle9.classList.add("moveCircle9");
    circle10.classList.add("moveCircle10");
    circle11.classList.add("moveCircle11");
    circle12.classList.add("moveCircle12");
    circle13.classList.add("moveCircle13");
    circle14.classList.add("moveCircle14");
    circle15.classList.add("moveCircle15");
    circle16.classList.add("moveCircle16");
    circle17.classList.add("moveCircle17");
    circle18.classList.add("moveCircle18");
    circle19.classList.add("moveCircle19");
    circle20.classList.add("moveCircle20");
    circle21.classList.add("moveCircle21");
    square.classList.add("moveSquare");
    paint.classList.add("movePaint");
    a.classList.add("moveA");
    brush.classList.add("moveBrush");
    pc.classList.add("movePc");
    phone.classList.add("movePhone");
   cloud.classList.add("moveCloud");
     work.classList.add("moveWork");
     pen.classList.add("movePen");
     brackets.classList.add("moveBrackets");
     image.classList.add("moveImage");
     question.classList.add("moveQuestion");
     mouse.classList.add("moveMouse");
    console.log('visible');
    

}


//main nav//
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//left nav//

function openLeftNavOn() {
    document.getElementById("myLeftSidenavOn").style.width = "100vw";
    
}
function closeLeftNavOn() {
    document.getElementById("myLeftSidenavOn").style.width = "0vw";
    
}


function openLeftNav() {
    document.getElementById("myLeftSidenav").style.width = "25vw";
 document.getElementById("myLeftSidenav").addEventListener("click", openLeftNavOn);
 
}

function closeLeftNav() {
    document.getElementById("myLeftSidenav").style.width = "0";
}


//right nav//

function openRightNavOn() {
    document.getElementById("myRightSidenavOn").style.width = "100vw";
  
    
}
function closeRightNavOn() {
    document.getElementById("myRightSidenavOn").style.width = "0vw";
    
}

function openRightNav() {
    document.getElementById("myRightSidenav").style.width = "25vw";
 document.getElementById("myRightSidenav").addEventListener("click", openRightNavOn);
 
}

function closeRightNav() {
    document.getElementById("myRightSidenav").style.width = "0";
}

//Menu letters //

js: $( document ).ready(function() {
    console.log( "ready!" );

    $( ".wrapper-letters" ).hover(function() {
        setTimeout(function(){
            $( "#m" ).addClass( "animate-letter" );
        }, 100);
        setTimeout(function(){
            $( "#e" ).addClass( "animate-letter" );
        }, 300);
        setTimeout(function(){
            $( "#n" ).addClass( "animate-letter" );
        }, 500);
        setTimeout(function(){
            $( "#u" ).addClass( "animate-letter" );
        }, 700);

        setTimeout(function(){
            setTimeout(function(){
                $( "#m" ).removeClass( "animate-letter" );
            }, 0);
            setTimeout(function(){
                $( "#e" ).removeClass( "animate-letter" );
            }, 200);
            setTimeout(function(){
                $( "#n" ).removeClass( "animate-letter" );
            }, 400);
            setTimeout(function(){
                $( "#u" ).removeClass( "animate-letter" );
            }, 600);
        }, 900);
    });

});


js: $( document ).ready(function() {
    console.log( "ready!" );

    $( ".wrapper-letters_name" ).hover(function() {
        setTimeout(function(){
            $( "#l" ).addClass( "animate-letter_name" );
        }, 100);
        setTimeout(function(){
            $( "#o" ).addClass( "animate-letter_name" );
        }, 300);
        setTimeout(function(){
            $( "#r" ).addClass( "animate-letter_name" );
        }, 500);
        setTimeout(function(){
            $( "#e3" ).addClass( "animate-letter_name" );
        }, 700);
        setTimeout(function(){
            $( "#l1" ).addClass( "animate-letter_name" );
        }, 900);
   setTimeout(function(){
            $( "#e1" ).addClass( "animate-letter_name" );
        }, 1100);
        setTimeout(function(){
            $( "#i" ).addClass( "animate-letter_name" );
        }, 1300);
           setTimeout(function(){
            $( "#h" ).addClass( "animate-letter_name" );
        }, 1500);
        setTimeout(function(){
            $( "#e2" ).addClass( "animate-letter_name" );
        }, 1700);
        setTimeout(function(){
            $( "#c" ).addClass( "animate-letter_name" );
        }, 1900);
        setTimeout(function(){
            $( "#k" ).addClass( "animate-letter_name" );
        }, 2100);
   setTimeout(function(){
            $( "#m1" ).addClass( "animate-letter_name" );
        }, 2300);
        setTimeout(function(){
            $( "#a" ).addClass( "animate-letter_name" );
        }, 2500);
         setTimeout(function(){
            $( "#n1" ).addClass( "animate-letter_name" );
        }, 2700);
         setTimeout(function(){
            $( "#n2" ).addClass( "animate-letter_name" );
        }, 2900);
        

        setTimeout(function(){
            setTimeout(function(){
                $( "#l" ).removeClass( "animate-letter_name" );
            }, 0);
            setTimeout(function(){
                $( "#o" ).removeClass( "animate-letter_name" );
            }, 200);
            setTimeout(function(){
                $( "#r" ).removeClass( "animate-letter_name" );
            }, 400);
            setTimeout(function(){
                $( "#e3" ).removeClass( "animate-letter_name" );
            }, 600);
             setTimeout(function(){
            $( "#l1" ).removeClass( "animate-letter_name" );
        }, 800);
   setTimeout(function(){
            $( "#e1" ).removeClass( "animate-letter_name" );
        }, 1000);
        setTimeout(function(){
            $( "#i" ).removeClass( "animate-letter_name" );
        }, 1200);
            setTimeout(function(){
            $( "#h" ).removeClass( "animate-letter_name" );
        }, 1400);
        setTimeout(function(){
            $( "#e2" ).removeClass( "animate-letter_name" );
        }, 1600);
        setTimeout(function(){
            $( "#c" ).removeClass( "animate-letter_name" );
        }, 1800);
        setTimeout(function(){
            $( "#k" ).removeClass( "animate-letter_name" );
        }, 2000);
   setTimeout(function(){
            $( "#m1" ).removeClass( "animate-letter_name" );
        }, 2200);
        setTimeout(function(){
            $( "#a" ).removeClass( "animate-letter_name" );
        }, 2400);
         setTimeout(function(){
            $( "#n1" ).removeClass( "animate-letter_name" );
        }, 2700);
         setTimeout(function(){
            $( "#n2" ).removeClass( "animate-letter_name" );
        }, 2900); 
        }, 3100);
    });

});