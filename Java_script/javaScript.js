let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides[slideIndex - 1]);
  slides[slideIndex - 1].style.display = "block";
}
setInterval(() => plusSlides(1), 5000);

function hideElements(selectors) {
  var elements = document.querySelectorAll(selectors);
  elements.forEach(function (element) {
    element.style.display = "none";
  });
}

function addClassOne() {
  hideElements(".sow_two, .sow_three");
  var elements = document.getElementsByClassName("sow_one");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

function addClassTwo() {
  hideElements(".sow_one, .sow_three");
  var elements = document.getElementsByClassName("sow_two");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

function addClassThree() {
  hideElements(".sow_one, .sow_two");
  var elements = document.getElementsByClassName("sow_three");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

function menuBTN() {
  var elements = document.getElementsByClassName("categori_list_mobile");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.left = "0";
  }
}

function menuHide() {
  var elements = document.getElementsByClassName("categori_list_mobile");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.left = "-100%";
  }
}

function filterBtn() {
  var elements = document.getElementsByClassName("filter_list_mobile");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.left = "0";
  }
}
function filterBtnHide() {
  var elements = document.getElementsByClassName("filter_list_mobile");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.left = "-100%";
  }
}

//dropdown style start ⬇

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
//dropdown style end ⬆

// these code was written for only workin with single product page which is start from here
function hideElements(selectors) {
  var elements = document.querySelectorAll(selectors);
  elements.forEach(function (element) {
    element.style.display = "none";
  });
}
function btnChanger(btnData) {
  var elementsBtnData = document.querySelectorAll(btnData);
  elementsBtnData.forEach(function (element) {
    element.style.cssText = "background-color:#ffffff; color :  #000000 ;";
  });
}

function DESCRIPTIONcontainer() {
  hideElements(
    ".REVIEWS_container, .INFORMATION_container,.DISCLAIMER_container"
  );
  btnChanger(".REVIEWS_btn,.DISCLAIMER_btn,.INFORMATION_btn");
  var elements = document.getElementsByClassName("DESCRIPTION_container");
  var DESCRIPTIONbtn = document.getElementsByClassName("DESCRIPTION_btn");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.cssText = "display:block;";
  }
  for (var b = 0; b < DESCRIPTIONbtn.length; b++) {
    DESCRIPTIONbtn[b].style.cssText =
      "background-color:#ff0000; color :  #ffffff ;";
  }
}

function REVIEWScontainer() {
  hideElements(
    ".DESCRIPTION_container, .INFORMATION_container,.DISCLAIMER_container"
  );
  btnChanger(".DESCRIPTION_btn,.DISCLAIMER_btn,.INFORMATION_btn");
  var elements = document.getElementsByClassName("REVIEWS_container");
  var REVIEWSbtn = document.getElementsByClassName("REVIEWS_btn");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
  for (var b = 0; b < REVIEWSbtn.length; b++) {
    REVIEWSbtn[b].style.cssText =
      "background-color:#ff0000; color :  #ffffff ;";
  }
}

function INFORMATIONcontainer() {
  hideElements(
    ".DESCRIPTION_container, .REVIEWS_container,.DISCLAIMER_container"
  );
  btnChanger(".REVIEWS_btn,.DISCLAIMER_btn,.DESCRIPTION_btn");
  var elements = document.getElementsByClassName("INFORMATION_container");
  var INFORMATIONbtn = document.getElementsByClassName("INFORMATION_btn");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
  for (var b = 0; b < INFORMATIONbtn.length; b++) {
    INFORMATIONbtn[b].style.cssText =
      "background-color:#ff0000; color :  #ffffff ;";
  }
}
function DISCLAIMERcontainer() {
  hideElements(
    ".DESCRIPTION_container, .REVIEWS_container,.INFORMATION_container"
  );
  btnChanger(".REVIEWS_btn,.INFORMATION_btn,.DESCRIPTION_btn");
  var elements = document.getElementsByClassName("DISCLAIMER_container");
  var DISCLAIMERbtn = document.getElementsByClassName("DISCLAIMER_btn");

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
  for (var b = 0; b < DISCLAIMERbtn.length; b++) {
    DISCLAIMERbtn[b].style.cssText =
      "background-color:#ff0000; color :  #ffffff ;";
  }
}
// these code was written for only working with single product page which is end from here

function shippingEstimaterBTN() {
  let div = document.getElementById("shippingEstimater");
  let arrowRotate = document.getElementsByClassName("arrowRotate")[0];
  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
    arrowRotate.style.transform = "rotate(180deg)";
  } else {
    div.style.display = "none";
    arrowRotate.style.transform = "rotate(0deg)";
  }
}

function discountCodeBTN() {
  let div = document.getElementById("discountContainer");
  let discountArrowRotate = document.getElementsByClassName(
    "discountArrowRotate"
  )[0];
  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
    discountArrowRotate.style.transform = "rotate(180deg)";
  } else {
    div.style.display = "none";
    discountArrowRotate.style.transform = "rotate(0deg)";
  }
}

//--------------------------- product page slider image zoom
