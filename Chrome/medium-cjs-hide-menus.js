var lastScrollTop = 0;
element.addEventListener("scroll", function() {
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
        document.getElementsByClassName("metabar")[0].style.display = "none"; 
        document.getElementsByClassName("u-bottom0")[0].style.display = "none";
   } else {
        document.getElementsByClassName("metabar")[0].style.display = "block";
        document.getElementsByClassName("u-bottom0")[0].style.display = "block";
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);