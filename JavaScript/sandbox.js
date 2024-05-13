
//about me
(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();


//slider
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 100;
   // IconVisibility();
   setTimeout(()=>IconVisibility(), 50);
});

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 100;
  //  IconVisibility();
  setTimeout(()=>IconVisibility(), 50);
});

window.onload = function() {
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth ||  tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabmenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function() {
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth ||  tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    // btnLeft.style.display = tabmenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
    activeDrag = false;
    tabMenu.classList.remove("dragging");
})

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
});

// clickaction
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
       tab.classList.remove("active")
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn,i) => {
    tabBtn.addEventListener("click",() => {
        tab_Nav(i);
    });
});

//slider
// const btnLeftd = document.querySelector(".left-btnd");
// const btnRightd = document.querySelector(".right-btnd");
// const tabMenud = document.querySelector(".tab-menud");

// const IconVisibilityd = () => {
//     let scrollLeftValued = Math.ceil(tabMenud.scrollLeft);
//     let scrollableWidthd = tabMenud.scrollWidth - tabMenud.clientWidth;

//     btnLeftd.style.display = scrollLeftValued > 0 ? "block" : "none";
//     btnRightd.style.display = scrollableWidthd > scrollLeftValued ? "block" : "none";
// }

// btnRightd.addEventListener("click", () => {
//     tabMenud.scrollLeft += 100;
//    // IconVisibilityd();
//    setTimeout(()=>IconVisibilityd(), 50);
// });

// btnLeftd.addEventListener("click", () => {
//     tabMenud.scrollLeft -= 100;
//   //  IconVisibilityd();
//   setTimeout(()=>IconVisibilityd(), 50);
// });

// window.onload = function() {
//     btnRightd.style.display = tabMenud.scrollWidth > tabMenud.clientWidth ||  tabMenud.scrollWidth >= window.innerWidth ? "block" : "none";
//     btnLeftd.style.display = tabMenud.scrollWidth >= window.innerWidth ? "" : "none";
// }

// window.onresize = function() {
//     btnRightd.style.display = tabMenud.scrollWidth > tabMenud.clientWidth ||  tabMenud.scrollWidth >= window.innerWidth ? "block" : "none";
//     // btnLeftd.style.display = tabmenud.scrollWidth >= window.innerWidth ? "" : "none";

//     let scrollLeftValued = Math.round(tabMenud.scrollLeft);

//     btnLeftd.style.display = scrollLeftValued > 0 ? "block" : "none";
// }

// let activeDragd = false;

// tabMenud.addEventListener("mousemove", (drag) => {
//     if(!activeDragd) return;
//     tabMenud.scrollLeft -= drag.movementX;
//     IconVisibilityd();
//     tabMenud.classList.add("dragging");
// });

// document.addEventListener("mouseup", () => {
//     activeDragd = false;
//     tabMenud.classList.remove("dragging");
// })

// tabMenud.addEventListener("mousedown", () => {
//     activeDragd = true;
// });

// // clickaction
// const tabsd = document.querySelectorAll(".tabd");
// const tabBtnsd = document.querySelectorAll(".tab-btnd");

// const tab_Navd = function(tabBtnClickd){
//     tabBtnsd.forEach((tabBtnd) => {
//         tabBtnd.classList.remove("active");
//     });

//     tabsd.forEach((tabd) => {
//        tabd.classList.remove("active")
//     });

//     tabBtnsd[tabBtndClickd].classList.add("active");
//     tabs[tabBtndClick].classList.add("active");
// }

// tabBtnsd.forEach((tabBtnd,i) => {
//     tabBtnd.addEventListener("click",() => {
//         tab_Navd(i);
//     });
// });