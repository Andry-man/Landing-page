let footer_button = document.getElementById('footer_button');
let section_1 = document.getElementById('section_1');
let section_2 = document.getElementById('section_2');
let section_3 = document.getElementById('section_3');
let section_4 = document.getElementById('section_4');
let section_5 = document.getElementById('section_5');
let section_6 = document.getElementById('section_6');
let section1 = document.getElementById('section-1');
let section2 = document.getElementById('section-2');
let section3 = document.getElementById('section-3');
let section4 = document.getElementById('section-4');
let section5 = document.getElementById('section-5');
let section6 = document.getElementById('section-6');
let section_button_1 = document.getElementById('section_button_1');
let section_button_2 = document.getElementById('section_button_2');
let section_button_3 = document.getElementById('section_button_3');
let section_button_4 = document.getElementById('section_button_4');
let section_button_5 = document.getElementById('section_button_5');
let section_button_6 = document.getElementById('section_button_6');
let button_search = document.getElementById('button_search');
let maine_container_search = document.getElementById('maine_container_search');
let button_close_search = document.getElementById('button_close_search');
let button_close_menu = document.getElementById('button_close_menu');
let maine_container_menu = document.getElementById('maine_container_menu');
if ( document.documentElement.clientWidth > 480) {
section_button_1.onmouseover = function() {
        section_1.style.display = "block";
        section1.style.display = "none";
}
section_button_1.onmouseout = function() {
        section_1.style.display = "none";
        section1.style.display = "block";
}
section_button_2.onmouseover = function() {
    section_2.style.display ="block";
    section2.style.display = "none";
}
section_button_2.onmouseout = function() {
    section_2.style.display = "none";
    section2.style.display = "block";
}
section_button_3.onmouseover = function() {
    section_3.style.display = "block";
    section3.style.display = "none";
}
section_button_3.onmouseout = function() {
    section_3.style.display = "none";
    section3.style.display = "block";
}
section_button_4.onmouseover = function() {
section_4.style.display = "block";
section4.style.display = "none";
}
section_button_4.onmouseout = function() {
section_4.style.display = "none";
section4.style.display = "block";
}
section_button_5.onmouseover = function() {
section_5.style.display = "block";
section5.style.display = "none";
}
section_button_5.onmouseout = function() {
section_5.style.display = "none";
section5.style.display = "block";
}
section_button_6.onmouseover = function() {
section_6.style.display = "block";
section6.style.display = "none";
}
section_button_6.onmouseout = function() {
section_6.style.display = "none";
section6.style.display = "block";
}
};


function search() {
    search_block.style.display = "none";
  }
  function searchON() {
    search_block.style.transform = "translateX(0vw)";
  }
  function move_menuON() {
  maine_container_search.style.display = "none";
  }
  function move_menuONmenu() {
    maine_container_menu.style.display = "none";
    }
  function move_menuONonemob() {
  maine_container_search.style.transform = "translateX(-56vw)";
  }
  function move_menuONonemobleft() {
    maine_container_search.style.left = "55.9vw";
    }
    function move_menuONonemobleftmenu() {
        maine_container_menu.style.left = "123vw";
        }
  function move_menuONonemobmenu() {
    maine_container_menu.style.transform = "translateX(-56vw)";
    }



  button_search.onclick = function() {
    if ( document.documentElement.clientWidth <= 480) {
    maine_container_search.style.display = "flex";
    maine_container_search.style.opacity = "1";
    setTimeout(move_menuONonemob, 100); 
    setTimeout(move_menuONonemobleft, 1700); 
    } else { 
    maine_container_search.style.display = "flex";
    maine_container_search.style.opacity = "1";
    setTimeout(move_menuONonemobleft, 1700);
    setTimeout(move_menuONonemob, 100); 
     }
    }
    button_close_search.onclick = function() {
        if ( document.documentElement.clientWidth <= 480) {
        maine_container_search.style.transform = "translateX(46vw)";
        maine_container_search.style.opacity = "0";
        setTimeout(move_menuON, 560);
        } else { 
        maine_container_search.style.transform = "translateX(46vw)";
        maine_container_search.style.opacity = "0";
        setTimeout(move_menuON, 560);
         }
    }

    button_menu.onclick = function() {
        if ( document.documentElement.clientWidth <= 480) {
            maine_container_menu.style.display = "flex";
            maine_container_menu.style.opacity = "1";
            setTimeout(move_menuONonemobmenu, 500); 
            setTimeout(move_menuONonemobleftmenu, 1700); 
        } else { 
        maine_container_menu.style.display = "flex";
        maine_container_menu.style.opacity = "1";
        setTimeout(move_menuONonemobmenu, 100);
        setTimeout(move_menuONonemobleftmenu, 1700);  
         }
        }
        button_close_menu.onclick = function() {
            if ( document.documentElement.clientWidth <= 480) {
                maine_container_menu.style.transform = "translateX(46vw)";
                maine_container_menu.style.opacity = "0";
                setTimeout(move_menuONmenu, 560);
            } else { 
            maine_container_menu.style.transform = "translateX(46vw)";
            maine_container_menu.style.opacity = "0";
            setTimeout(move_menuONmenu, 560);
             }
        }


        if ( document.documentElement.clientWidth < 481) {
            footer_button.onclick = function() {
                window.scrollBy({
                    top: -1500,
                    left: 0,
                    behavior: 'smooth'
                  });
        }
    }