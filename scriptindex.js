



let triangle = document.querySelector(".triangle");
let triangle_one = document.querySelector(".triangle1");
let triangle_two = document.querySelector(".triangle2");
let triangle_three = document.querySelector(".triangle3");
let triangle_four = document.querySelector(".triangle4");
let triangle_fifth = document.querySelector(".triangle5");
let triangle_six = document.querySelector(".triangle6");
let triangle_seven = document.querySelector(".triangle7");



window.onload = floatElements();


function floatElements() {
    triangle.classList.add("moveTriangle");
    triangle_one.classList.add("moveTriangle1");
     triangle_two.classList.add("moveTriangle2");
    triangle_three.classList.add("moveTriangle3");
    triangle_four.classList.add("moveTriangle4");
    triangle_fifth.classList.add("moveTriangle5");
    triangle_six.classList.add("moveTriangle6");
    triangle_seven.classList.add("moveTriangle7");
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